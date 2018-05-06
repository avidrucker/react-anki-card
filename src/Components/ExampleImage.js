import React from 'react';
import Image from './Image';

//todo: check to see if this need 'isForExport'
const ExampleImage = ({field, labelOn, isForExport}) => (
	<span>
	{
		!!field &&
		<Image
			additionalClass="example-image"
			labelOn={labelOn}
			labelName="Example Image"
			resource={field}
			isForExport={isForExport}
			fieldName="exampleImage"
		/>
	}
	{
		!field &&
		<span></span>
	}
	</span>
);

export default ExampleImage;
