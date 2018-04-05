import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import blackboard1 from './black-1072366.jpg';
import blackboard2 from './board-2167844.jpg';
import CARDS from './sample_toki_pona.json';

const THEME_INDEX = 0;
const CARD_INDEX = 2; //TESTING: change number to see diff card
const TYPE_INDEX = 2;
const PROMPT_INDEX = 0; //0==english, 1==toki pona
const SHOW_ELEMENT_NAME = true;
const EXPORT_MODE = false;
const CARD_TYPES = ["look","hear","readLinjaPona","readTransliteration","recall","writeDictation","readSign","makeSign"]
const CARD_TYPE = CARD_TYPES[TYPE_INDEX]; //todo: implement READ_LP(linjaPona), WRITE_LP, HEAR, LOOK, RECALL, optionally READ_transcription
const THEMES = ["zen_bw","blackboard"];
const THEME = THEMES[THEME_INDEX];

//const IMAGE_PATH = "";

const READ_SITELEN_PROMPTS = ["read this out loud:","o toki e ni kepeken uta kalama sina:"];
const READ_TRANSLITERATION_PROMPTS = ["translate this to English","o ante e ni tawa toki Inli:"];
const HEAR_PROMPTS = ["translate this into English:","o kute. o ante e nimi kute\ntan toki pona tawa toki Inli:"];
const TRANSCRIBE_PROMPTS = ["write what you hear in 'sitelen pona':","o sitelen kepeken siteilen pona e ni: toki kute sina."]
const WRITE_PROMPTS = ["write this using sitelen pona:","o sitelen e ni kepeken sitelen pona:"];
const READ_PROMPT = READ_SITELEN_PROMPTS[PROMPT_INDEX];
const READ_PROMPT2 = READ_TRANSLITERATION_PROMPTS[PROMPT_INDEX];
const HEAR_PROMPT = HEAR_PROMPTS[PROMPT_INDEX];
const WRITE_PROMPT = TRANSCRIBE_PROMPTS[PROMPT_INDEX];
const WRITE_PROMPT2 = WRITE_PROMPTS[PROMPT_INDEX];


//todo: add mnemonic device component
//todo: implement "readLinjaPona (translate L2-to-L1), writeLinjaPona(dictate), hear(listen), look(picture), recall(translate L1-to-L2)" (WIP)
//todo: implement REACT2HTML markup where the page is exportable to Anki compatible HTML (WIP)
//todo: enable IMMERSION_MODE where all L1 is hidden
//todo: embed and enable topi pona font "linja pona 3" with linja pona SVG image fallback
//todo: implement full accessibility compliance (consult Taylor on how-to)
//todo: implement toki pona, then French, then Japanese WIP
// REF: `${size} ${importance}`
//DONE: enable theming --> research for 10 minutes theming options, weigh pros & cons, and make a decision with no more than 10 minutes further deliberation --> CUSTOM TACHYONS

/*
How to render a multi-line text string in React:
https://stackoverflow.com/questions/35351706/how-to-render-a-multi-line-text-string-in-react
es6 template literals:
https://stackoverflow.com/questions/21668025/react-jsx-access-props-in-quotes
*/

/*

burn down list:
1. implement RECALL: DONE
2. implement READ_TP w/ two optional prompts ("read this out loud:","o toki e ni kepeken uta kalama sina")  - DONE
3. create version of CardElement where all play buttons render on the same row in an "audio button group block" - DONE
4. implement HEAR - DONE
4. implement LOOK
5. ...

*/
//"recall","readLinjaPona","hear","",""

/*low level field component, not to be used directly*/
const AudioSpan = ({field}) => (
	<span className="play-button" >
		{field}
	</span>
);

/*use this high level component to show one or more audio clips & their play buttons*/
const AudioBlock = ({name, field, additionalClass}) => (
	<div className="card-element">
		{SHOW_ELEMENT_NAME && <ElementLabel text={name} />}
		<div className={`card-element-line anki-card-audio ${additionalClass}`}>
			{!EXPORT_MODE && field.split("\n").map(i => {
				return (
				<AudioSpan key={i} field="▸" />
				);
			})}
			{
				!!EXPORT_MODE && <div>{`{{${field}}}`}</div>
			}
		</div>
	</div>
);

/*use this component to mark element blocks (primarily for testing) */
const ElementLabel = ({text}) => (
	<span className="element-tag">
		{text}
	</span>
);

/*general dynamic span elements*/
const CardElementSpan = ({name, field, size, additionalClass, importance, hintedOut}) => (
	<span className={`${size} ${importance} card-element-span ${additionalClass}`}>
		{!EXPORT_MODE && field.split("\n").map(i => {
			return (
				<span className="card-element-line" key={i+100}>
					{!hintedOut && i}
					{!!hintedOut && `[show ${name}]`}
				</span>
				);
			})
		}
		{
			!!EXPORT_MODE &&
			<span className="card-element-line">
				{!!hintedOut && `{{hint::${field}}}`}
				{!hintedOut && `{{${field}}}`}
			</span>
		}
	</span>
);

/*use this component to display text that isn't dynamic/conditional*/
const StaticCardElement = ({name, text, size, additionalClass, importance, hintedOut}) => (
	<div className="card-element">
		{SHOW_ELEMENT_NAME && <ElementLabel text={name} />}
		<div className={`${size} ${importance} ${additionalClass}`}>
			{text.split("\n").map(i => {
				return (
					<div className="card-element-line" key={i+100}>
						{i}
					</div>
					);
				})
			}
		</div>
	</div>
);

/*general dynamic block elements*/
const CardElement = ({name, field, size, additionalClass, importance, hintedOut}) => (
	<div className="card-element">
		{SHOW_ELEMENT_NAME && <ElementLabel text={name} />}
		<div className={`${size} ${importance} ${additionalClass}`}>
			{!EXPORT_MODE && field.split("\n").map(i => {
					return (
						<div className="card-element-line" key={i+100}>
							{!hintedOut && i}
							{!!hintedOut && `[show ${name}]`}
						</div>
						);
					})
				}
				{
					!!EXPORT_MODE &&
					<div className="card-element-line">
						{`{{${field}}}`}
					</div>
				}
			</div>
		</div>
);

/*general image, this can represent a text image, a photo, a picture, but is not meant for use as the background wallpaper*?
/*todo: implement SVG linja pona, SVG fontawesome*/
/*todo: implement IMG block (2-4 images in either 2 pane rectangle, 3 pane triptych, or 4 pane square window format, SVG fontawesome*/
const Image = ({additionalClass, name, resource}) => {
	const img = require(`./Images/${resource}`);
	return (
		<div className="anki-card-image">
			{SHOW_ELEMENT_NAME && <ElementLabel text={name} />}
			<div className="card-element-line">
				{
					!EXPORT_MODE &&
					<img
						className={`${additionalClass}`}
						src={img}
						alt={name}
					/>
				}
				{!!EXPORT_MODE && <span>{`{{${resource}}}`}</span> }
			</div>
		</div>
	);
};

const ExampleImage = ({field}) => (
	<Image
		additionalClass="example-image"
		name="Example Image"
		resource={field}
	/>
);

/*generally appears at the top/bottom of each card to make it clear which deck the learner is currently using.
this may be substituted with a country flag or other visual indicator such as a logo or Unicode symbol */
const Category = ({cardLang, cardType}) => (
	<div className="card-element">
		{SHOW_ELEMENT_NAME && <ElementLabel text="language & card type" />}
		<div className="card-element-line small low special-field-category">
			<CardElementSpan
				name="language"
				field={!EXPORT_MODE ? `${cardLang}` : "Subdeck"}
			/>
			{"::"}
			<CardElementSpan
				name="card type"
				field={!EXPORT_MODE ? `${cardType}` : "Card"}
			/>
		</div>
	</div>
);

/*generally the English translation of L2 term*/
const TranslationElement = ({field, importance}) => (
	<CardElement
		name="English translation"
		size="regular"
		additionalClass="field-translation"
		importance={!importance ? "low" : importance}
		field={!EXPORT_MODE ? field : "engTrans"}
	/>
);

/*question: should prompt text always inherit color/styling? */
const PromptText = ({text}) => (
	<StaticCardElement
		name="Card prompt"
		size="regular"
		additionalClass="text-prompt"
		importance="low"
		text={text}
	/>
);

/*todo: add className dynamically for styling*/
const AudioOnly = ({name, field, additionalClass}) => (
	<div className="card-element">
		{SHOW_ELEMENT_NAME && <ElementLabel text={name} />}
		<div className={`card-element-line term-audio anki-card-audio ${additionalClass}`}>
			<AudioSpan
				name="L2 term audio"
				field={!EXPORT_MODE ? "▸" : "{{termAudio}}"}
			/>
		</div>
	</div>
);

const CardTermWithAudio = ({name, importance, field}) => (
	<div className="card-element">
		{SHOW_ELEMENT_NAME && <ElementLabel text={name} />}
		<div className="card-element-line">
			<AudioSpan
				name="L2 term audio"
				additionalClass="field-term"
				field={!EXPORT_MODE ? "▸" : "{{termAudio}}"}
			/>
			<CardElementSpan
				name="L2 term"
				size="big"
				additionalClass="field-term"
				importance={!importance ? "high" : importance}
				field={!EXPORT_MODE ? field : "term"}
			/>
		</div>
	</div>
);

const CardTermOnly = ({name, field, size, importance, hintedOut}) => (
	<div className="card-element">
		{SHOW_ELEMENT_NAME && <ElementLabel text={name} />}
		<div className="card-element-line">
			<CardElementSpan
				name="L2 term"
				size={!size ? "big" : size}
				additionalClass="field-term"
				importance={!importance ? "high" : importance}
				hintedOut={hintedOut}
				field={!EXPORT_MODE ? field : "term"}
			/>
		</div>
	</div>
);

/*todo: refactor to handle text first, then iamge as backup*/
const LinjaPona = ({field}) => (
	<Image
		additionalClass="linja-pona"
		name="linja pona"
		resource={field}
	/>
);

const Background = ({name, resource}) => (
	<div className="full-height-bg">
		<img src={`./${resource}`} alt={name} />
	</div>
);

const CardExamples = ({audioField, exampleField, imageField, translationField}) => (
	<div className="field-examples">
		<AudioBlock
			name="Example Audio"
			field={audioField}
		/>
		<CardElement
			name="Example Sentence"
			field={!EXPORT_MODE ? exampleField : "exampleSentence"}
			size="small"
			importance="medium"
		/>
		<ExampleImage
			field={!EXPORT_MODE ? imageField : "exampleImage"}
		/>
		<CardElement
			name="Example Translation"
			field={!EXPORT_MODE ? translationField : "exampleSentenceTrans"}
			size="small"
			importance="low"
			hintedOut={false /*todo: change back to true*/}
		/>
	</div>
);

//todo: implement ideal view AND basic view (ideal view has one sound file per sentence on each line, whereas basic view has sound buttons grouped in a row above or below each example block)
class AnkiCard extends Component {
  render() {
		const card = CARDS.tokiPona[CARD_INDEX];
		const cardLang = this.props.cardLang;
		const cardType = this.props.cardType;
    return (
			<div className="anki-card-entire">
				{/*CARD FRONT*/}
				<Category cardLang={cardLang} cardType={cardType} />
				{
					cardType === "recall" &&
					<TranslationElement field={card.engTrans} />
				}
				{
					cardType === "readLinjaPona" &&
					<span>
						<PromptText text={READ_PROMPT} />
						<LinjaPona field={card.linjaPona} />
					</span>
				}
				{
					cardType === "readTransliteration" &&
					<div>
						<PromptText text={READ_PROMPT2} />
						<CardTermOnly
							name="Term Only"
							size="big"
							importance="high"
							field={card.term}
						/>
					</div>
				}
				{
					cardType === "hear" &&
					<span>
						<PromptText text={HEAR_PROMPT} />
						<AudioOnly
							name="Term Audio"
							field="termAudio"
						/>
					</span>
				}
				{/*CARD DIVIDER*/}
				<hr />
				{/*CARD BACK*/}
				{
					cardType === "recall" &&
					<div>
						<CardTermWithAudio
							name="Term & Audio"
							importance="low"
							field={card.term}
						/>
						<LinjaPona field={card.linjaPona} />
					</div>
				}
				{
					cardType === "readLinjaPona" &&
					<div>
						<CardTermWithAudio
							name="Term & Audio"
							importance="low"
							field={card.term}
						/>
						<TranslationElement field={card.engTrans} />
					</div>
				}
				{
					cardType === "hear" &&
					<div>
						<LinjaPona field={card.linjaPona} />
						<CardTermOnly
							name="Term Only"
							size="regular"
							importance="low"
							field={card.term}
							hintedOut={false /*change this back to true*/}
						/>
						<TranslationElement
							field={card.engTrans}
							importance="low"
							hintedOut={true}
						/>
					</div>
				}
				{
					cardType === "readTransliteration" &&
					<LinjaPona field={card.linjaPona} />
				}
				<CardExamples
					audioField={"exampleSentenceAudio"}
					exampleField={card.exampleSentence}
					imageField={card.exampleImage}
					translationField={card.exampleSentenceTrans}
				/>

				{
					THEME === "blackboard" &&
					<Background
						name="blackboard"
						resource={blackboard1}
					/>
				}

      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
				<AnkiCard
					cardLang="toki pona"
					cardType={CARD_TYPE}
					theme="zen_bw"
				/>
      </div>
    );
  }
}

export default App;
