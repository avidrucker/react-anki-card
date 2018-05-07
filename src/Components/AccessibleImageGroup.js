import React, { Component } from 'react';

import Image from './Image';
import AccessibilityText from './AccessibilityText';

/*const AccessibleImage = ({image, text}) => {
  <div className="wrapper">
    <image />
    <p>Hi!</p>
  </div>
};*/

const AccessibleImageGroup = ({imageAddClass,
    isForExport, labelOn, imageField, imageLabelName,
    imageFieldName, textFieldName, textAddClass,
    captionText}) => {
  return (<div className="wrapper">
    <Image
      additionalClass={imageAddClass}
      labelName={imageLabelName}
      fieldName={imageFieldName}
      resource={imageField}
      isForExport={isForExport}
      labelOn={labelOn}
    />
    <AccessibilityText
      labelName={imageLabelName}
      labelOn={labelOn}
      field={captionText}
      fieldName={textFieldName}
      isForExport={isForExport}
    />
  </div>)
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
