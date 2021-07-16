import React from 'react'
import { CreateTopicMod, CreateTopicHeader, CreateTopicSubHeader, CreateButton, X_Button, X_Image, TuxFlower } from './CreateTopicModal';
import XImage from '../../../../../images/icons/Grey_X.svg'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Modal",
  decorators: [withDesign],
};

export const CreateTopicModal = (args) => (
  <CreateTopicMod className='createTopic'>
    <TuxFlower src='/images/tuxFlower.png' />
    <X_Button>
      <X_Image src={XImage} />
    </X_Button>
    <CreateTopicHeader>Create A Topic</CreateTopicHeader>
    <CreateTopicSubHeader>Type the Name of the Topic Below</CreateTopicSubHeader>
    <CreateButton>Create</CreateButton>
  </CreateTopicMod>
)