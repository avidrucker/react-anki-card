import React from 'react';

import DivImage from './DivImage';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtImage = forExport(withLabel(withTheme(DivImage)));

/* the English (L1) translation of L2 term*/
const ELImage = ({field, size, importance, hintedOut}) => (
	<ExtImage
		imgClass="field-image"
		field={field}
		fieldName="image"
		labelName="Term Image"
		size={!size ? "regular" : size}
	/>
);

export default ELImage;
