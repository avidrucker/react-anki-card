import React, {Fragment} from 'react';

import ELLabel from './ELLabel';
import {withTheme} from '../Contexts/theme-context';
const ThemedLabel = withTheme(ELLabel);

/*"smart" block elements (composition as child only) which
determine whether to render a label, what fields to used
depending on the theme (ie. imageWhite or imageBlack fields),
as well as whether to make child components hintedOut or isForExport*/
const BlockElement = ({ colorRank, elClass, field, fieldName, importance,
	labelOn, theme, hintedOut, isForExport, labelName, size}) => {
	const themeColor = (theme === "black-board") ? "pastel-chalk-text" : "";

	return(
	<div className={`card-element ${elClass} ${size} ${importance} ${themeColor} ${colorRank}`}>
		{
			!!labelOn &&
			<ThemedLabel
				text={labelName}
				colorRank={colorRank}
			/>
		}
		{
			!isForExport &&
			<Fragment>
				{
					field.split("\n").map(i => {
						return (
							<div className="card-element-line" key={i+200}>
								<span className="card-element-span">
									{!hintedOut && i}
									{!!hintedOut && `[...show ${fieldName}]`}
								</span>
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
					<span className="card-element-span">
						{`{{${fieldName}}}`}
					</span>
				</div>
		}
	</div>);
};

export default BlockElement;
