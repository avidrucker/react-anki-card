import React from 'react';

import BlockAudio from './BlockAudio';
import BlockElement from './BlockElement';
import ELExampleImage from './ELExampleImage';
import {withLabel} from './label-context';
import {forExport} from './export-context';
const ExpLabeledBlockAudio = forExport(withLabel(BlockAudio));
const ExpLabeledBlockElement = forExport(withLabel(BlockElement));

//todo: question: is labelOn needed here?
const GroupExamples = ({audioField, exampleField, imageField, isForExport, translationField}) => (
	<div className="field-examples">
		<ExpLabeledBlockAudio
			field={audioField}
			fieldName="exampleSentenceAudio"
			labelName="Example Audio"
		/>
		<ExpLabeledBlockElement
			field={exampleField}
			fieldName="exampleSentence"
			importance="medium"
			labelName="Example Sentence"
			size="small"
		/>
		<ELExampleImage
			field={imageField}
		/>
		<ExpLabeledBlockElement
			fieldName="exampleTranslation"
			field={translationField}
			hintedOut={false /*todo: change back to true*/}
			importance="low"
			labelName="Example Translation"
			size="small"
		/>
	</div>
);

export default GroupExamples;
