import React, {Fragment} from 'react';

import BlockElement from './BlockElement';
import {withLabel} from './label-context';
import {forExport} from './export-context';
const ExpLabeledBlockElement = forExport(withLabel(BlockElement));

/*use this component to mark element blocks (primarily for testing) */
const BlockMnemonic = ({field}) => (
  // labelName, size, isForExport
  <Fragment>
    {
      !!field &&
      <ExpLabeledBlockElement
        additionalClass="card-mnemonic"
        fieldName="mnemonic"
        field={field}
        labelName="Mnemonic Device"
        importance="low"
        size="small"
      />
    }
  </Fragment>
);

export default BlockMnemonic;
