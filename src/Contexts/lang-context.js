import React from 'react';
export const LangContext = React.createContext();

export const inLang = (Component) => {
  return (props) => {
    return (
      <LangContext.Consumer>
        {
          lang =>  {
            return <Component {...props} lang={lang} />
          }
        }
      </LangContext.Consumer>
    )
  }
}
