import React from 'react';

import SpanImage from './SpanImage';
import ELLabel from './ELLabel';
import {withTheme} from '../Contexts/theme-context';
const ThemedLabel = withTheme(ELLabel);

/*"smart" block elements (composition as child only) which
determine whether to render a label, what fields to used
depending on the theme (ie. imageWhite or imageBlack fields),
as well as whether to make child components hintedOut or isForExport*/
const DivImage = ({imgClass, field, fieldName, importance,
	labelOn, theme, hintedOut, isForExport, labelName, size}) => (
	<div className={`card-element ${size} ${importance}`}>
		{
			!!labelOn &&
			<ThemedLabel
				text={labelName}
			/>
		}
		{
			!isForExport &&
      <div className="card-element-line">
  			<SpanImage
          imgClass={imgClass}
          labelName={labelName}
          fieldName={fieldName}
          resource={field}
        />
      </div>
		}
		{
			!!isForExport &&
			<div className="card-element-line">
				<span className={imgClass}>
					{`{{${fieldName}}}`}
				</span>
			</div>
		}
	</div>
);

export default DivImage;
