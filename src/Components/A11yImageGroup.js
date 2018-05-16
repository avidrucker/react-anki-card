import React, { Fragment } from 'react';

import BlockImage from './BlockImage';
import AccessibilityText from './AccessibilityText';
import {withLabel} from './label-context';
import {forExport} from './export-context';
import {withTheme} from './theme-context';
const ExtendedImage = forExport(withLabel(withTheme(BlockImage)));
const ExtendedA11yText = forExport(withLabel(withTheme(AccessibilityText)));

const A11yImageGroup = ({imageAddClass, imageField, imageLabelName,
    imageFieldName, textFieldName, textAddClass, captionText}) => {
  return (
    <Fragment>
      <ExtendedImage
        additionalClass={imageAddClass}
        labelName={imageLabelName}
        fieldName={imageFieldName}
        resource={imageField}
      />
      <ExtendedA11yText
        labelName={imageLabelName}
        field={captionText}
        fieldName={textFieldName}
      />
    </Fragment>
  )
};

export default A11yImageGroup;
