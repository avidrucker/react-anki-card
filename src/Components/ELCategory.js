import React, { Component, Fragment } from 'react';

import SpanElement from './SpanElement';
import ELLabel from './ELLabel';
import {withTheme} from '../Contexts/theme-context';
const ThemedLabel = withTheme(ELLabel);

/*generally appears at the top/bottom of each card to make it clear which deck the learner is currently using.
this may be substituted with a country flag or other visual indicator such as a logo or Unicode symbol */
//todo: implement expert mode switch which doesn't even render any components, just text
class ELCategory extends Component {
	render() {
		const { theme, cardLang, cardType, colorRank, labelOn, isForExport, size, importance } = this.props;
		const elStyle = (theme === "black-board") ? "pastel-chalk-text" : (theme === "zenburn" ? "zenburn-text" : "");
		const spanStyle = (theme === "zenburn") ? "zenburn-bg2" : "";

		return (
			<div className={`card-element card-category ${elStyle} ${colorRank} ${importance} ${size}`}>
				{
					!!labelOn &&
					<ThemedLabel
						text="Language & Card Type"
						colorRank={colorRank}
					/>
				}
				<div className={`card-element-line special-field-category`} >
					{
						!isForExport &&
						<Fragment>
							<SpanElement
								spanStyle={spanStyle}
								field={`${cardLang}::${cardType}`}
							/>
						</Fragment>
					}
					{
						!!isForExport &&
						<span>{`{{Subdeck}}::{{Card}}`}</span>
					}
				</div>
			</div>
		);
	}
};

export default ELCategory;
