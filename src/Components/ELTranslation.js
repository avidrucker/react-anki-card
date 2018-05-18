import React from 'react';

import BlockElement from './BlockElement';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtendedBlockElement = forExport(withLabel(withTheme(BlockElement)));

/* the English (L1) translation of L2 term*/
const ELTranslation = ({colorRank, elClass, field, hintedOut, importance, size}) => (
	<ExtendedBlockElement
		colorRank={colorRank}
		elClass="field-translation"
		field={field}
		fieldName="translation"
		hintedOut={hintedOut}
		importance={!importance ? "low" : importance}
		labelName="English Translation"
		size={!size ? "regular" : size}
	/>
);

export default ELTranslation;
