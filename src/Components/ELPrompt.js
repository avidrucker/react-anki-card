import React from 'react';

import BlockElement from './BlockElement';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtendedBlockElement = forExport(withLabel(withTheme(BlockElement)));

const ELPrompt = ({colorRank, importance, size, text}) => (
	<ExtendedBlockElement
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
