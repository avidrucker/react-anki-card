import React from 'react';

import DivElement from './DivElement';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtDivElement = forExport(withLabel(withTheme(DivElement)));

const ELPrompt = ({colorRank, importance, size, text}) => (
	<ExtDivElement
		elClass={`el-front-prompt`}
		colorRank={colorRank}
		labelName="Card Prompt"
		size={!size ? "small" : size}
		fieldName="text-prompt"
		importance={!importance ? "low" : importance}
		field={text}
	/>
);

export default ELPrompt;
