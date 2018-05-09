import React from 'react';

import BlockElement from './BlockElement';
import {withLabel} from './label-context';
import {forExport} from './export-context';
const ExpLabeledBlockElement = forExport(withLabel(BlockElement));

/*use this component to mark element blocks (primarily for testing) */
const BlockTag = ({field}) => (
  !!field &&
  <ExpLabeledBlockElement
    additionalClass="card-tags"
    fieldName="Tags"
    field={field}
    importance="low"
    hintedOut={false /*todo: (UXUI improvement) change this to true before production*/}
    labelName="Tags"
    size="small"
  />
);

export default BlockTag;
