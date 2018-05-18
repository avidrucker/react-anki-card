import React from 'react';

import BlockElement from './BlockElement';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtendedBlockElement = forExport(withLabel(withTheme(BlockElement)));

/*high level block component that correlates directly with term field */
const ELTermOnly = ({colorRank, elClass, field, hintedOut, importance, size}) => (
	<ExtendedBlockElement
		colorRank={colorRank}
		elClass={`card-term-only`}
		field={field}
		fieldName="L2 term"
		hintedOut={hintedOut}
		importance={!importance ? "low" : importance}
		labelName="Carm Term Only"
		size={!size ? "regular" : size}
	/>
);

export default ELTermOnly;
