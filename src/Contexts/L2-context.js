import React from 'react';
export const L2Context = React.createContext();

export const withL2 = (Component) => {
  return (props) => {
    return (
      <L2Context.Consumer>
        {
          l2 =>  {
            return <Component {...props} l2={l2} />
          }
        }
      </L2Context.Consumer>
    )
  }
}
