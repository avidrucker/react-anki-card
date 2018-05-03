import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import CARDS from './sample_toki_pona.json';
import AnkiCard from './AnkiCard';

const CARD_INDEX = 2; //TEST: 0=="ali", 1=="ilo", 2=="ijo"
const TYPE_INDEX = 5; //TEST: 0=="look", 1=="hear", 2=="readLinjaPona", 3=="readTranslit", 4=="recall", 5=="writeDictation"
const PROMPT_INDEX = 0; //0==english, 1==toki pona
const LABEL_ON = true; //formerly SHOW_ELEMENT_NAME
const IS_FOR_EXPORT = false; //formerly EXPORT_MODE
const CARD_TYPES = ["look","hear","readLinjaPona","readTranslit","recall","writeDictation","readSign","makeSign"]
const CARD_TYPE = CARD_TYPES[TYPE_INDEX]; //todo: implement READ_LP(linjaPona), WRITE_LP, HEAR, LOOK, RECALL, optionally READ_transcription

const THEME_INDEX = 0;
const THEMES = ["zen_bw","blackboard"];
const THEME = THEMES[THEME_INDEX];

//const IMAGE_PATH = "";

//todo: implement "readLinjaPona (translate L2-to-L1), writeLinjaPona(dictate), hear(listen), look(picture), recall(translate L1-to-L2)" (WIP)
//todo: implement REACT2HTML markup where the page is exportable to Anki compatible HTML (WIP)
//todo: enable IMMERSION_MODE where all L1 is hidden
//todo: embed and enable topi pona font "linja pona 3" with linja pona SVG image fallback
//todo: implement full accessibility compliance (consult Taylor on how-to)
//todo: implement toki pona, then French, then Japanese WIP
// REF: `${size} ${importance}`
//enable theming --> research for 10 minutes theming options, weigh pros & cons, and make a decision with no more than 10 minutes further deliberation --> CUSTOM TACHYONS

/*todo: refactor AudioOnly, CardTermOnly & CardTermWithAudio so that they are
composable as two span elements that can be each contained separately OR together
within a TermWrapper HOC like so:
- <TermWarpper name="audio and term">	<CardAudio /> <CardTerm /> </TermWrapper>
- <TermWarpper name="audio only">	<CardAudio /> </TermWrapper>
- <TermWarpper name="term only">	<CardTerm /> </TermWrapper>
... and all the styling necessary can be delegated to the wrapper (not the children)
*/


class App extends Component {
  render() {
    return (
      <div className="App">
				<AnkiCard
					card={CARDS.tokiPona[CARD_INDEX]}
					cardLang="toki pona"
					cardType={CARD_TYPE}
					isForExport={IS_FOR_EXPORT}
					labelOn={LABEL_ON}
					theme={THEME}
				/>
      </div>
    );
  }
}

export default App;
