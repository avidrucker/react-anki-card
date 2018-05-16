import React from 'react';

import BlockElement from './BlockElement';
import {withLabel} from './label-context';
import {forExport} from './export-context';
import {withTheme} from './theme-context';
const ExtendedBlockElement = forExport(withLabel(withTheme(BlockElement)));

const ELPrompt = ({additionalClass, importance, size, text}) => (
	<ExtendedBlockElement
		additionalClass={`text-prompt ${additionalClass}`}
		labelName="Card Prompt"
		size={!size ? "small" : size}
		fieldName="text-prompt"
		importance={!importance ? "low" : importance}
		field={text}
	/>
);

export default ELPrompt;
