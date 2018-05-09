import React, { Fragment } from 'react';
import SpanElement from './SpanElement';
import BlockLabel from './BlockLabel';

/*high level block component that correlates directly with term field */
const CardTermOnly = ({labelName, isForExport, field, labelOn, size, importance, hintedOut}) => (
	<div className="card-element">
		{!!labelOn && <BlockLabel text={labelName} />}
		<div className="card-element-line">
			{
				!isForExport &&
				<SpanElement
					fieldName="L2 term"
					size={!size ? "big" : size}
					additionalClass="field-term"
					importance={!importance ? "high" : importance}
					hintedOut={hintedOut}
					field={field}
				/>
			}
			{
				!!isForExport &&
				<Fragment>{`{{term}}`}</Fragment>
			}
		</div>
	</div>
);

export default CardTermOnly;
