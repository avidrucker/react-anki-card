import React from 'react';

import DivElement from './DivElement';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtDivElement = forExport(withLabel(withTheme(DivElement)));

/*use this component to mark element blocks (primarily for testing) */
const ELTags = ({colorRank, field, hintedOut, importance, size}) => (
  <ExtDivElement
    elClass={`el-tags`}
    colorRank={colorRank}
    fieldName="Tags"
    field={field}
    importance={!importance ? "low" : importance}
    hintedOut={hintedOut}
    labelName="Tags"
    size={!size ? "small" : size}
  />
);

export default ELTags;
