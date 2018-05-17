import React, {Fragment} from 'react';

import BlockElement from './BlockElement';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtendedBlockElement = forExport(withLabel(withTheme(BlockElement)));

/*use this component to mark element blocks (primarily for testing) */
const ELMnemonic = ({colorRank, field}) => (
  // labelName, size, isForExport
  <ExtendedBlockElement
    elClass="el-mnemonic"
    colorRank={colorRank}
    fieldName="mnemonic"
    field={field}
    labelName="Mnemonic Device"
    importance="low"
    size="small"
  />
);

export default ELMnemonic;
