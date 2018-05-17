import React from 'react';
export const ImmersionContext = React.createContext();

export const forImmersion = (Component) => {
  return (props) => {
    return (
      <ImmersionContext.Consumer>
        {
          immersion =>  {
            return <Component {...props} immersion={immersion} />
          }
        }
      </ImmersionContext.Consumer>
    )
  }
}
