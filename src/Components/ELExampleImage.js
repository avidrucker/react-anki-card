import React from 'react';

import BlockImage from './BlockImage';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtendedImage = forExport(withLabel(withTheme(BlockImage)));

const ELExampleImage = ({colorRank, field}) => (
	<ExtendedImage
		imgClass="example-image"
		colorRank={colorRank}
		field={field}
		fieldName="exampleImage"
		labelName="Example Image"
		/*size={!size ? "regular" : size}*/
	/>
);

export default ELExampleImage;
