import React from 'react';

import DivImage from './DivImage';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtImage = forExport(withLabel(withTheme(DivImage)));

/*todo: refactor to handle text first, then iamge as backup*/
const ELLinjaPona = ({field, fieldName}) => (
	<ExtImage
		imgClass={`linja-pona`}
		labelName="linja pona"
		fieldName={fieldName}
		resource={field}
	/>
);

export default ELLinjaPona;
