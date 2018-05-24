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
import GroupEgs from './Components/GroupEgs';
import Background from './Components/Background';
import ELTermAudioOnly from './Components/ELTermAudioOnly';
import GroupA11yImage from './Components/GroupA11yImage';
import ELTags from './Components/ELTags';
import ELMnemonic from './Components/ELMnemonic';

import PROMPTS from './toki_pona_prompts.json';
import blackboard1 from './Backgrounds/board1.jpg';

const READ_PROMPT = PROMPTS.tokiPonaPrompts.readLP.L1;
const READ_PROMPT2 = PROMPTS.tokiPonaPrompts.readTranslit.L1;
const HEAR_PROMPT = PROMPTS.tokiPonaPrompts.hear.L1;
const WRITE_PROMPT = PROMPTS.tokiPonaPrompts.transcribe.L1;
const WRITE_PROMPT2 = PROMPTS.tokiPonaPrompts.write.L1;
const READ_SIGN_PROMPT = PROMPTS.tokiPonaPrompts.readSign.L1;
const MAKE_SIGN_PROMPT = PROMPTS.tokiPonaPrompts.makeSign.L1;
const MNEMONIC_PROMPT = PROMPTS.tokiPonaPrompts.mnemonic.L1;

const ExtCategory = forExport(withLabel(withTheme(ELCategory)));
const ExtTermAudio = forExport(withLabel(withTheme(ELTermAudioOnly)));
const ExtTermWithAudio = forExport(withLabel(withTheme(ELTermWithAudio)));
const ThemedGroupEgs = withTheme(GroupEgs);
const ThemedBackground = withTheme(Background);

class AnkiCard extends Component {
  render() {
		const {card, cardLang, cardType, theme} = this.props;
    const themeStyle = (theme === "black-board") ? "chalk-text" :
      (theme === "zenburn" ? "zenburn-bg zenburn-text" :
        (theme === "zen-light" ? "" : ""));
    //const themeStyle = (theme === "black-board") ? "blackboard-bg zenburn-text" : (theme === "zenburn" ? "zenburn-bg zenburn-text" : "");
    const TPlightDark = (theme === "black-board" || theme === "zenburn") ? card.TPlinjaPonaDark : card.TPlinjaPonaLight ;
    const TPlightDarkfield = (theme === "black-board" || theme === "zenburn") ? "linjaPonaDark" : "linjaPonaLight" ;

    return (
			<div className={`anki-card-entire ${themeStyle} default-text`}>
				{/*CARD FRONT*/}
				<ExtCategory
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
          <ELTranslation
            colorRank="secondary-color"
            field={card.engTrans}
            size="regular"
          />
				}
				{
					cardType === "TPreadLP" &&
					<Fragment>
						<ELPrompt
              colorRank="secondary-color"
              text={READ_PROMPT}
            />
						<ELLinjaPona
              field={TPlightDark}
              fieldName={TPlightDarkfield}
            />
					</Fragment>
				}
				{
					cardType === "TPreadTranslit" &&
					<Fragment>
						<ELPrompt
              colorRank="secondary-color"
              text={READ_PROMPT2}
            />
						<ELTermOnly
							field={card.term}
							importance="high"
              size="big"
						/>
					</Fragment>
				}
				{
					cardType === "hear" &&
					<Fragment>
						<ELPrompt
              colorRank="secondary-color"
              text={HEAR_PROMPT}
            />
						<ExtTermAudio colorRank="primary-color" />
					</Fragment>
				}
				{
					cardType === "TPwriteDictation" &&
					<Fragment>
						<ELPrompt
              colorRank="secondary-color"
              text={WRITE_PROMPT}
            />
						<ExtTermAudio colorRank="primary-color" />
					</Fragment>
				}
        {
					cardType === "readSign" &&
					<Fragment>
						<ELPrompt
              colorRank="secondary-color"
              text={READ_SIGN_PROMPT}
            />
            <GroupA11yImage
              imgClass="sign-language-image"
              imageLabelName="Sign"
              imageFieldName="TPsignImage"
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
            <ELPrompt
              text={MAKE_SIGN_PROMPT}
              colorRank="secondary-color"
            />
            <ELLinjaPona
              field={TPlightDark}
              fieldName={TPlightDarkfield}
            />
          </Fragment>
        }
				{/*CARD DIVIDER*/}
				<hr />
				{/*CARD BACK*/}
				{
					cardType === "look" &&
					<Fragment>
						<ExtTermWithAudio
              colorRank="primary-color"
              field={card.term}
            />
						<ELLinjaPona
              field={TPlightDark}
              fieldName={TPlightDarkfield}
            />
						<ELTranslation
              colorRank="secondary-color"
              field={card.engTrans}
            />
					</Fragment>
				}
				{
					cardType === "recall" &&
					<Fragment>
						<ExtTermWithAudio
              colorRank="primary-color"
              field={card.term}
            />
						<ELLinjaPona
              field={TPlightDark}
              fieldName={TPlightDarkfield}
            />
            <ELImage field={card.image} />
					</Fragment>
				}
				{
					cardType === "TPreadLP" &&
					<Fragment>
						<ExtTermWithAudio
              colorRank="secondary-color"
              field={card.term}
            />
						<ELImage field={card.image} />
						<ELTranslation
              colorRank="tertiary-color"
              field={card.engTrans}
            />
					</Fragment>
				}
				{
					(cardType === "hear" || cardType === "TPwriteDictation") &&
					<Fragment>
						<ELLinjaPona
              field={TPlightDark}
              fieldName={TPlightDarkfield}
            />
						<ELImage field={card.image} />
						<ELTermOnly
              colorRank="tertiary-color"
							field={card.term}
						/>
						<ELTranslation
              colorRank="secondary-color"
							field={card.engTrans}
						/>
					</Fragment>
				}
				{
					cardType === "TPreadTranslit" &&
					<Fragment>
						<ExtTermAudio colorRank="primary-color" />
						<ELLinjaPona
              field={TPlightDark}
              fieldName={TPlightDarkfield}
            />
						<ELImage field={card.image} />
						<ELTranslation
              colorRank="secondary-color"
							field={card.engTrans}
						/>
					</Fragment>
				}
        {
					cardType === "readSign" &&
					<Fragment>
            <ExtTermWithAudio
              colorRank="secondary-color"
              field={card.term}
            />
						<ELLinjaPona
              field={TPlightDark}
              fieldName={TPlightDarkfield}
            />
						<ELImage field={card.image} />
						<ELTranslation
							field={card.engTrans}
              colorRank="quaternary-color"
						/>
					</Fragment>
				}
        {
					cardType === "makeSign" &&
					<Fragment>
            <GroupA11yImage
              imgClass="sign-language-image"
              imageLabelName="Sign"
              imageFieldName="TPsignImage"
              imageField={card.TPsignImage}
              captionText={card.TPsignDescription}
              textFieldName="signDescription"
            />
            <ExtTermWithAudio
              colorRank="primary-color"
              field={card.term}
            />
						<ELImage field={card.image} />
						<ELTranslation
              colorRank="secondary-color"
							field={card.engTrans}
						/>
					</Fragment>
				}
				{/*for all cards, the following will render*/}
        <Fragment>
  				<ThemedGroupEgs
  					audioField={card.exampleSentenceAudio}
  					exampleField={card.exampleSentence}
  					imageField={card.exampleImage}
  					translationField={card.exampleSentenceTrans}
  				/>
          <ELMnemonic
            field={card.mnemonic}
            colorRank="secondary-color"
          />
          <ELTags
            field={card.Tags}
            colorRank="tertiary-color"
          />
          {
            theme === "black-board" &&
            <ThemedBackground
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

/*



*/
