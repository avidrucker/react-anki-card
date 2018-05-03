import React from 'react';

/*use this component to mark element blocks (primarily for testing) */
const ElementLabel = ({text}) => (
	<span className="element-tag">
		{text}
	</span>
);

export default ElementLabel;
