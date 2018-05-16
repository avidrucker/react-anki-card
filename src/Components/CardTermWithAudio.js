//todo: replace conditional "export_mode" w/ single switch to single `{{${field}}}` using 'isForExport'
import React, { Fragment } from 'react';

import BlockLabel from './BlockLabel';
import SpanElement from './SpanElement';
import SpanAudio from './SpanAudio';

/*high level block component that combines TERM and AUDIO fields into one block */
const CardTermWithAudio = ({importance, field, size, isForExport, labelOn}) => (
	<div className="card-element">
		{labelOn && <BlockLabel text="Term & Audio" />}
		<div className={`field-term card-element-line ${importance} ${size}`}>
			{
				!isForExport &&
				<Fragment>
					<SpanAudio field="▸" />
					<SpanElement
						fieldName="L2 term"
						field={field}
					/>
				</Fragment>
			}
			{
				!!isForExport &&
				<span>{`{{termAudio}} {{term}}`}</span>
			}
		</div>
	</div>
);

export default CardTermWithAudio;
