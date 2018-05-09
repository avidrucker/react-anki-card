import React from 'react';

import BlockElement from './BlockElement';
import {withLabel} from './label-context';
import {forExport} from './export-context';
const ExpLabeledBlockElement = forExport(withLabel(BlockElement));

//todo: verify the correct text for "fieldName"
/*generally the English translation of L2 term*/
/* todo: add hintedOut option to StaticElementBlock*/
const TranslationElement = ({field, importance}) => (
	<ExpLabeledBlockElement
		labelName="English Translation"
		fieldName="translation"
		size="regular"
		additionalClass="field-translation"
		importance={!importance ? "low" : importance}
		field={field}
	/>
);

export default TranslationElement;
