import React, { Component } from 'react';

import AudioSpan from './AudioSpan';
import ElementLabel from './ElementLabel';

/*use this high level component to show one or more audio clips & their play buttons*/
const AudioBlock = ({additionalClass, isForExport, field, labelOn, labelName, fieldName}) => (
	<div className="card-element">
		{!!labelOn && <ElementLabel text={labelName} />}
		<div className={`card-element-line anki-card-audio ${additionalClass}`}>
			{!isForExport && field.split("\n").map(i => {
				return (
				<AudioSpan key={i} field="▸" />
				);
			})}
			{
				!!isForExport && <div>{`{{${fieldName}}}`}</div>
			}
		</div>
	</div>
);

export default AudioBlock;