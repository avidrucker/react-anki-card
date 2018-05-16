import React, {Fragment} from 'react';

import BlockElement from './BlockElement';
import {withLabel} from './label-context';
import {forExport} from './export-context';
import {withTheme} from './theme-context';
const ExtendedBlockElement = forExport(withLabel(withTheme(BlockElement)));

/*use this component to mark element blocks (primarily for testing) */
const ELMnemonic = ({field}) => (
  // labelName, size, isForExport
  <ExtendedBlockElement
    additionalClass="card-mnemonic"
    fieldName="mnemonic"
    field={field}
    labelName="Mnemonic Device"
    importance="low"
    size="small"
  />
);

export default ELMnemonic;
