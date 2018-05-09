import React from 'react';

import CardElement from './CardElement';
import {withLabel} from './label-context';
import {forExport} from './export-context';
const ExpLabeledCardElement = forExport(withLabel(CardElement));

/*todo: question: should prompt text always inherit color/styling? */
const AccessibilityText = ({labelName, field, fieldName}) => (
	<ExpLabeledCardElement
		labelName={labelName + " Accessibility Text"}
		size="small"
		additionalClass="text-accessibility"
		importance="low"
		field={field}
    fieldName={fieldName}
	/>
);

export default AccessibilityText;
