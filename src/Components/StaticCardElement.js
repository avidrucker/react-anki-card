import React, { Component } from 'react';

import ElementLabel from './ElementLabel';

/*
	Use this component to display text that isn't
	dynamic/conditional (composition as child only).
	Can be multi-line.
*/
const StaticCardElement = ({additionalClass, importance, hintedOut, labelOn, labelName, size, text}) => (
	<div className="card-element">
		{!!labelOn && <ElementLabel text={labelName} />}
		<div className={`${size} ${importance} ${additionalClass}`}>
			{text.split("\n").map(i => {
				return (
					<div className="card-element-line" key={i+100}>
						{i}
					</div>
					);
				})
			}
		</div>
	</div>
);

export default StaticCardElement;