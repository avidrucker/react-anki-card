import React, { Component } from 'react';

//todo: consult the Internet as to whether div background are standard accessibility, or rather elsehow for better accessibility compliance 
const Background = ({name, resource}) => (
	<div className="full-height-bg">
		<img src={`./${resource}`} alt={name} />
	</div>
);

export default Background;