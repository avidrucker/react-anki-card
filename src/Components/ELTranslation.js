import React from 'react';

import DivElement from './DivElement';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtDivElement = forExport(withLabel(withTheme(DivElement)));

/* the English (L1) translation of L2 term*/
const ELTranslation = ({colorRank, elClass, field, hintedOut, importance, size}) => (
	<ExtDivElement
		colorRank={colorRank}
		elClass="field-translation"
		field={field}
		fieldName="translation"
		hintedOut={hintedOut}
		importance={!importance ? "low" : importance}
		labelName="English Translation"
		size={!size ? "small" : size}
	/>
);

export default ELTranslation;
