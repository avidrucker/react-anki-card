import React from 'react';

/*use this component to mark element blocks */
const BlockLabel = ({additionalClass, text}) => (
		<span className={`element-tag ${additionalClass}`}>
			{text}
		</span>
);


export default BlockLabel;
