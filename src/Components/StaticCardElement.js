import React, {Fragment} from 'react';

import ElementLabel from './ElementLabel';

/*
	Use this component to display text that isn't
	dynamic/conditional (composition as child only).
	Can be multi-line.
*/
const StaticCardElement = ({additionalClass, importance, hintedOut, labelOn, labelName, size, text}) => (
	<Fragment>
	{
		!!text &&
		<Fragment>
		{
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
		}
		</Fragment>
	}
	{
		!text &&
		<Fragment>
			???
		</Fragment>
	}
	</Fragment>
);

export default StaticCardElement;
