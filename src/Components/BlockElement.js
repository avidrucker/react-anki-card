import React, {Fragment} from 'react';

import BlockLabel from './BlockLabel';

/*"smart" block elements (composition as child only) which
determine whether to render a label, what fields to used
depending on the theme (ie. imageWhite or imageBlack fields),
as well as whether to make child components hintedOut or isForExport*/
const BlockElement = ({additionalClass, field, fieldName, importance,
	labelOn, theme, hintedOut, isForExport, labelName, size}) => {
	const themeStyle = (theme === "black-board") ? "pastel-chalk-text" : "";

	return(
	<div className={`card-element ${size} ${importance} ${additionalClass} ${themeStyle}`}>
		{!!labelOn && <BlockLabel theme={theme} text={labelName} />}
		{
			!isForExport &&
			<Fragment>
				{
					field.split("\n").map(i => {
						return (
							<div className="card-element-line" key={i+200}>
								{!hintedOut && i}
								{!!hintedOut && `[...show ${fieldName}]`}
							</div>
							);
						}
					)
				}
			</Fragment>
		}
		{
			!!isForExport &&
				<div className="card-element-line">
					{`{{${fieldName}}}`}
				</div>
		}
	</div>);
};

export default BlockElement;
