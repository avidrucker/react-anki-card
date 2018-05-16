import React, {Fragment} from 'react';

import BlockLabel from './BlockLabel';

/*
	Use this component to display text that isn't
	dynamic/conditional (composition as child only).
	Can be multi-line.
*/
const BlockStaticElement = ({additionalClass, importance, hintedOut, labelOn, labelName, size, text, theme}) => (
	<Fragment>
	{
		!!text &&
		<Fragment>
		{
			<div className="card-element">
			{!!labelOn && <BlockLabel theme={theme} text={labelName} />}
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

export default BlockStaticElement;
