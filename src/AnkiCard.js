import React, { Component, Fragment } from 'react';

import {withLabel} from './Contexts/label-context';
import {forExport} from './Contexts/export-context';
import {withTheme} from './Contexts/theme-context';

import ELCategory from './Components/ELCategory';
import ELTranslation from './Components/ELTranslation';
import ELTermWithAudio from './Components/ELTermWithAudio';
import ELPrompt from './Components/ELPrompt';
import ELLinjaPona from './Components/ELLinjaPona';
import ELImage from './Components/ELImage';
import ELTermOnly from './Components/ELTermOnly';
import GroupExamples from './Components/GroupExamples';
import Background from './Components/Background';
import ELTermAudioOnly from './Components/ELTermAudioOnly';
import GroupA11yImage from './Components/GroupA11yImage';
import ELTags from './Components/ELTags';
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

const ExtendedCategory = forExport(withLabel(withTheme(ELCategory)));
const ExtendedELTermAudioOnly = forExport(withLabel(ELTermAudioOnly)); //todo: componentize this
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
          colorRank="quaternary-color"
				/>
				{
					cardType === "look" &&
					<ELImage field={card.image} />
				}
				{
					cardType === "recall" &&
          <ELTranslation field={card.engTrans} />
				}
				{
					cardType === "readELLinjaPona" &&
					<Fragment>
						<ELPrompt
              text={READ_PROMPT}
              colorRank="tertiary-color"
            />
						<ELLinjaPona
              field={TPlightDark}
              fieldName={TPlightDarkfield}
            />
					</Fragment>
				}
				{
					cardType === "readTranslit" &&
					<Fragment>
						<ELPrompt
              text={READ_PROMPT2}
              colorRank="tertiary-color"
            />
						<ELTermOnly
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
              colorRank="tertiary-color"
            />
						<ExtendedELTermAudioOnly
              colorRank="primary-color"
            />
					</Fragment>
				}
				{
					cardType === "writeDictation" &&
					<Fragment>
						<ELPrompt text={WRITE_PROMPT} />
						<ExtendedELTermAudioOnly colorRank="primary-color" />
					</Fragment>
				}
        {
					cardType === "readSign" &&
					<Fragment>
						<ELPrompt text={READ_SIGN_PROMPT} />
            <GroupA11yImage
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
						<ELTermWithAudio field={card.term} />
						<ELLinjaPona field={TPlightDark} fieldName={TPlightDarkfield} />
						<ELTranslation field={card.engTrans}	/>
					</Fragment>
				}
				{
					cardType === "recall" &&
					<Fragment>
						<ELTermWithAudio field={card.term} />
						<ELLinjaPona field={TPlightDark} fieldName={TPlightDarkfield} />
            <ELImage field={card.image} />
					</Fragment>
				}
				{
					cardType === "readELLinjaPona" &&
					<Fragment>
						<ELTermWithAudio field={card.term} />
						<ELImage field={card.image} />
						<ELTranslation field={card.engTrans}	/>
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
						<ELTermOnly
              colorRank="tertiary-color"
							field={card.term}
							hintedOut={false /*change this back to true*/}
						/>
						<ELTranslation
							field={card.engTrans}
							hintedOut={false}
              colorRank="secondary-color"
						/>
					</Fragment>
				}
				{
					cardType === "readTranslit" &&
					<Fragment>
						<ExtendedELTermAudioOnly />
						<ELLinjaPona
              field={TPlightDark}
              fieldName={TPlightDarkfield}
            />
						<ELImage field={card.image} />
						<ELTranslation
							field={card.engTrans}
							hintedOut={true}
						/>
					</Fragment>
				}
        {
					cardType === "readSign" &&
					<Fragment>
            <ELTermWithAudio field={card.term} />
						<ELLinjaPona
              field={TPlightDark}
              fieldName={TPlightDarkfield}
            />
						<ELImage field={card.image} />
						<ELTranslation
							field={card.engTrans}
							hintedOut={true}
						/>
					</Fragment>
				}
        {
					cardType === "makeSign" &&
					<Fragment>
            <GroupA11yImage
              imageAddClass="sign-language-image"
              imageLabelName="Sign"
              imageFieldName="signImage"
              imageField={card.TPsignImage}
              captionText={card.TPsignDescription}
              textFieldName="signDescription"
            />
            <ELTermWithAudio field={card.term} />
						<ELImage field={card.image} />
						<ELTranslation
							field={card.engTrans}
              hintedOut={true}
						/>
					</Fragment>
				}
				{/*for all cards, the following will render*/}
        <Fragment>
  				<GroupExamples
  					audioField={card.exampleSentenceAudio}
  					exampleField={card.exampleSentence}
  					imageField={card.exampleImage}
  					translationField={card.exampleSentenceTrans}
  				/>
          <ELMnemonic field={card.mnemonic} />
          <ELTags field={card.Tags} />
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
