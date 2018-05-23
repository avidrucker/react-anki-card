import React from 'react';

import SpanAudio from './SpanAudio';
import ELLabel from './ELLabel';
import {withTheme} from '../Contexts/theme-context';
const ThemedLabel = withTheme(ELLabel);

/*high level block component that correlates directly with the audio field */
/*todo: enable multi-audio preview VERY LOW PRIORITY */
const ELTermAudioOnly = ({colorRank, importance, isForExport, labelOn,
	size, theme}) => {
	const elStyle = (theme === "black-board") ? "chalk-text" :
		(theme === "zenburn" ? "zenburn-text" : "");
	const spanStyle = (theme === "zenburn") ? "zenburn-bg2" : "";
	return (
		<div className={`card-element ${colorRank} ${elStyle} ${size} ${importance}`}>
			{
				!!labelOn &&
				<ThemedLabel
					colorRank={colorRank}
					text="Term Audio"
				/>
			}
			<div className={`card-element-line audio-line`}>
				{
					!isForExport &&
					<SpanAudio
						name="L2 term audio"
						field="▸"
						spanStyle={spanStyle}
					/>
				}
				{
					!!isForExport &&
					<span className={`card-element-span ${spanStyle}`}>
						{`{{termAudio}}`}
					</span>
				}
			</div>
		</div>
	);
};

export default ELTermAudioOnly;
