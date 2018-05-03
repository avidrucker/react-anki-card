import React, { Component } from 'react';

//todo: add floating span label element (white text on red text bg)
/*low level field component, not to be used directly (composition as child only) */
const AudioSpan = ({additionalClass, field, importance, name, size}) => (
	<span className={`play-button ${size} ${importance} ${additionalClass}`}>
		{field}
	</span>
);

export default AudioSpan