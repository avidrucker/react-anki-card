import React from 'react';

import CardElement from './CardElement';
import { withLabel } from './label-context';
import { forExport } from './export-context';
const ExpLabeledCardElement = forExport(withLabel(CardElement));

//todo: verify the correct text for "fieldName"
/*generally the English translation of L2 term*/
/* todo: add hintedOut option to StaticCardElement*/
const TranslationElement = ({field, importance}) => (
	<ExpLabeledCardElement
		labelName="English Translation"
		fieldName="translation"
		size="regular"
		additionalClass="field-translation"
		importance={!importance ? "low" : importance}
		field={field}
	/>
);

export default TranslationElement;
