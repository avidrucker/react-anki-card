import React, { Component, Fragment } from 'react';

import {withLabel} from './Components/label-context';
import {forExport} from './Components/export-context';
import {withTheme} from './Components/theme-context';

import ELCategory from './Components/ELCategory';
import TranslationElement from './Components/TranslationElement';
import CardTermWithAudio from './Components/CardTermWithAudio';
import ELPrompt from './Components/ELPrompt';
import ELLinjaPona from './Components/ELLinjaPona';
import ELImage from './Components/ELImage';
import CardTermOnly from './Components/CardTermOnly';
import GroupExamples from './Components/GroupExamples';
import Background from './Components/Background';
import BlockTermAudio from './Components/BlockTermAudio';
import A11yImageGroup from './Components/A11yImageGroup';
import BlockTag from './Components/BlockTag';
import ELMnemonic from './Components/ELMnemonic';

import PROMPTS from './toki_pona_prompts.json';
import blackboard1 from './board1.jpg';
import blackboard2 from './board2.jpg';

const READ_PROMPT = PROMPTS.tokiPonaPrompts.readELLinjaPona.L1;
const READ_PROMPT2 = PROMPTS.tokiPonaPrompts.readTranslit.L1;
const HEAR_PROMPT = PROMPTS.tokiPonaPrompts.hear.L1;
const WRITE_PROMPT = PROMPTS.tokiPonaPrompts.transcribe.L1;
const WRITE_PROMPT2 = PROMPTS.tokiPonaPrompts.write.L1;
const READ_SIGN_PROMPT = PROMPTS.tokiPonaPrompts.readSign.L1;
const MAKE_SIGN_PROMPT = PROMPTS.tokiPonaPrompts.makeSign.L1;
const MNEMONIC_PROMPT = PROMPTS.tokiPonaPrompts.mnemonic.L1;

const ExpLabeledCardTermWithAudio = forExport(withLabel(CardTermWithAudio));
const ExtendedCategory = forExport(withLabel(withTheme(ELCategory)));
const ExtendedTermAudio = forExport(withLabel(withTheme(BlockTermAudio)));
const ExtendedA11yImageGroup = forExport(withLabel(A11yImageGroup));
const ThemedBackground = withTheme(Background);

class AnkiCard extends Component {
  render() {
		const {card, cardLang, cardType, theme} = this.props;

    const TPlightDark = (theme === "black-board") ? card.TPlinjaPonaDark : card.TPlinjaPonaLight ;
    const TPlightDarkfield = (theme === "black-board") ? "linjaPonaDark" : "linjaPonaLight" ;

    return (
			<div className="anki-card-entire">
				{/*CARD FRONT*/}
				<ExtendedCategory
					cardLang={cardLang}
					cardType={cardType}
				/>
				{
					cardType === "look" &&
					<ELImage field={card.image} />
				}
				{
					cardType === "recall" &&
          <TranslationElement field={card.engTrans} />
				}
				{
					cardType === "readELLinjaPona" &&
					<Fragment>
						<ELPrompt text={READ_PROMPT} />
						<ELLinjaPona field={TPlightDark} fieldName={TPlightDarkfield} />
					</Fragment>
				}
				{
					cardType === "readTranslit" &&
					<Fragment>
						<ELPrompt text={READ_PROMPT2} />
						<CardTermOnly
							field={card.term}
              size="big"
							importance="high"
						/>
					</Fragment>
				}
				{
					cardType === "hear" &&
					<Fragment>
						<ELPrompt
              text={HEAR_PROMPT}
              additionalClass="quaternary-color"
            />
						<ExtendedTermAudio additionalClass="primary-color" />
					</Fragment>
				}
				{
					cardType === "writeDictation" &&
					<Fragment>
						<ELPrompt text={WRITE_PROMPT} />
						<ExtendedTermAudio additionalClass="primary-color" />
					</Fragment>
				}
        {
					cardType === "readSign" &&
					<Fragment>
						<ELPrompt text={READ_SIGN_PROMPT} />
            <ExtendedA11yImageGroup
              imageAddClass="sign-language-image"
              imageLabelName="Sign"
              imageFieldName="signImage"
              imageField={card.TPsignImage}
              captionText={card.TPsignDescription}
              textFieldName="signDescription"
              /*todo: make this text hintable! */
            />
					</Fragment>
				}
        {
          cardType === "makeSign" &&
          <Fragment>
            <ELPrompt text={MAKE_SIGN_PROMPT} />
            <ELLinjaPona field={TPlightDark} fieldName={TPlightDarkfield} />
          </Fragment>
        }
				{/*CARD DIVIDER*/}
				<hr />
				{/*CARD BACK*/}
				{
					cardType === "look" &&
					<Fragment>
						<ExpLabeledCardTermWithAudio field={card.term} />
						<ELLinjaPona field={TPlightDark} fieldName={TPlightDarkfield} />
						<TranslationElement	field={card.engTrans}	/>
					</Fragment>
				}
				{
					cardType === "recall" &&
					<Fragment>
						<ExpLabeledCardTermWithAudio field={card.term} />
						<ELLinjaPona field={TPlightDark} fieldName={TPlightDarkfield} />
            <ELImage field={card.image} />
					</Fragment>
				}
				{
					cardType === "readELLinjaPona" &&
					<Fragment>
						<ExpLabeledCardTermWithAudio field={card.term} />
						<ELImage field={card.image} />
						<TranslationElement field={card.engTrans}	/>
					</Fragment>
				}
				{
					(cardType === "hear" || cardType === "writeDictation") &&
					<Fragment>
						<ELLinjaPona
              field={TPlightDark}
              fieldName={TPlightDarkfield}
            />
						<ELImage field={card.image} />
						<CardTermOnly
              additionalClass="tertiary-color"
							field={card.term}
							hintedOut={false /*change this back to true*/}
						/>
						<TranslationElement
							field={card.engTrans}
							hintedOut={true}
              additionalClass="secondary-color"
						/>
					</Fragment>
				}
				{
					cardType === "readTranslit" &&
					<Fragment>
						<ExtendedTermAudio />
						<ELLinjaPona field={TPlightDark} fieldName={TPlightDarkfield} />
						<ELImage field={card.image} />
						<TranslationElement
							field={card.engTrans}
							hintedOut={true}
						/>
					</Fragment>
				}
        {
					cardType === "readSign" &&
					<Fragment>
            <ExpLabeledCardTermWithAudio field={card.term} />
						<ELLinjaPona field={TPlightDark} fieldName={TPlightDarkfield} />
						<ELImage field={card.image} />
						<TranslationElement
							field={card.engTrans}
							hintedOut={true}
						/>
					</Fragment>
				}
        {
					cardType === "makeSign" &&
					<Fragment>
            <ExtendedA11yImageGroup
              imageAddClass="sign-language-image"
              imageLabelName="Sign"
              imageFieldName="signImage"
              imageField={card.TPsignImage}
              captionText={card.TPsignDescription}
              textFieldName="signDescription"
            />
            <ExpLabeledCardTermWithAudio field={card.term} />
						<ELImage field={card.image} />
						<TranslationElement
							field={card.engTrans}
              hintedOut={true}
						/>
					</Fragment>
				}
				{/*for all cards, the following will render*/}
        <Fragment>
  				<GroupExamples
  					audioField={"exampleSentenceAudio"}
  					exampleField={card.exampleSentence}
  					imageField={card.exampleImage}
  					translationField={card.exampleSentenceTrans}
  				/>
          <ELMnemonic field={card.mnemonic} />
          <BlockTag field={card.Tags} />
          {
            theme === "black-board" &&
            <ThemedBackground
              additionalClass="blackboard-bg-fallback"
              imgAlt="blackboard image"
              resourceImg={blackboard1}
              theme={theme}
            />
          }
        </Fragment>
      </div>
    );
  }
}

export default AnkiCard;
