import React from 'react';
export const LabelContext = React.createContext();

export const withLabel = (Component) => {
    console.log('ehllomate')
    return (props) => {
        return (
            <LabelContext.Consumer>
                    {labelOn =>  {
                        console.log(labelOn);
                        return <Component {...props} labelOn={labelOn} />}}
                        
                </LabelContext.Consumer>
            )
        }
    }