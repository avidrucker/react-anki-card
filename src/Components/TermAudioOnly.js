import React, { Fragment } from 'react';

import SpanAudio from './SpanAudio';
import BlockLabel from './BlockLabel';

/*high level block component that correlates directly with the audio field */
/*todo: enable multi-audio preview VERY LOW PRIORITY */
const TermAudioOnly = ({additionalClass, isForExport, labelOn, labelName}) => (
	<div className="card-element">
		{!!labelOn && <BlockLabel text={labelName} />}
		<div className={`card-element-line term-audio anki-card-audio ${additionalClass}`}>
			{
				!isForExport &&
				<SpanAudio
					name="L2 term audio"
					field="▸"
				/>
			}
			{
				!!isForExport &&
				<Fragment>{`{{termAudio}}`}</Fragment>
			}
		</div>
	</div>
);

export default TermAudioOnly;
