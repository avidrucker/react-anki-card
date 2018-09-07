import React, { Component } from 'react';

import './App.css';

import CARDS from './sample_cards.json';
import AnkiCard from './AnkiCard';
//import {l2Context} from './Contexts/lang-context';
//import {L1Context} from './Contexts/lang-context';
//import {ImmersionContext} from './Contexts/immersion-context';
//import {DevContext} from './Contexts/dev-context';
import {LabelContext} from './Contexts/label-context';
import {ExportContext} from './Contexts/export-context';
import {ThemeContext} from './Contexts/theme-context';
import {LangContext} from './Contexts/lang-context';

const CARD_INDEX = 2; //TEST: 0=="ali", 1=="ijo", 2=="ilo"
const TYPE_INDEX = 4;
/*TEST: 0=="look", 1=="hear", 2=="readLP",3=="readTranslit",
4=="recall", 5=="writeDictation", 6=="readSign", 7=="makeSign",
8=="describePicture", 9=="mnemonic"*/
//const PROMPT_INDEX = 0; //0==english(L1), 1==toki pona (l2)//todo: delegate this to "immersion mode"
const LANG_INDEX = 1; //TEST 0=="Japanese", 1=="toki pona", 2=="Hebrew"
const THEME_INDEX = 0;
const LABEL_ON = true; //formerly SHOW_ELEMENT_NAME
const IS_FOR_EXPORT = false; //formerly EXPORT_MODE

const LANGS = ["Japanese","toki pona","Hebrew"];
export const CARD_TYPES = ["look","hear","TPreadLP", "TPreadTranslit",
    "recall","TPwriteDictation","readSign","makeSign","describePicture", "mnemonic"];
const THEMES = ["zen-light","zenburn","black-board","index-card","zen-dark","beautiful-photo"];

const CARD = CARDS.tokiPona[CARD_INDEX];
const CARD_TYPE = CARD_TYPES[TYPE_INDEX];
const THEME = THEMES[THEME_INDEX];
const LANG = LANGS[LANG_INDEX];

class App extends Component {
  render() {
    return (
      <div className="App">
        <LangContext.Provider value={LANG}>
          <ExportContext.Provider value={this.props.forExport || IS_FOR_EXPORT}>
      			<LabelContext.Provider value={LABEL_ON}>
              <ThemeContext.Provider value={THEME}>
                <Content cardType={this.props.cardType} />
              </ThemeContext.Provider>
      			</LabelContext.Provider>
          </ExportContext.Provider>
        </LangContext.Provider>
      </div>
    );
	}
}

function Content(props) {
	return (
		<AnkiCard
			card={CARD}
			cardLang={LANG}
			cardType={props.cardType || CARD_TYPE}
			theme = {THEME}
		/>
	);
}

export default App;
