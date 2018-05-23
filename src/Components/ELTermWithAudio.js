//todo: replace conditional "export_mode" w/ single switch to single `{{${field}}}` using 'isForExport'
import React, { Fragment } from 'react';

import SpanElement from './SpanElement';
import SpanAudio from './SpanAudio';
import ELLabel from './ELLabel';
import {withTheme} from '../Contexts/theme-context';

const ThemedLabel = withTheme(ELLabel);

/*high level block component that combines TERM and AUDIO fields into one block */
const ELTermWithAudio = ({colorRank, importance, isForExport, field, labelOn,
	size, theme}) => {
		const elStyle = (theme === "black-board") ? "chalk-text" :
			(theme === "zenburn" ? "zenburn-text" : "");
		const spanStyle = (theme === "zenburn") ? "zenburn-bg2 vert-cent" :
			(theme === "zen-light" ? "transparency-enabled vert-cent" :
				(theme === "black-board" ? "vert-cent" : ""));
	return (
	<div className={`card-element ${elStyle} ${colorRank}`}>
		{
			labelOn &&
			<ThemedLabel
				colorRank={colorRank}
				text="Term w/ Audio"
			/>
		}
		<div className={`card-element-line ${importance} ${size}`}>
			{
				!isForExport &&
				<Fragment>
					<SpanAudio
						spanStyle={spanStyle}
						field="▸"
					/>
					<SpanElement
						spanStyle={spanStyle}
						fieldName="L2 term"
						field={field}
					/>
				</Fragment>
			}
			{
				!!isForExport &&
				<span className={spanStyle}>{`{{termAudio}} {{term}}`}</span>
			}
		</div>
	</div>
);
}

export default ELTermWithAudio;
