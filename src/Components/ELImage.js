import React from 'react';

import BlockImage from './BlockImage';
import {withLabel} from './label-context';
import {forExport} from './export-context';
import {withTheme} from './theme-context';
const ExtendedImage = forExport(withLabel(withTheme(BlockImage)));

/* the English (L1) translation of L2 term*/
const ELImage = ({field, size, importance, hintedOut}) => (
	<ExtendedImage
		additionalClass="field-image"
		field={field}
		fieldName="image"
		labelName="Term Image"
		size={!size ? "regular" : size}
	/>
);

export default ELImage;
