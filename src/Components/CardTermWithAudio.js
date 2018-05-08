//todo: replace conditional "export_mode" w/ single switch to single `{{${field}}}` using 'isForExport'
import React, { Fragment } from 'react';

import ElementLabel from './ElementLabel';
import CardElementSpan from './CardElementSpan';
import AudioSpan from './AudioSpan';

/*high level block component that combines TERM and AUDIO fields into one block */
const CardTermWithAudio = ({labelName, importance, field, isForExport, labelOn}) => (
	<div className="card-element">
		{labelOn && <ElementLabel text={labelName} />}
		<div className="card-element-line">
			{
				!isForExport &&
				<Fragment>
					<AudioSpan
						name="L2 term audio"
						additionalClass="field-term"
						field="▸"
					/>
					<CardElementSpan
						fieldName="L2 term"
						size="big"
						additionalClass="field-term"
						importance={!importance ? "high" : importance}
						field={field}
					/>
				</Fragment>
			}
			{
				!!isForExport &&
				<Fragment>{`{{termAudio}} {{term}}`}</Fragment>
			}
		</div>
	</div>
);

export default CardTermWithAudio;
