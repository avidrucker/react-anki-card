import React, { Fragment } from 'react';

import SpanAudio from './SpanAudio';
import BlockLabel from './BlockLabel';

/*high level block component that correlates directly with the audio field */
/*todo: enable multi-audio preview VERY LOW PRIORITY */
const BlockTermAudio = ({additionalClass, isForExport, labelOn, theme}) => {
	const themeStyle = (theme === "black-board") ? "pastel-chalk-text" : "";
	return (
		<div className={`card-element card-term-audio ${additionalClass} ${themeStyle}`}>
			{
				!!labelOn &&
				<BlockLabel
					theme={theme}
					text="Term Audio"
					additionalClass={additionalClass} /*used for primary-color*/
				/>
			}
			<div className={`card-element-line anki-card-audio`}>
				{
					!isForExport &&
					<SpanAudio name="L2 term audio" field="▸" />
				}
				{
					!!isForExport &&
					<span className="card-element-span">{`{{termAudio}}`}</span>
				}
			</div>
		</div>
	);
};

export default BlockTermAudio;
