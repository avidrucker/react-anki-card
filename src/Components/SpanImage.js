import React, {Fragment} from 'react';

/*general image, this can represent a text image, photo or picture
It is NOT meant for use as the background wallpaper*/
/*todo: implement SVG linja pona, SVG fontawesome*/
/*todo: implement IMG block (2-4 images in either 2 pane rectangle, 3 pane triptych, or 4 pane square window format, SVG fontawesome*/
const SpanImage = ({imgClass, imgAlt, fieldName, resource}) => {
	let images;

	if(resource === undefined || resource === "") {
		return (
			<span key="tree" className={`card-element-span danger`}>
				{`${fieldName} field missing!`}
			</span>
		);
	}
	else {
		images = resource.split("\n").map(image => {
	     return <span key={image+500} className={`card-element-span`}>
				 <img
				 	key={image+400}
					src={require(`../Images/${image}`)}
					alt={imgAlt+image /*todo: change this!*/}
					className={`${imgClass} img-responsive`}
				/>
			</span>
	  });
	}

	return (
	<Fragment>
	{
		images.map(value =>
			<span key={value.key} className="card-element-span">{value}</span>
		)
	}
	</Fragment>
	);
};

export default SpanImage;

// {
// 	!!isForExport &&
// 	<span>{`{{${fieldName}}}`}</span>
// }
