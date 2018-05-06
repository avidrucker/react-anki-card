import React, { Component } from 'react';

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
import TagBlock from './Components/TagBlock';

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

//todo: implement ideal view AND basic view (ideal view has one sound file per sentence on each line, whereas basic view has sound buttons grouped in a row above or below each example block)
class AnkiCard extends Component {
  render() {
		{/*todo: destructure/spread props from this.props */}
		const {card, cardLang, cardType, isForExport, labelOn, theme} = this.props;

    return (
			<div className="anki-card-entire">
				{/*CARD FRONT*/}
				<Category
					cardLang={cardLang}
					cardType={cardType}
					isForExport={isForExport}
					labelOn={labelOn}
				/>
				{
					cardType === "look" &&
					<Image
						labelName="Picture"
						fieldName="image"
						resource={card.image}
						isForExport={isForExport}
						labelOn={labelOn}
					/>
				}
				{
					cardType === "recall" &&
					<TranslationElement
						field={card.engTrans}
						isForExport={isForExport}
						labelOn={labelOn}
					/>
				}
				{
					cardType === "readLinjaPona" &&
					<div>
						<PromptText
							text={READ_PROMPT}
							labelOn={labelOn}
						/>
						<LinjaPona
							field={card.linjaPona}
							labelOn={labelOn}
  						isForExport={isForExport}
						/>
					</div>
				}
				{
					cardType === "readTranslit" &&
					<div>
						<PromptText
							text={READ_PROMPT2}
							labelOn={labelOn}
						/>
						<CardTermOnly
							labelName="Term Only"
							size="big"
              labelOn={labelOn}
							importance="high"
              isForExport={isForExport}
							field={card.term}
						/>
					</div>
				}
				{
					cardType === "hear" &&
					<div>
						<PromptText
							text={HEAR_PROMPT}
							labelOn={labelOn}
						/>
						<AudioOnly
							labelName="Term Audio"
							isForExport={isForExport}
							labelOn={labelOn}
						/>
					</div>
				}
				{
					cardType === "writeDictation" &&
					<div>
						<PromptText
							text={WRITE_PROMPT}
							labelOn={labelOn}
						/>
						<AudioOnly
							labelName="Term Audio"
							isForExport={isForExport}
							labelOn={labelOn}
						/>
					</div>
				}
        {
					cardType === "readSign" &&
					<div>
						<PromptText
							text={READ_SIGN_PROMPT}
							labelOn={labelOn}
						/>
            <Image
  						labelName="Sign"
  						fieldName="signImage"
  						resource={card.signImage}
  						isForExport={isForExport}
  						labelOn={labelOn}
  					/>
					</div>
				}
        {
          cardType === "makeSign" &&
          <div>
          <PromptText
            text={MAKE_SIGN_PROMPT}
            labelOn={labelOn}
          />
            <LinjaPona
              field={card.linjaPona}
              labelOn={labelOn}
              isForExport={isForExport}
            />
          </div>
        }
				{/*CARD DIVIDER*/}
				<hr />
				{/*CARD BACK*/}
				{
					cardType === "look" &&
					<div>
						<CardTermWithAudio
							labelName="Term & Audio"
							importance="low"
							field={card.term}
              labelOn={labelOn}
							isForExport={isForExport}
						/>
						<LinjaPona
							field={card.linjaPona}
							labelOn={labelOn}
							isForExport={isForExport}
						/>
						<TranslationElement
							field={card.engTrans}
							isForExport={isForExport}
							labelOn={labelOn}
						/>
					</div>
				}
				{
					cardType === "recall" &&
					<div>
						<CardTermWithAudio
							labelName="Term & Audio"
							importance="low"
							field={card.term}
							labelOn={labelOn}
							isForExport={isForExport}
						/>
						<LinjaPona
							field={card.linjaPona}
							labelOn={labelOn}
							isForExport={isForExport}
						/>
						<Image
							labelName="Picture"
							fieldName="image"
							resource={card.image}
							isForExport={isForExport}
							labelOn={labelOn}
						/>
					</div>
				}
				{
					cardType === "readLinjaPona" &&
					<div>
						<CardTermWithAudio
							labelName="Term & Audio"
							importance="low"
							field={card.term}
							labelOn={labelOn}
  						isForExport={isForExport}
						/>
						<Image
							labelName="Picture"
							fieldName="image"
							resource={card.image}
							isForExport={isForExport}
							labelOn={labelOn}
						/>
						<TranslationElement
							field={card.engTrans}
							isForExport={isForExport}
							labelOn={labelOn}
						/>
					</div>
				}
				{
					(cardType === "hear" || cardType === "writeDictation") &&
					<div>
						<LinjaPona
							field={card.linjaPona}
							labelOn={labelOn}
							isForExport={isForExport}
						/>
						<Image
							labelName="Picture"
							fieldName="image"
							resource={card.image}
							isForExport={isForExport}
							labelOn={labelOn}
						/>
						<CardTermOnly
							labelName="Term Only"
							labelOn={labelOn}
							size="regular"
							importance="low"
							isForExport={isForExport}
							field={card.term}
							hintedOut={false /*change this back to true*/}
						/>
						<TranslationElement
							field={card.engTrans}
							importance="low"
							labelOn={labelOn}
							hintedOut={true}
							isForExport={isForExport}
						/>
					</div>
				}
				{
					cardType === "readTranslit" &&
					<div>
						<AudioOnly
							labelName="Term Audio"
							isForExport={isForExport}
							labelOn={labelOn}
						/>
						<LinjaPona
							field={card.linjaPona}
							labelOn={labelOn}
							isForExport={isForExport}
						/>
						<Image
							labelName="Picture"
							fieldName="image"
							resource={card.image}
							isForExport={isForExport}
							labelOn={labelOn}
						/>
						<TranslationElement
							field={card.engTrans}
							importance="low"
							labelOn={labelOn}
							hintedOut={true}
							isForExport={isForExport}
						/>
					</div>
				}
        {
					cardType === "readSign" &&
					<div>
            <CardTermWithAudio
              labelName="Term & Audio"
              importance="low"
              field={card.term}
              labelOn={labelOn}
              isForExport={isForExport}
            />
						<LinjaPona
							field={card.linjaPona}
							labelOn={labelOn}
							isForExport={isForExport}
						/>
						<Image
							labelName="Picture"
							fieldName="image"
							resource={card.image}
							isForExport={isForExport}
							labelOn={labelOn}
						/>
						<TranslationElement
							field={card.engTrans}
							importance="low"
							labelOn={labelOn}
							hintedOut={true}
							isForExport={isForExport}
						/>
					</div>
				}
        {
					cardType === "makeSign" &&
					<div>
            <CardTermWithAudio
              labelName="Term & Audio"
              importance="low"
              field={card.term}
              labelOn={labelOn}
              isForExport={isForExport}
            />
						<Image
							labelName="Picture"
							fieldName="image"
							resource={card.image}
							isForExport={isForExport}
							labelOn={labelOn}
						/>
						<TranslationElement
							field={card.engTrans}
							importance="low"
							labelOn={labelOn}
							hintedOut={true}
							isForExport={isForExport}
						/>
					</div>
				}
				{/*for all cards, the following will render*/}
				<CardExamples
					audioField={"exampleSentenceAudio"}
					exampleField={card.exampleSentence}
					imageField={card.exampleImage}
					isForExport={isForExport}
					labelOn={labelOn}
					translationField={card.exampleSentenceTrans}
				/>
        <TagBlock
          labelOn={labelOn}
          field={card.Tags}
          isForExport={isForExport}
        />
				{
					theme === "black_board" &&
					<Background
						name={theme}
						resource={blackboard1}
					/>
				}

      </div>
    );
  }
}

export default AnkiCard;
