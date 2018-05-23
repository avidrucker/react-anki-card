import React from 'react';

import DivElement from './DivElement';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtDivElement = forExport(withLabel(withTheme(DivElement)));

/*use this component to mark element blocks (primarily for testing) */
const ELMnemonic = ({colorRank, field, hintedOut, importance, size}) => (
  <ExtDivElement
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
