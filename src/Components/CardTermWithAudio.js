//todo: replace conditional "export_mode" w/ single switch to single `{{${field}}}` using 'isForExport'
import React, { Fragment } from 'react';

import BlockLabel from './BlockLabel';
import SpanElement from './SpanElement';
import SpanAudio from './SpanAudio';

/*high level block component that combines TERM and AUDIO fields into one block */
const CardTermWithAudio = ({labelName, importance, field, isForExport, labelOn}) => (
	<div className="card-element">
		{labelOn && <BlockLabel text={labelName} />}
		<div className="card-element-line">
			{
				!isForExport &&
				<Fragment>
					<SpanAudio
						name="L2 term audio"
						additionalClass="field-term"
						field="▸"
					/>
					<SpanElement
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
