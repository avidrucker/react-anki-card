import React, { Fragment } from 'react';

/*use this component to mark element blocks */
const BlockLabel = ({additionalClass, theme, text}) => {
	const themeStyle = (theme === "black-board") ? "outline pastel-chalk-text" : "";

	return (<Fragment>
	{
		!!text &&
		(
			<span className={`component-label ${themeStyle} ${additionalClass}`}>
				{text}
			</span>
		)
	}
	{
		!text &&
		(
			<span className={`component-label ${themeStyle} ${additionalClass} danger`}>
				label text missing
			</span>
		)
	}
	</Fragment>);
};


export default BlockLabel;
