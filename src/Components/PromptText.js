import React from 'react';

import StaticCardElement from './StaticCardElement';

/*todo: question: should prompt text always inherit color/styling? */
const PromptText = ({labelOn, text}) => (
	<StaticCardElement
		labelName="Card Prompt"
		labelOn={labelOn}
		size="regular"
		additionalClass="text-prompt"
		importance="low"
		text={text}
	/>
);

export default PromptText;
