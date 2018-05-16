import React, { Fragment } from 'react';

import BlockElement from './BlockElement';
import {withLabel} from './label-context';
import {forExport} from './export-context';
import {withTheme} from './theme-context';
const ExtendedBlockElement = forExport(withLabel(withTheme(BlockElement)));

/*high level block component that correlates directly with term field */
const CardTermOnly = ({additionalClass, field, size, importance, hintedOut}) => (
	<ExtendedBlockElement
		additionalClass={additionalClass}
		field={field}
		fieldName="L2 term"
		hintedOut={hintedOut}
		importance={!importance ? "low" : importance}
		labelName="Carm Term Only"
		size={!size ? "regular" : size}
	/>
);

export default CardTermOnly;
