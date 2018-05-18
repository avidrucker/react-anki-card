//adjust from 1: L1 on by default (rendered & shown)
// ------- to 2: L1 hidden by default (rendered but hinted out)
// ------- to 3: L1 elements not rendered ("L2 immersion")
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
