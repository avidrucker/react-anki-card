import React from 'react';

import Image from './Image';
import {withLabel} from './label-context';
import {forExport} from './export-context';
const ExpLabeledImage = forExport(withLabel(Image));

const ExampleImage = ({field}) => (
	<ExpLabeledImage
		additionalClass="example-image"
		labelName="Example Image"
		resource={field}
		fieldName="exampleImage"
	/>
);

export default ExampleImage;
