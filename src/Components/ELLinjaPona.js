import React, {Fragment} from 'react';

import BlockImage from './BlockImage';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtendedImage = forExport(withLabel(withTheme(BlockImage)));

/*todo: refactor to handle text first, then iamge as backup*/
const ELLinjaPona = ({field, fieldName}) => (
	<ExtendedImage
		imgClass={`linja-pona`}
		labelName="linja pona"
		fieldName={fieldName}
		resource={field}
	/>
);

export default ELLinjaPona;
