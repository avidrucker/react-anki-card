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

import PROMPTS from './toki_pona_prompts.json';

import blackboard1 from './black-1072366.jpg';
import blackboard2 from './board-2167844.jpg';

const READ_PROMPT = PROMPTS.tokiPonaPrompts.readLinjaPona.L1;
const READ_PROMPT2 = PROMPTS.tokiPonaPrompts.readTranslit.L1;
const HEAR_PROMPT = PROMPTS.tokiPonaPrompts.hear.L1;
const WRITE_PROMPT = PROMPTS.tokiPonaPrompts.transcribe.L1;
const WRITE_PROMPT2 = PROMPTS.tokiPonaPrompts.write.L1;

//todo: implement ideal view AND basic view (ideal view has one sound file per sentence on each line, whereas basic view has sound buttons grouped in a row above or below each example block)
class AnkiCard extends Component {
  render() {
		{/*todo: destructure/spread props from this.props */}
		const {card, cardLang, cardType, isForExport, labelOn, theme} = this.props;

    return (
			<div className="anki-card-entire">
				{/*CARD FRONT*/}
				<Category
					card={card}
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
					<span>
						<PromptText
							text={READ_PROMPT}
							labelOn={labelOn}
						/>
						<LinjaPona
							field={card.linjaPona}
							labelOn={labelOn}
						/>
					</span>
				}
				{
					cardType === "readTranslit" &&
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
						<PromptText
							text={HEAR_PROMPT}
							labelOn={labelOn}
						/>
						<AudioOnly
							labelName="Term Audio"
							isForExport={isForExport}
							labelOn={labelOn}
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
						<LinjaPona
							field={card.linjaPona}
							labelOn={labelOn}
							isForExport={isForExport}
						/>
						<CardTermOnly
							name="Term Only"
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
					<LinjaPona
						field={card.linjaPona}
						labelOn={labelOn}
					/>
				}
				<CardExamples
					audioField={"exampleSentenceAudio"}
					exampleField={card.exampleSentence}
					imageField={card.exampleImage}
					isForExport={isForExport}
					labelOn={labelOn}
					translationField={card.exampleSentenceTrans}
				/>

				{
					theme === "blackboard" &&
					<Background
						name="blackboard"
						resource={blackboard1}
					/>
				}

      </div>
    );
  }
}

export default AnkiCard;