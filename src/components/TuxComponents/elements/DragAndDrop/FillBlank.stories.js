import React, {useState} from 'react'
import { withDesign } from "storybook-addon-designs";
import { UIExampleCard, DraggableContainer, WordChoiceContainer, ButtonFieldContainer, CheckMarkContainer, ContentMessageHeader, ContentMessageDescription, CheckMarkImage, EmptyDragNDrop, ContinueButtonStatic, ContinueText, AnswerChoicesText } from './FillBlank';
import CheckIcon from '../../../../images/DragNDrop/CheckmarkIcon.svg';

export default {
  title: "Drag&Drop",
  decorators: [withDesign],
};

export const FillBlankDragnDrop = () => (
  <div>
    <div style={{display: 'flex', justifyContent: 'center'}}>
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
    </div>
        <DraggableContainer>
        <WordChoiceContainer draggable>
          <AnswerChoicesText>
            Undo
          </AnswerChoicesText>
        </WordChoiceContainer>
        <WordChoiceContainer draggable>
          <AnswerChoicesText>
            Close
          </AnswerChoicesText>
        </WordChoiceContainer>
        <WordChoiceContainer draggable>
          <AnswerChoicesText>
            Exit
          </AnswerChoicesText>
        </WordChoiceContainer>
        <WordChoiceContainer draggable>
          <AnswerChoicesText>
            Print
          </AnswerChoicesText>
        </WordChoiceContainer>
        </DraggableContainer>
  </div>
);


