import { IMAGE_FRAGMENT } from "../imageFragment";

export const RICHTEXT_SECTION_FRAGMENT = `
  _type,
  title,  
  hideTitle,
  content[]{
    ...,
    _type == 'imageObject' => {
      alt,
      image {
        ${IMAGE_FRAGMENT}
      } 
    }
  },

`;
