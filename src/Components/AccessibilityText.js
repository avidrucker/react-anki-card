import React from 'react';

import CardElement from './CardElement';

/*todo: question: should prompt text always inherit color/styling? */
const AccessibilityText = ({labelName, labelOn, field, fieldName, isForExport}) => (
	<CardElement
		labelName={labelName + " Accessibility Text"}
		labelOn={labelOn}
		size="small"
		additionalClass="text-accessibility"
		importance="low"
		field={field}
    fieldName={fieldName}
		isForExport={isForExport}
	/>
);

export default AccessibilityText;
