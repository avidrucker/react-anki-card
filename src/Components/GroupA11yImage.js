import React, { Fragment } from 'react';

import DivImage from './DivImage';
import DivElement from './DivElement';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtImage = forExport(withLabel(withTheme(DivImage)));
const ExtDivElement = forExport(withLabel(withTheme(DivElement)));

const GroupA11yImage = ({imgClass, imageField, imageLabelName,
    imageFieldName, textFieldName, textAddClass, captionText}) => {
  return (
    <Fragment>
      <ExtImage
        imgClass={imgClass}
        labelName={imageLabelName}
        fieldName={imageFieldName}
        field={imageField}
      />
      <ExtDivElement
        colorRank="secondary-color"
    		labelName={imageLabelName + " A11y Text"}
    		size="small"
    		elClass="text-a11y"
    		importance="low"
    		field={captionText}
        fieldName={textFieldName}
    	/>
    </Fragment>
  )
};

export default GroupA11yImage;
