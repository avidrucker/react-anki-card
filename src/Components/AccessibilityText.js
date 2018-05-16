import React from 'react';

import BlockElement from './BlockElement';
import {withLabel} from './label-context';
import {forExport} from './export-context';
import {withTheme} from './theme-context';
const ExtendedBlockElement = forExport(withLabel(withTheme(BlockElement)));

/*todo: question: should prompt text always inherit color/styling? */
const AccessibilityText = ({labelName, field, fieldName}) => (
	<ExtendedBlockElement
		labelName={labelName + " Accessibility Text"}
		size="small"
		additionalClass="text-accessibility"
		importance="low"
		field={field}
    fieldName={fieldName}
	/>
);

export default AccessibilityText;
