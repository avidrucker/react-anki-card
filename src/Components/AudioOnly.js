import React from 'react';

import AudioSpan from './AudioSpan';
import ElementLabel from './ElementLabel';

/*high level block component that correlates directly with the audio field */
/*todo: enable multi-audio preview VERY LOW PRIORITY */
const AudioOnly = ({additionalClass, isForExport, labelOn, labelName}) => (
	<div className="card-element">
		{!!labelOn && <ElementLabel text={labelName} />}
		<div className={`card-element-line term-audio anki-card-audio ${additionalClass}`}>
			{
				!isForExport &&
				<AudioSpan
					name="L2 term audio"
					field="▸"
				/>
			}
			{
				!!isForExport &&
				<span>{`{{termAudio}}`}</span>
			}
		</div>
	</div>
);

export default AudioOnly;
