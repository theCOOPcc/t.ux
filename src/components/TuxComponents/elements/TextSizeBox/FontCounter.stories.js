import React from 'react'
import { CounterBox, CounterWrapper, ArrowButtonUp, ArrowButtonDown, UpImage, DownImage } from './FontCounter';
import UpArrow from '../../../../images/ActivityWizardImgs/CounterArrowUp.svg'
import DownArrow from '../../../../images/ActivityWizardImgs/CounterArrowDown.svg'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Font Counter",
  decorators: [withDesign],
};

export const FontCounter = () => (
  <CounterWrapper>
    <CounterBox type='number' ></CounterBox>
    <ArrowButtonUp>
      {/* <UpImage src={UpArrow}></UpImage> */}
    </ArrowButtonUp>
    <ArrowButtonDown>
      {/* <DownImage src={DownArrow}></DownImage> */}
    </ArrowButtonDown>

  </CounterWrapper>
)