import React from 'react';

import AudioBlock from './AudioBlock';
import CardElement from './CardElement';
import ExampleImage from './ExampleImage';
import {withLabel} from './label-context';
import {forExport} from './export-context';
const ExpLabeledAudioBlock = forExport(withLabel(AudioBlock));
const ExpLabeledCardElement = forExport(withLabel(CardElement));

//todo: question: is labelOn needed here?
const CardExamples = ({audioField, exampleField, imageField, isForExport, translationField}) => (
	<div className="field-examples">
		<ExpLabeledAudioBlock
			field={audioField}
			fieldName="exampleSentenceAudio"
			labelName="Example Audio"
		/>
		<ExpLabeledCardElement
			field={exampleField}
			fieldName="exampleSentence"
			importance="medium"
			labelName="Example Sentence"
			size="small"
		/>
		<ExampleImage
			field={imageField}
		/>
		<ExpLabeledCardElement
			fieldName="exampleTranslation"
			field={translationField}
			hintedOut={false /*todo: change back to true*/}
			importance="low"
			labelName="Example Translation"
			size="small"
		/>
	</div>
);

export default CardExamples;
