import React from 'react';

import SpanAudio from './SpanAudio';
import BlockLabel from './BlockLabel';

/*use to show 1+ audio clips & their play buttons*/
const AudioBlock = ({additionalClass, isForExport, field, labelOn, labelName, fieldName}) => (
	<div className="card-element">
		{!!labelOn && <BlockLabel text={labelName} />}
		<div className={`card-element-line anki-card-audio ${additionalClass}`}>
			{!isForExport && field.split("\n").map(i => {
				return (
				<SpanAudio
					key={i}
					field="▸"
				/>
				);
			})}
			{
				!!isForExport && <div>{`{{${fieldName}}}`}</div>
			}
		</div>
	</div>
);

export default AudioBlock;
