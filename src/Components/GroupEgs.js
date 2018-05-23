import React from 'react';

import DivAudio from './DivAudio';
import DivElement from './DivElement';
import ELEgImage from './ELEgImage';
import ELEgTranslation from './ELEgTranslation';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtDivAudio = forExport(withLabel(withTheme(DivAudio)));
const ExtDivElement = forExport(withLabel(withTheme(DivElement)));

//todo: question: is labelOn needed here?
const GroupEgs = ({audioField, exampleField, imageField,
		isForExport, theme, translationField}) => {
		const elStyle = (theme === "black-board") ? "chalk-text" :
			(theme === "zenburn" ? "zenburn-text" :
				(theme === "zen-light" ? "zen-light-text" : ""));
	return (
		<div className={`group-examples outline ${elStyle}`}>
			<ExtDivAudio
				colorRank="primary-color"
				field={audioField}
				fieldName="exampleSentenceAudio"
				labelName="Example Audio"
			/>
			<ExtDivElement
				/*colorRank="secondary-color"*/
				field={exampleField}
				fieldName="exampleSentence"
				importance="medium"
				labelName="Example Sentence"
				size="small"
			/>
			<ELEgImage
				field={imageField}
			/>
			<ELEgTranslation
				field={translationField}
				colorRank="quaternary-color"
			/>
		</div>
	);
}

export default GroupEgs;
