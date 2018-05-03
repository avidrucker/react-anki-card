import React, { Component } from 'react';

import AudioBlock from './AudioBlock';
import CardElement from './CardElement';
import ExampleImage from './ExampleImage';

//todo: question: is labelOn needed here?
const CardExamples = ({audioField, exampleField, imageField, isForExport, labelOn, translationField}) => (
	<div className="field-examples">
		<AudioBlock
			field={audioField}
			fieldName={"ExampleSentenceAudio"}
			isForExport={isForExport}
			labelName="Example Audio"
			labelOn={labelOn}
		/>
		<CardElement
			field={exampleField}
			fieldName="exampleSentence"
			importance="medium"
			isForExport={isForExport}
			labelName="Example Sentence"
			labelOn={labelOn}
			size="small"
		/>
		<ExampleImage
			field={imageField}
			isForExport={isForExport}
			labelOn={labelOn}
		/>
		<CardElement
			fieldName="exampleTranslation"
			field={translationField}
			hintedOut={false /*todo: change back to true*/}
			isForExport={isForExport}
			importance="low"
			labelOn={labelOn}
			labelName="Example Translation"
			size="small"
		/>
	</div>
);

export default CardExamples;