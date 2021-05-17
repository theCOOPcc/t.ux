import React from 'react';

import { ImageTile } from './ImageTile'

export default {
    title: 'ImageTile',
    component: ImageTile,
}

const Template = (args) => <ImageTile {...args}/>;

export const ImageTileDisplay = Template.bind({})

// ImageTileDisplay.args = {
//   url:
//     "https://instoremag.com/wp-content/uploads/2020/01/doing-a-bit-of-everything-photo-u1.jpg",
// };

ImageTileDisplay.args = {
  url:
    "https://i.insider.com/5c799c56eb3ce834ad57b632?width=750&format=jpeg&auto=webp",
};