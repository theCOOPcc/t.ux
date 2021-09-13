import React, {useState} from 'react'
import { withDesign } from "storybook-addon-designs";
import { UIExampleCard, ButtonFieldContainer, CheckMarkContainer, ContentMessageHeader, ContentMessageDescription, CheckMarkImage, EmptyDragNDrop, ContinueButtonStatic, ContinueText } from './FillBlank';
import CheckIcon from '../../../../images/DragNDrop/CheckmarkIcon.svg';

export default {
  title: "Drag&Drop",
  decorators: [withDesign],
};

export const FillBlankDragnDrop = () => (
  <>
    <UIExampleCard>
      <CheckMarkContainer>
      <CheckMarkImage src={CheckIcon}/>
      </CheckMarkContainer>
      <ContentMessageHeader>
      Successfully Published
      </ContentMessageHeader>
      <ContentMessageDescription>
      Your profile has been published successfully. <br></br>You can browse projects now.
      </ContentMessageDescription>
      <ButtonFieldContainer>
        <EmptyDragNDrop>

        </EmptyDragNDrop>
        <ContinueButtonStatic>
        <ContinueText>
          Continue
        </ContinueText>
        </ContinueButtonStatic>
      </ButtonFieldContainer>
    </UIExampleCard>
  </>
);


