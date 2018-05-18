import React from 'react';

import SpanAudio from './SpanAudio';
import ELLabel from './ELLabel';
import {withTheme} from '../Contexts/theme-context';
const ThemedLabel = withTheme(ELLabel);

/*use to show 1+ audio clips & their play buttons*/
const BlockAudio = ({colorRank, elClass, field, fieldName, importance,
	isForExport, labelName, labelOn, size, theme}) => {
	const themeColor = (theme === "black-board") ? "pastel-chalk-text" : "";

	return (
		<div className={`card-element ${elClass} ${size} ${importance} ${themeColor} ${colorRank}`}>
			{
				!!labelOn &&
				<ThemedLabel
					text={labelName}
					colorRank={colorRank}
				/>
			}
			<div className={`card-element-line anki-card-audio`}>
				{!isForExport && field.split("\n").map(i => {
					return (
					<SpanAudio
						key={i}
						field="▸"
					/>
					);
				})}
				{
					!!isForExport &&
					<div className={`card-element-line anki-card-audio`}>
						<span>
							{`{{${fieldName}}}`}
						</span>
					</div>
				}
			</div>
		</div>
	)
};

export default BlockAudio;
