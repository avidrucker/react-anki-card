import React, { Fragment } from 'react';

/*use this component to mark element blocks */
const ELLabel = ({colorRank, text, theme}) => {
	const themeStyle = (theme === "black-board") ? "outline" : "";

	return (<Fragment>
	{
		!!text &&
		(
			<span className={`component-label ${themeStyle} ${colorRank}`}>
				{text}
			</span>
		)
	}
	{
		!text &&
		(
			<span className={`component-label ${themeStyle} danger`}>
				label text missing
			</span>
		)
	}
	</Fragment>);
};


export default ELLabel;
