import React from 'react';

import DivElement from './DivElement';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtDivElement = forExport(withLabel(withTheme(DivElement)));

const ELEgTranslation = ({colorRank, field, hintedOut, importance, size}) => (
  <ExtDivElement
    colorRank={colorRank}
    fieldName="exampleTranslation"
    field={field}
    hintedOut={hintedOut}
    importance={!importance ? "low" : importance}
    labelName="Example Translation"
    size={!size ? "small" : size}
  />
);

export default ELEgTranslation;
