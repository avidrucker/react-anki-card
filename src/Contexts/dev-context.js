//shows missing elements, warnings
//turns on CSS to show all elements, blocks, spans, etc.
import React from 'react';
export const DevContext = React.createContext();

export const forDev = (Component) => {
  return (props) => {
    return (
      <ExportContext.Consumer>
        {
          isForExport =>  {
            return <Component {...props} isForDev={isForDev} />
          }
        }
      </ExportContext.Consumer>
    )
  }
}
