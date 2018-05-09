import React from 'react';

import BlockLabel from './BlockLabel';

/*general image, this can represent a text image, a photo, a picture, but is not meant for use as the background wallpaper*?
/*todo: implement SVG linja pona, SVG fontawesome*/
/*todo: implement IMG block (2-4 images in either 2 pane rectangle, 3 pane triptych, or 4 pane square window format, SVG fontawesome*/
const Image = ({additionalClass, isForExport, labelOn, labelName, fieldName, resource}) => {

	if(resource === "") {
		return <span key={labelName}></span>;
	}

	let images = resource.split("\n").map(image => {
           return <img key={image+400} src={require(`../Images/${image}`)} alt={labelName} className={`${additionalClass} img-responsive`} />
        });

	return (
		<div className="anki-card-image">
			{!!labelOn && <BlockLabel text={labelName} />}
			<div className="card-element-line">
				{
					!isForExport &&
					<span>
					{
						images.map(value =>
							<span key={value.key}>{value}</span>
						)
					}
					</span>
				}
				{
					!!isForExport &&
					<span>{`{{${fieldName}}}`}</span>
				}
			</div>
		</div>
	);
};

export default Image;
