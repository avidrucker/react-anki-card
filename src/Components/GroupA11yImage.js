import React, { Fragment } from 'react';

import BlockImage from './BlockImage';
import BlockElement from './BlockElement';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtendedImage = forExport(withLabel(withTheme(BlockImage)));
const ExtendedBlockElement = forExport(withLabel(withTheme(BlockElement)));

const GroupA11yImage = ({imageAddClass, imageField, imageLabelName,
    imageFieldName, textFieldName, textAddClass, captionText}) => {
  return (
    <Fragment>
      <ExtendedImage
        additionalClass={imageAddClass}
        labelName={imageLabelName}
        fieldName={imageFieldName}
        resource={imageField}
      />
      <ExtendedBlockElement
    		labelName={imageLabelName + " Accessibility Text"}
    		size="small"
    		additionalClass="text-accessibility"
    		importance="low"
    		field={captionText}
        fieldName={textFieldName}
    	/>
    </Fragment>
  )
};

export default GroupA11yImage;
