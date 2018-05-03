import React, { Component } from 'react';
import CardElementSpan from './CardElementSpan';
import ElementLabel from './ElementLabel';

/*high level block component that correlates directly with term field */
const CardTermOnly = ({name, isForExport, field, labelOn, size, importance, hintedOut}) => (
	<div className="card-element">
		{!!labelOn && <ElementLabel text={name} />}
		<div className="card-element-line">
			{
				!isForExport &&
				<CardElementSpan
					name="L2 term"
					size={!size ? "big" : size}
					additionalClass="field-term"
					importance={!importance ? "high" : importance}
					hintedOut={hintedOut}
					field={field}
				/>
			}
			{
				!!isForExport &&
				<span>{`{{term}}`}</span>
			}
		</div>
	</div>
);

export default CardTermOnly;