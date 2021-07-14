import React from 'react'
import { CreateTopicMod, CreateTopicHeader, CreateTopicSubHeader, CreateButton } from './CreateTopicModal';
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Modal",
  decorators: [withDesign],
};

export const CreateTopicModal = (args) => (
  <CreateTopicMod>
    <CreateTopicHeader>Create A Topic</CreateTopicHeader>
    <CreateTopicSubHeader>Type the Name of the Topic Below</CreateTopicSubHeader>
    <CreateButton>Create</CreateButton>
  </CreateTopicMod>
)