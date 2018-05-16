import React from 'react';

import BlockElement from './BlockElement';
import {withLabel} from './label-context';
import {forExport} from './export-context';
import {withTheme} from './theme-context';
const ExtendedBlockElement = forExport(withLabel(withTheme(BlockElement)));

/* the English (L1) translation of L2 term*/
const TranslationElement = ({additionalClass, field, size, importance, hintedOut}) => (
	<ExtendedBlockElement
		additionalClass={`field-translation ${additionalClass}`}
		field={field}
		fieldName="translation"
		hintedOut={hintedOut}
		importance={!importance ? "low" : importance}
		labelName="English Translation"
		size={!size ? "regular" : size}
	/>
);

export default TranslationElement;
