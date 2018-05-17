import React, { Fragment } from 'react';

import SpanAudio from './SpanAudio';
import ELLabel from './ELLabel';
import {withTheme} from '../Contexts/theme-context';
const ThemedLabel = withTheme(ELLabel);

/*high level block component that correlates directly with the audio field */
/*todo: enable multi-audio preview VERY LOW PRIORITY */
const ELTermAudioOnly = ({colorRank, elClass, isForExport, labelOn, theme}) => {
	const themeStyle = (theme === "black-board") ? "pastel-chalk-text" : "";
	return (
		<div className={`card-element ${elClass} ${themeStyle} ${colorRank}`}>
			{
				!!labelOn &&
				<ThemedLabel
					theme={theme}
					colorRank={colorRank}
					text="Term Audio"
				/>
			}
			<div className={`card-element-line`}>
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

export default ELTermAudioOnly;
