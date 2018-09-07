import React from 'react';
import ReactDOMServer from 'react-dom/server';

import archiver from "archiver";
import fs from "fs";
import path from "path";
import sqlite3 from 'sqlite3';
import tmp from "tmp";
import Minizip from "node-minizip";
import _ from "lodash";

import App, { CARD_TYPES } from '../src/App';

const ANKI_SQLITE3_FILE = "collection.anki2";


function openAnkiArchive(ankiArchivePath) {
  return new Promise((resolve, reject) => {
    const outputDir = tmp.dirSync();
    Minizip.unzip(ankiArchivePath, outputDir.name, err => {
      if (err) {
        reject(err);
      } else {
        resolve({ankiArchivePath, tmpRoot: outputDir.name});
      }
    })
  });
}

function openAnkiSqlite3({ankiArchivePath, tmpRoot}) {
  const filePath = path.join(tmpRoot, ANKI_SQLITE3_FILE);
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(filePath);
    db.on("open", () => resolve({ankiArchivePath, tmpRoot, db}));
    db.on("error", reject);
  });
}

function getModels({ankiArchivePath, tmpRoot, db}) {
  return new Promise((resolve, reject) => {
    db.get("SELECT models FROM col", (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve({ankiArchivePath, tmpRoot, db, models:JSON.parse(row.models)});
      }
    })
  })
}

function getCardTypeOutput(cardType) {
  return ReactDOMServer.renderToStaticMarkup(
    <App
      forExport={true}
      cardType={cardType}
    />
  );
}

function updateModel(model, cardType, template) {
  const index = _.findIndex(model.tmpls, tmpl => tmpl.name == cardType);
  if (index === -1) {
    console.log(`Card type ${cardType} not found. Skipping.`);
    return;
  }
  model.tmpls[index].bqfmt = template;
  console.log(`Card type ${cardType} updated.`);
}

function updateCardTypeOutputs({ankiArchivePath, tmpRoot, db, models}) {
  const modelKey = _.first(_.keys(models));
  const model = models[modelKey];
  CARD_TYPES.forEach(cardType => {
    const template = getCardTypeOutput(cardType);
    updateModel(model, cardType, template);
  })
  return {ankiArchivePath, tmpRoot, db, models};
}

function updateAnkiSqlite3({ankiArchivePath, tmpRoot, db, models}) {
  return new Promise((resolve, reject) => {
    db.run("UPDATE col SET models = ?", [JSON.stringify(models)], err => {
      db.close();
      if (err) {
        reject(err);
      } else {
        resolve({ankiArchivePath, tmpRoot});
      }
    });
  })
}

function overwriteAnkiArchive({ankiArchivePath, tmpRoot}) {
  return new Promise((resolve, reject) => {
    fs.unlinkSync(ankiArchivePath);
    const output = fs.createWriteStream(ankiArchivePath);
    const archive = archiver("zip", {zlib: { level: 9 }});
    output.on("end", resolve);
    archive.on("error", reject);
    archive.pipe(output);
    archive.directory(tmpRoot, false);
    archive.finalize();
  })
}


function main() {
  const args = process.argv.slice(2);
  if (_.size(args) !== 1) {
    console.log("Please pass in an .apkg filepath")
    process.exit(1);
  }

  const ankiArchivePath = _.first(args);
  if (!fs.existsSync(ankiArchivePath)) {
    console.log(`${ankiArchivePath} is not a valid filepath`);
  }

  openAnkiArchive(ankiArchivePath)
    .then(openAnkiSqlite3)
    .then(getModels)
    .then(updateCardTypeOutputs)
    .then(updateAnkiSqlite3)
    .then(overwriteAnkiArchive)
    .catch(console.error)
}

main();