import React from 'react';
export const L1Context = React.createContext();

export const withL1 = (Component) => {
  return (props) => {
    return (
      <L1Context.Consumer>
        {
          l1 =>  {
            return <Component {...props} l1={l1} />
          }
        }
      </L1Context.Consumer>
    )
  }
}
