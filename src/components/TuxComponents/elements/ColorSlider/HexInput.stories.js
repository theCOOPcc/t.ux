import React from 'react';
import { HexBox } from './HexInput';
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Hex Input",
  decorators: [withDesign],
};

export const Hex = (args) => (
  <HexBox className='hexBox' type='number' {...args}></HexBox>
)


Hex.args = {
  hover: false,
  selected: false,
}