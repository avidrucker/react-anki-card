import React, {Fragment} from 'react';
/*
	General dynamic span element.
	Can be many.
	If ("isForExport"), output is simply one styled <span>{{field}}</span>,
	and this is currently being handled outside of this span component, though this may change
	depending on code organization/refactoring
*/
//todo: rename to ElementSpan
//todo: remove conditional "export_mode" w/ single switch to single `{{${field}}}` DONE
const SpanElement = ({spanStyle, field, hintedOut}) => (
	<Fragment>
		{field.split("\n").map(i => {
			return (
				<span
					className={`card-element-span ${spanStyle}`}
					key={i+100}
				>
					{!hintedOut && i}
					{!!hintedOut && `[show ${field}]`}
				</span>
				);
			})
		}
	</Fragment>
);

export default SpanElement;
