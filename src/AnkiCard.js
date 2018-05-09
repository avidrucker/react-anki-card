import React, { Component, Fragment } from 'react';

import {withLabel} from './Components/label-context';
import {forExport} from './Components/export-context';

import Category from './Components/Category';
import TranslationElement from './Components/TranslationElement';
import CardTermWithAudio from './Components/CardTermWithAudio';
import PromptText from './Components/PromptText';
import LinjaPona from './Components/LinjaPona';
import CardTermOnly from './Components/CardTermOnly';
import CardExamples from './Components/CardExamples';
import Background from './Components/Background';
import AudioOnly from './Components/AudioOnly';
import Image from './Components/Image';
import AccessibleImageGroup from './Components/AccessibleImageGroup';
import TagBlock from './Components/TagBlock';
import MnemonicBlock from './Components/MnemonicBlock';

import PROMPTS from './toki_pona_prompts.json';
import blackboard1 from './black-1072366.jpg';
import blackboard2 from './board-2167844.jpg';

const READ_PROMPT = PROMPTS.tokiPonaPrompts.readLinjaPona.L1;
const READ_PROMPT2 = PROMPTS.tokiPonaPrompts.readTranslit.L1;
const HEAR_PROMPT = PROMPTS.tokiPonaPrompts.hear.L1;
const WRITE_PROMPT = PROMPTS.tokiPonaPrompts.transcribe.L1;
const WRITE_PROMPT2 = PROMPTS.tokiPonaPrompts.write.L1;
const READ_SIGN_PROMPT = PROMPTS.tokiPonaPrompts.readSign.L1;
const MAKE_SIGN_PROMPT = PROMPTS.tokiPonaPrompts.makeSign.L1;
const MNEMONIC_PROMPT = PROMPTS.tokiPonaPrompts.mnemonic.L1;

// const ThemeContext = React.createContext('light');
//
// // This function takes a component...
// export function withTheme(Component) {
//   // ...and returns another component...
//   return function ThemedComponent(props) {
//     // ... and renders the wrapped component with the context theme!
//     // Notice that we pass through any additional props as well
//     return (
//       <ThemeContext.Consumer>
//         {theme => <Component {...props} theme={theme} />}
//       </ThemeContext.Consumer>
//     );
//   };
// }

const ExpLabeledCategory = forExport(withLabel(Category));
const ExpLabeledImage = forExport(withLabel(Image));
const LabeledPromptText = withLabel(PromptText);
const ExpLabeledAudioOnly = forExport(withLabel(AudioOnly));
const ExpLabeledCardTermOnly = forExport(withLabel(CardTermOnly));
const ExpLabeledCardTermWithAudio = forExport(withLabel(CardTermWithAudio));
const ExpLabeledTranslationElement = forExport(withLabel(TranslationElement));
const ExpLabeledAccessibleImageGroup = forExport(withLabel(AccessibleImageGroup));

//todo: implement ideal view AND basic view (ideal view has one sound file per sentence on each line, whereas basic view has sound buttons grouped in a row above or below each example block)
class AnkiCard extends Component {
  render() {
		const {card, cardLang, cardType, theme} = this.props;

    return (
			<div className="anki-card-entire">
				{/*CARD FRONT*/}
				<ExpLabeledCategory
					cardLang={cardLang}
					cardType={cardType}
				/>
				{
					cardType === "look" &&
					<ExpLabeledImage
            additionalClass="card-image"
            labelName="Picture"
						fieldName="image"
						resource={card.image}
					/>
				}
				{
					cardType === "recall" &&
          <ExpLabeledTranslationElement
            field={card.engTrans}
          />
				}
				{
					cardType === "readLinjaPona" &&
					<Fragment>
						<LabeledPromptText
							text={READ_PROMPT}
						/>
						<LinjaPona
							field={card.linjaPona}
						/>
					</Fragment>
				}
				{
					cardType === "readTranslit" &&
					<Fragment>
						<LabeledPromptText
							text={READ_PROMPT2}
						/>
						<ExpLabeledCardTermOnly
							labelName="Term Only"
							field={card.term}
              size="big"
							importance="high"
						/>
					</Fragment>
				}
				{
					cardType === "hear" &&
					<Fragment>
						<LabeledPromptText
							text={HEAR_PROMPT}
						/>
						<ExpLabeledAudioOnly
							labelName="Term Audio"
						/>
					</Fragment>
				}
				{
					cardType === "writeDictation" &&
					<Fragment>
						<LabeledPromptText
							text={WRITE_PROMPT}
						/>
						<ExpLabeledAudioOnly
							labelName="Term Audio"
						/>
					</Fragment>
				}
        {
					cardType === "readSign" &&
					<Fragment>
						<LabeledPromptText
							text={READ_SIGN_PROMPT}
						/>
            <ExpLabeledAccessibleImageGroup
              imageAddClass="sign-language-image"
              imageLabelName="Sign"
              imageFieldName="signImage"
              imageField={card.signImage}
              captionText={card.signDescription}
              textFieldName="signDescription"
            />
					</Fragment>
				}
        {
          cardType === "makeSign" &&
          <Fragment>
            <LabeledPromptText
              text={MAKE_SIGN_PROMPT}
            />
            <LinjaPona
              field={card.linjaPona}
            />
          </Fragment>
        }
				{/*CARD DIVIDER*/}
				<hr />
				{/*CARD BACK*/}
				{
					cardType === "look" &&
					<Fragment>
						<ExpLabeledCardTermWithAudio
							labelName="Term & Audio"
							importance="low"
							field={card.term}
						/>
						<LinjaPona
							field={card.linjaPona}
						/>
						<ExpLabeledTranslationElement
							field={card.engTrans}
						/>
					</Fragment>
				}
				{
					cardType === "recall" &&
					<Fragment>
						<ExpLabeledCardTermWithAudio
							labelName="Term & Audio"
							importance="low"
							field={card.term}
						/>
						<LinjaPona
							field={card.linjaPona}
						/>
						<ExpLabeledImage
              additionalClass="card-image"
              labelName="Picture"
							fieldName="image"
							resource={card.image}
						/>
					</Fragment>
				}
				{
					cardType === "readLinjaPona" &&
					<Fragment>
						<ExpLabeledCardTermWithAudio
							labelName="Term & Audio"
							importance="low"
							field={card.term}
						/>
						<ExpLabeledImage
              additionalClass="card-image"
              labelName="Picture"
							fieldName="image"
							resource={card.image}
						/>
						<ExpLabeledTranslationElement
							field={card.engTrans}
						/>
					</Fragment>
				}
				{
					(cardType === "hear" || cardType === "writeDictation") &&
					<Fragment>
						<LinjaPona
							field={card.linjaPona}
						/>
						<ExpLabeledImage
              additionalClass="card-image"
              labelName="Picture"
							fieldName="image"
							resource={card.image}
						/>
						<ExpLabeledCardTermOnly
							labelName="Term Only"
							size="regular"
							importance="low"
							field={card.term}
							hintedOut={false /*change this back to true*/}
						/>
						<ExpLabeledTranslationElement
							field={card.engTrans}
							importance="low"
							hintedOut={true}
						/>
					</Fragment>
				}
				{
					cardType === "readTranslit" &&
					<Fragment>
						<ExpLabeledAudioOnly
							labelName="Term Audio"
						/>
						<LinjaPona
							field={card.linjaPona}
						/>
						<ExpLabeledImage
              additionalClass="card-image"
              labelName="Picture"
							fieldName="image"
							resource={card.image}
						/>
						<ExpLabeledTranslationElement
							field={card.engTrans}
							importance="low"
							hintedOut={true}
						/>
					</Fragment>
				}
        {
					cardType === "readSign" &&
					<Fragment>
            <ExpLabeledCardTermWithAudio
              labelName="Term & Audio"
              importance="low"
              field={card.term}
            />
						<LinjaPona
							field={card.linjaPona}
						/>
						<ExpLabeledImage
              additionalClass="card-image"
							labelName="Picture"
							fieldName="image"
							resource={card.image}
						/>
						<ExpLabeledTranslationElement
							field={card.engTrans}
							importance="low"
							hintedOut={true}
						/>
					</Fragment>
				}
        {
					cardType === "makeSign" &&
					<Fragment>
            <ExpLabeledAccessibleImageGroup
              imageAddClass="sign-language-image"
              imageLabelName="Sign"
              imageFieldName="signImage"
              imageField={card.signImage}
              captionText={card.signDescription}
              textFieldName="signDescription"
            />
            <ExpLabeledCardTermWithAudio
              labelName="Term & Audio"
              importance="low"
              field={card.term}
            />
						<ExpLabeledImage
              additionalClass="card-image"
              labelName="Picture"
							fieldName="image"
							resource={card.image}
						/>
						<ExpLabeledTranslationElement
							field={card.engTrans}
							importance="low"
              hintedOut={true}
						/>
					</Fragment>
				}
				{/*for all cards, the following will render*/}

        <Fragment>
  				<CardExamples
  					audioField={"exampleSentenceAudio"}
  					exampleField={card.exampleSentence}
  					imageField={card.exampleImage}
  					translationField={card.exampleSentenceTrans}
  				/>
          <MnemonicBlock
            field={card.mnemonic}
          />
          <TagBlock
            field={card.Tags}
          />

        </Fragment>
      </div>
    );
  }
}

export default AnkiCard;
