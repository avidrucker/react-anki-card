import React from 'react';
/*
	General dynamic span element, again not to be used directly (composition as child only).
	CardElementSpan can have multiple elements, such as multiple example sentences.
	When rendering out JSX export ("isForExport"), there will only be one output of a {{field}},
	and this is currently being handled outside of this span component, though this may change
	depending on code organization/refactoring
*/
//todo: remove conditional "export_mode" w/ single switch to single `{{${field}}}` DONE
const CardElementSpan = ({fieldName, field, size, additionalClass, importance, hintedOut}) => (
	<span className={`${size} ${importance} card-element-span ${additionalClass}`}>
		{field.split("\n").map(i => {
			return (
				<span className="card-element-line" key={i+100}>
					{!hintedOut && i}
					{!!hintedOut && `[show ${fieldName}]`}
				</span>
				);
			})
		}
	</span>
);

export default CardElementSpan;
