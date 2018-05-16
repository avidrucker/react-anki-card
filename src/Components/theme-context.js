import React from 'react';
export const ThemeContext = React.createContext();

export const withTheme = (Component) => {
  return (props) => {
    return (
      <ThemeContext.Consumer>
        {
          theme =>  {
            return <Component {...props} theme={theme} />
          }
        }
      </ThemeContext.Consumer>
    )
  }
}
