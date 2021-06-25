import React from 'react'
import { PlaceholderImg, ToolbarImg } from './ImageUpload';
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Activity Wizard",
  decorators: [withDesign],
};

export const PlaceholderImage = (args) => (
  <div>
  <PlaceholderImg {...args} src='./images/imageplaceholder.svg' />

 
    
  </div>
)