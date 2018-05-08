import React from 'react';

import CardElement from './CardElement';

/*use this component to mark element blocks (primarily for testing) */
const MnemonicBlock = ({labelOn, field, isForExport}) => (
  // labelName, size, isForExport
  <CardElement
    additionalClass="card-mnemonic"
    fieldName="mnemonic"
    field={field}
    labelName="Mnemonic Device"
    importance="regular"
    size="medium"
    labelOn={labelOn}
    isForExport={isForExport}
  />
);

export default MnemonicBlock;
