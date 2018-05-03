import React, { Component } from 'react';
import Image from './Image';

/*todo: refactor to handle text first, then iamge as backup*/
const LinjaPona = ({field, isForExport, labelOn}) => (
	<Image
		additionalClass="linja-pona"
		isForExport={isForExport}
		labelOn={labelOn}
		labelName="linja pona"
		fieldName="linjaPona"
		resource={field}
	/>
);

export default LinjaPona;