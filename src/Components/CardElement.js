import React from 'react';

import ElementLabel from './ElementLabel';

/*general dynamic block elements (composition as child only)*/
const CardElement = ({additionalClass, field,
	fieldName, importance, labelOn,
	hintedOut, isForExport, labelName, size}) => (
	<div className="card-element">
		{!!labelOn && <ElementLabel text={labelName} />}
		{
			!isForExport &&
			<div className={`${size} ${importance} ${additionalClass}`}>
				{
					field.split("\n").map(i => {
						return (
							<div className="card-element-line" key={i+100}>
								{!hintedOut && i}
								{!!hintedOut && `[show ${fieldName}]`}
							</div>
							);
						}
					)
				}
			</div>
		}
		{
			!!isForExport &&
			<div className={`${size} ${importance} ${additionalClass}`}>
				<div className="card-element-line">
					{`{{${fieldName}}}`}
				</div>
			</div>
		}
	</div>
);

export default CardElement;

/*
{
	!!EXPORT_MODE &&
	<div className="card-element-line">
		{`{{${field}}}`}
	</div>
}
*/
