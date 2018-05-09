import React, { Component } from 'react';
import CardElementSpan from './CardElementSpan';
import ElementLabel from './ElementLabel';
//import {withTheme} from '../theme-context';

import {LabelContext,LabelProvider, withLabel} from './label-context';

/*generally appears at the top/bottom of each card to make it clear which deck the learner is currently using.
this may be substituted with a country flag or other visual indicator such as a logo or Unicode symbol */
//todo: implement expert mode switch which doesn't even render any components, just text
class Category extends Component {
	render() {
		const {theme, cardLang, cardType, isForExport} = this.props;

		return (
			<div className="card-element">
				{!!this.props.labelOn && <ElementLabel additionalClass={theme} text="Language & Card Type" />}
				{console.log(this.props)}
				<div className="card-element-line small low special-field-category">
					{
						!isForExport &&
						<div>
							<CardElementSpan
								name="language"
								field={cardLang}
							/>
							{"::"}
							<CardElementSpan
								name="card type"
								field={cardType}
							/>
						</div>
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

//export default ThemedCategory = withTheme(Category);
export default Category;
