import React from 'react';

import CardElement from './CardElement';
import StaticCardElement from './StaticCardElement';

//todo: verify the correct text for "fieldName"
/*generally the English translation of L2 term*/
const TranslationElement = ({field, importance, isForExport, labelOn}) => (
	<span>
		{
			!isForExport &&
			<CardElement
				labelName="English Translation"
				fieldName="translation"
				size="regular"
				additionalClass="field-translation"
				labelOn={labelOn}
				importance={!importance ? "low" : importance}
				field={field}
			/>
		}
		{/* todo: add hintedOut option to StaticCardElement*/}
		{
			!!isForExport &&
			<StaticCardElement
				labelName="English Translation"
				fieldName="translation"
				additionalClass="field-translation"
				importance={!importance ? "low" : importance}
				labelOn={labelOn}
				size="regular"
				text={`{{engTrans}}`}
			/>
		}
	</span>
);

export default TranslationElement;
