import React, { Component } from 'react';
import CardElementSpan from './CardElementSpan';
import ElementLabel from './ElementLabel';

/*generally appears at the top/bottom of each card to make it clear which deck the learner is currently using.
this may be substituted with a country flag or other visual indicator such as a logo or Unicode symbol */
//todo: implement expert mode switch which doesn't even render any components, just text
class Category extends Component {
	/*constructor(props) {
		super(props);
	}*/
	
	render() {
		const {card, cardLang, cardType, isForExport, labelOn} = this.props;
		
		return (
			<div className="card-element">
				{!!labelOn && <ElementLabel text="Language & Card Type" />}
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

export default Category;