import React, { Fragment } from 'react';

import Image from './Image';
import AccessibilityText from './AccessibilityText';
import {withLabel} from './label-context';
import {forExport} from './export-context';
const ExpLabeledImage = forExport(withLabel(Image));
const ExpLabeledAccessibilityText = forExport(withLabel(AccessibilityText));

const AccessibleImageGroup = ({imageAddClass, imageField, imageLabelName,
    imageFieldName, textFieldName, textAddClass, captionText}) => {
  return (
    <Fragment>
      <ExpLabeledImage
        additionalClass={imageAddClass}
        labelName={imageLabelName}
        fieldName={imageFieldName}
        resource={imageField}
      />
      <ExpLabeledAccessibilityText
        labelName={imageLabelName}
        field={captionText}
        fieldName={textFieldName}
      />
    </Fragment>
  )
};

export default AccessibleImageGroup;

//import withCaption from './Components/withCaption';
/*AccesibleImage = withCaption(<Image
  labelName="Sign"
  fieldName="signImage"
  resource={card.signImage}
  isForExport={isForExport}
  labelOn={labelOn}
/>, "this is a caption for a toki pona luka sign");
*/
//export const AccesibleImage = withCaption(Image);

/*
const withCaption = (Inner) => class extends Component {
  render() {
    return(
      <div className="wrapper">
        <Inner {...this.props} />
        <p>Hi!</p>
      </div>
    )
  }
}
const image1 = <Image
        labelName="Sign"
        fieldName="signImage"
        resource={card.signImage}
        isForExport={isForExport}
        labelOn={labelOn}
      />;
const AccessibleImage = withCaption(image1);
*/
