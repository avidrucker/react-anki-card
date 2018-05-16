import React, {Fragment} from 'react';

import BlockImage from './BlockImage';
import {withLabel} from './label-context';
import {forExport} from './export-context';
import {withTheme} from './theme-context';
const ExtendedImage = forExport(withLabel(withTheme(BlockImage)));

/*todo: refactor to handle text first, then iamge as backup*/
const ELLinjaPona = ({field, fieldName}) => (
	<ExtendedImage
		additionalClass="linja-pona"
		labelName="linja pona"
		fieldName={fieldName}
		resource={field}
	/>
);

export default ELLinjaPona;
