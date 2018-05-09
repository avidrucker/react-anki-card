import React from 'react';

import CardElement from './CardElement';
import {withLabel} from './label-context';
import {forExport} from './export-context';
const ExpLabeledCardElement = forExport(withLabel(CardElement));

/*use this component to mark element blocks (primarily for testing) */
const TagBlock = ({field}) => (
  <ExpLabeledCardElement
    additionalClass="card-tags"
    fieldName="Tags"
    field={field}
    importance="low"
    hintedOut={false /*todo: (UXUI improvement) change this to true before production*/}
    labelName="Tags"
    size="small"
  />
);

export default TagBlock;
