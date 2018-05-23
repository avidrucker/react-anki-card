import React from 'react';

import DivImage from './DivImage';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtImage = forExport(withLabel(withTheme(DivImage)));

const ELEgImage = ({colorRank, field}) => (
	<ExtImage
		imgClass="example-image"
		colorRank={colorRank}
		field={field}
		fieldName="exampleImage"
		labelName="Example Image"
		/*size={!size ? "regular" : size}*/
	/>
);

export default ELEgImage;
