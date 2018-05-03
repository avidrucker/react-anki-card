import React from 'react';
import Image from './Image';

const ExampleImage = ({field, labelOn}) => (
	<span>
	{
		!!field &&
		<Image
			additionalClass="example-image"
			labelOn={labelOn}
			labelName="Example Image"
			resource={field}
		/>
	}
	{
		!field &&
		<span></span>
	}
	</span>
);

export default ExampleImage;
