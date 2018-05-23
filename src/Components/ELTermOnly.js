import React from 'react';

import DivElement from './DivElement';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtDivElement = forExport(withLabel(withTheme(DivElement)));

/*high level block component that correlates directly with term field */
const ELTermOnly = ({colorRank, elClass, field, hintedOut, importance, size}) => (
	<ExtDivElement
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
