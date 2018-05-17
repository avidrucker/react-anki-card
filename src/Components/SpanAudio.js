import React from 'react';

//todo: use audioAlt for accessibility (a11y) upgrade
//todo: add floating span label element (white text on red text bg)
/*low level field component, not to be used directly (composition as child only) */
const SpanAudio = ({field, audioAlt}) => (
	<span className={`card-element-span play-button`}>
		{field}
	</span>
);

export default SpanAudio;
