import React from 'react';

import BlockElement from './BlockElement';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtendedBlockElement = forExport(withLabel(withTheme(BlockElement)));

/*use this component to mark element blocks (primarily for testing) */
const ELMnemonic = ({colorRank, field, hintedOut, importance, size}) => (
  // labelName, size, isForExport
  <ExtendedBlockElement
    colorRank={colorRank}
    elClass="el-mnemonic"
    fieldName="mnemonic"
    field={field}
    importance={!importance ? "low" : importance}
    hintedOut={hintedOut}
    labelName="Mnemonic Device"
    size={!size ? "small" : size}
  />
);

export default ELMnemonic;
