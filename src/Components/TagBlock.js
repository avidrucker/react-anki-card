import React from 'react';

import CardElement from './CardElement';

/*use this component to mark element blocks (primarily for testing) */
const TagBlock = ({labelOn, field, isForExport}) => (
  // labelName, size, isForExport
  <CardElement
    additionalClass="card-tags"
    fieldName="Tags"
    field={field}
    importance="low"
    hintedOut={false /*todo: change this to true before production*/}
    labelOn={labelOn}
    labelName="Tags"
    size="small"
    isForExport={isForExport}
  />
);

export default TagBlock;
