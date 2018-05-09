import React, {Fragment} from 'react';

import Image from './Image';
import {withLabel} from './label-context';
import {forExport} from './export-context';
const ExpLabeledImage = forExport(withLabel(Image));

/*todo: refactor to handle text first, then iamge as backup*/
const LinjaPona = ({field}) => (
	<Fragment>
	{
		!!field &&
		<ExpLabeledImage
			additionalClass="linja-pona"
			labelName="linja pona"
			fieldName="linjaPona"
			resource={field}
		/>
	}
	{
		!field &&
		<span></span>
	}
	</Fragment>
);

export default LinjaPona;
