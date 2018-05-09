import React from 'react';
export const ExportContext = React.createContext();

export const forExport = (Component) => {
  return (props) => {
    return (
      <ExportContext.Consumer>
        {
          isForExport =>  {
            return <Component {...props} isForExport={isForExport} />
          }
        }
      </ExportContext.Consumer>
    )
  }
}
