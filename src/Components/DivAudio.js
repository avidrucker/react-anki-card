import React from 'react';

import SpanAudio from './SpanAudio';
import ELLabel from './ELLabel';
import {withTheme} from '../Contexts/theme-context';
const ThemedLabel = withTheme(ELLabel);

/*use to show 1+ audio clips & their play buttons*/
const DivAudio = ({colorRank, field, fieldName, importance,
	isForExport, labelName, labelOn, size, theme}) => {
		const elStyle = (theme === "black-board") ? "chalk-text" :
			(theme === "zenburn" ? "zenburn-text" : "");
		const spanStyle = (theme === "zenburn") ? "zenburn-bg2" : "";

	return (
		<div className={`card-element ${colorRank} ${elStyle}
				${importance} ${size}`}>
			{
				!!labelOn &&
				<ThemedLabel
					text={labelName}
					colorRank={colorRank}
				/>
			}
			<div className={`card-element-line`}>
				{!isForExport && field.split("\n").map(i => {
					return (
					<SpanAudio
						spanStyle={spanStyle}
						key={i}
						field="▸"
					/>
					);
				})}
				{
					!!isForExport &&
					<div className={`card-element-line`}>
						<span>
							{`{{${fieldName}}}`}
						</span>
					</div>
				}
			</div>
		</div>
	)
};

export default DivAudio;
