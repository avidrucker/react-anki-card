import React from 'react';

import BlockElement from './BlockElement';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtendedBlockElement = forExport(withLabel(withTheme(BlockElement)));

/* the English (L1) translation of L2 term*/
const ELTranslation = ({colorRank, field, hintedOut, importance, size}) => (
	<ExtendedBlockElement
		elClass="field-translation"
		field={field}
		fieldName="translation"
		hintedOut={hintedOut}
		importance={!importance ? "low" : importance}
		labelName="English Translation"
		colorRank={colorRank}
		size={!size ? "regular" : size}
	/>
);

export default ELTranslation;
