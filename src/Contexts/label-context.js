import React from 'react';
export const LabelContext = React.createContext();

export const withLabel = (Component) => {
  return (props) => {
    return (
      <LabelContext.Consumer>
        {
          labelOn =>  {
            return <Component {...props} labelOn={labelOn} />
          }
        }
      </LabelContext.Consumer>
    )
  }
}
