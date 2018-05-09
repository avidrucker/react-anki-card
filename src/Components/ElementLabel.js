import React from 'react';
import {LabelContext, LabelProvider} from './label-context';

/*use this component to mark element blocks (primarily for testing) */
const ElementLabel = ({additionalClass, text}) => (
	<LabelContext.Consumer >
		labelOn => (
			<span className={`element-tag ${additionalClass}`}>
				{text}
			</span>
		)
	</LabelContext.Consumer>
);

export default ElementLabel;
