import React from 'react';

import BlockElement from './BlockElement';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtendedBlockElement = forExport(withLabel(withTheme(BlockElement)));

const ELExampleTranslation = ({colorRank, field, hintedOut, importance, size}) => (
  <ExtendedBlockElement
    colorRank={colorRank}
    fieldName="exampleTranslation"
    field={field}
    hintedOut={false /*todo: change back to true*/}
    importance="low"
    labelName="Example Translation"
    size="small"
  />
);

export default ELExampleTranslation;
