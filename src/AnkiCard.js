import React, { Component, Fragment } from 'react';

import {withLabel} from './Components/label-context';
import {forExport} from './Components/export-context';

import BlockCategory from './Components/BlockCategory';
import TranslationElement from './Components/TranslationElement';
import CardTermWithAudio from './Components/CardTermWithAudio';
import PromptText from './Components/PromptText';
import LinjaPona from './Components/LinjaPona';
import CardTermOnly from './Components/CardTermOnly';
import BlockExamplesGroup from './Components/BlockExamplesGroup';
import Background from './Components/Background';
import TermAudioOnly from './Components/TermAudioOnly';
import Image from './Components/Image';
import AccessibleImageGroup from './Components/AccessibleImageGroup';
import BlockTag from './Components/BlockTag';
import BlockMnemonic from './Components/BlockMnemonic';

import PROMPTS from './toki_pona_prompts.json';
import blackboard1 from './board1.jpg';
import blackboard2 from './board2.jpg';

const READ_PROMPT = PROMPTS.tokiPonaPrompts.readLinjaPona.L1;
const READ_PROMPT2 = PROMPTS.tokiPonaPrompts.readTranslit.L1;
const HEAR_PROMPT = PROMPTS.tokiPonaPrompts.hear.L1;
const WRITE_PROMPT = PROMPTS.tokiPonaPrompts.transcribe.L1;
const WRITE_PROMPT2 = PROMPTS.tokiPonaPrompts.write.L1;
const READ_SIGN_PROMPT = PROMPTS.tokiPonaPrompts.readSign.L1;
const MAKE_SIGN_PROMPT = PROMPTS.tokiPonaPrompts.makeSign.L1;
const MNEMONIC_PROMPT = PROMPTS.tokiPonaPrompts.mnemonic.L1;

const ExpLabeledCategory = forExport(withLabel(BlockCategory));
const ExpLabeledImage = forExport(withLabel(Image));
const LabeledPromptText = withLabel(PromptText);
const ExpLabeledTermAudioOnly = forExport(withLabel(TermAudioOnly));
const ExpLabeledCardTermOnly = forExport(withLabel(CardTermOnly));
const ExpLabeledCardTermWithAudio = forExport(withLabel(CardTermWithAudio));
const ExpLabeledTranslationElement = forExport(withLabel(TranslationElement));
const ExpLabeledAccessibleImageGroup = forExport(withLabel(AccessibleImageGroup));

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
						<ExpLabeledTermAudioOnly
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
						<ExpLabeledTermAudioOnly labelName="Term Audio" />
					</Fragment>
				}
        {
					cardType === "readSign" &&
					<Fragment>
						<LabeledPromptText text={READ_SIGN_PROMPT} />
            <ExpLabeledAccessibleImageGroup
              imageAddClass="sign-language-image"
              imageLabelName="Sign"
              imageFieldName="signImage"
              imageField={card.signImage}
              captionText={card.signDescription}
              textFieldName="signDescription"
              /*todo: make this text hintable! */
            />
					</Fragment>
				}
        {
          cardType === "makeSign" &&
          <Fragment>
            <LabeledPromptText text={MAKE_SIGN_PROMPT} />
            <LinjaPona field={card.linjaPona} />
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
						<LinjaPona field={card.linjaPona} />
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
						<LinjaPona field={card.linjaPona} />
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
						<LinjaPona field={card.linjaPona} />
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
						<ExpLabeledTermAudioOnly
							labelName="Term Audio"
						/>
						<LinjaPona field={card.linjaPona} />
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
						<LinjaPona field={card.linjaPona} />
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
  				<BlockExamplesGroup
  					audioField={"exampleSentenceAudio"}
  					exampleField={card.exampleSentence}
  					imageField={card.exampleImage}
  					translationField={card.exampleSentenceTrans}
  				/>
          <BlockMnemonic field={card.mnemonic} />
          <BlockTag field={card.Tags} />
          {/*<Background theme={theme} />*/}
        </Fragment>
      </div>
    );
  }
}

export default AnkiCard;
