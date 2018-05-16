import React from 'react';

import BlockImage from './BlockImage';
import {withLabel} from './label-context';
import {forExport} from './export-context';
const ExtendedImage = forExport(withLabel(BlockImage));

const ELExampleImage = ({field}) => (
	<ExtendedImage
		additionalClass="example-image"
		field={field}
		fieldName="exampleImage"
		labelName="Example Image"
		/*size={!size ? "regular" : size}*/
	/>
);

export default ELExampleImage;
