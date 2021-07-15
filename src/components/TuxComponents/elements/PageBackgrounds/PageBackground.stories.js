import React from "react";
import {
  BackgroundBlur,
  PageBackground,
  BackgroundGradient,
  MainColumMain,
  BackButton,
} from "./PageBackgrounds";
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Backgrounds",
  decorators: [withDesign],
};

export const BlurBackground = () => <BackgroundBlur className='blur' />;

export const BackgroundPage = () => (
  <PageBackground className='pageBackground' />
);

export const GradientBackground = () => (
  <BackgroundGradient className='gradient' />
);

export const MainColumn = () => (
    <MainColumMain
      className='main'
    >
      <BackButton>&lt; Back</BackButton>
    </MainColumMain>
  
);
