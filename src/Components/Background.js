import React from 'react';

//todo: consult the Internet as to whether div background are standard
//accessibility, or rather elsehow for better accessibility compliance
const Background = ({additionalClass, resourceImg, imgAlt}) => (
	<div className={`full-height-bg ${additionalClass}`}>
		<img src={`./${resourceImg}`} alt={imgAlt} />
	</div>
);

export default Background;
