import React from 'react';

import BlockAudio from './BlockAudio';
import BlockElement from './BlockElement';
import ELExampleImage from './ELExampleImage';
import ELExampleTranslation from './ELExampleTranslation';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtendedBlockAudio = forExport(withLabel(withTheme(BlockAudio)));
const ExtendedBlockElement = forExport(withLabel(withTheme(BlockElement)));

//todo: question: is labelOn needed here?
const GroupExamples = ({audioField, exampleField, imageField,
		isForExport, translationField}) => (
	<div className="field-examples">
		<ExtendedBlockAudio
			colorRank="primary-color"
			field={audioField}
			fieldName="exampleSentenceAudio"
			labelName="Example Audio"
		/>
		<ExtendedBlockElement
			colorRank="secondary-color"
			field={exampleField}
			fieldName="exampleSentence"
			importance="medium"
			labelName="Example Sentence"
			size="small"
		/>
		<ELExampleImage
			field={imageField}
		/>
		<ELExampleTranslation
			field={translationField}
			colorRank="quaternary-color"
		/>
	</div>
);

export default GroupExamples;
