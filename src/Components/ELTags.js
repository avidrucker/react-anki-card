import React from 'react';

import BlockElement from './BlockElement';
import {withLabel} from '../Contexts/label-context';
import {forExport} from '../Contexts/export-context';
import {withTheme} from '../Contexts/theme-context';
const ExtendedBlockElement = forExport(withLabel(withTheme(BlockElement)));
 
/*use this component to mark element blocks (primarily for testing) */
const ELTags = ({additionalClass, field, hintedOut, importance, size}) => (
  <ExtendedBlockElement
    additionalClass="card-tags"
    fieldName="Tags"
    field={field}
    importance="low"
    hintedOut={false /*todo: (UXUI improvement) change this to true before production*/}
    labelName="Tags"
    size="small"
  />
);

export default ELTags;
