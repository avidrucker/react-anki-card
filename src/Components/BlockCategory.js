import React, { Component } from 'react';
import SpanElement from './SpanElement';
import BlockLabel from './BlockLabel';

/*generally appears at the top/bottom of each card to make it clear which deck the learner is currently using.
this may be substituted with a country flag or other visual indicator such as a logo or Unicode symbol */
//todo: implement expert mode switch which doesn't even render any components, just text
class BlockCategory extends Component {
	render() {
		const {theme, cardLang, cardType, labelOn, isForExport } = this.props;

		return (
			<div className="card-element">
				{!!labelOn && <BlockLabel additionalClass={theme} text="Language & Card Type" />}
				<div className="card-element-line small low special-field-category">
					{
						!isForExport &&
						<div>
							<SpanElement
								name="language"
								field={cardLang}
							/>
							{"::"}
							<SpanElement
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

export default BlockCategory;
