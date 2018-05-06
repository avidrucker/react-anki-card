/*todo: implement HOC where Image component can be wrapped and
accessibility text added to it as "AccessibleImage" component*/
import React, { Component } from 'react';

//const withCaption = BaseComponent => ({captionText}) => {
function withCaption({BaseComponent, captionText}) {
  //return (
  return class ImageWithText extends React.Component {
    render() {
      <div className="wrapper">
        <BaseComponent {...this.props} />
        <p>{captionText}</p>
      </div>
    }
  }
}

export default withCaption;

//export default const AccesibleImage withCaption(Image);
//const AccesibleImage withCaption(Image);
//export default AccesibleImage(Image);
