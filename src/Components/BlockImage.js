import React, {Fragment} from 'react';

import SpanImage from './SpanImage';
import BlockLabel from './BlockLabel';

/*"smart" block elements (composition as child only) which
determine whether to render a label, what fields to used
depending on the theme (ie. imageWhite or imageBlack fields),
as well as whether to make child components hintedOut or isForExport*/
const BlockImage = ({additionalClass, field, fieldName, importance,
	labelOn, theme, hintedOut, isForExport, labelName, size}) => (
	<div className={`card-element ${size} ${importance} ${additionalClass}`}>
		{!!labelOn && <BlockLabel theme={theme} text={labelName} />}
		{
			!isForExport &&
      <div className="card-element-line">
  			<SpanImage
          additionalClass="card-image"
          labelName={labelName}
          fieldName={fieldName}
          resource={field}
        />
      </div>
		}
		{
			!!isForExport &&
			<div className="card-element-line">
				{`{{${fieldName}}}`}
			</div>
		}
	</div>
);

export default BlockImage;
