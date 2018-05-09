import React from 'react';

import BlockStaticElement from './BlockStaticElement';

/*todo: question: should prompt text always inherit color/styling? */
const PromptText = ({labelOn, text}) => (
	<BlockStaticElement
		labelName="Card Prompt"
		labelOn={labelOn}
		size="small"
		additionalClass="text-prompt"
		importance="low"
		text={text}
	/>
);

export default PromptText;
