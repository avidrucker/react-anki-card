import withCaption from './Components/withCaption';
import Image from './Components/Image';

/*AccesibleImage = withCaption(<Image
  labelName="Sign"
  fieldName="signImage"
  resource={card.signImage}
  isForExport={isForExport}
  labelOn={labelOn}
/>, "this is a caption for a toki pona luka sign");
*/

export const AccesibleImage = withCaption(Image);
