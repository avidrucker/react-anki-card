import React from 'react';
import {LabelProvider, withLabel} from './label-context';

/*use this component to mark element blocks (primarily for testing) */
const ElementLabel = ({additionalClass, text}) => (
		(
			<span className={`element-tag ${additionalClass}`}>
				{text}
			</span>
		)
);


export default ElementLabel;
