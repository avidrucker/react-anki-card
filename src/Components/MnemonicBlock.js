import React, {Fragment} from 'react';

import CardElement from './CardElement';

/*use this component to mark element blocks (primarily for testing) */
const MnemonicBlock = ({labelOn, field, isForExport}) => (
  // labelName, size, isForExport
  <Fragment>
    {
      !!field &&
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
    }
  </Fragment>
);

export default MnemonicBlock;
