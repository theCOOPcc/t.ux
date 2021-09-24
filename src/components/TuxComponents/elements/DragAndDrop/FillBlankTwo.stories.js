import React, {useState} from 'react'
import { withDesign } from "storybook-addon-designs";
import CheckIcon from '../../../../images/DragNDrop/CheckmarkIcon.svg';
import { ToolTip } from '../ToolTips/ToolTips';
import { AnswerChoicesTextTwo, ButtonFieldContainerTwo, CheckMarkContainerTwo, CheckMarkImageTwo, ContentMessageDescriptionTwo, ContinueButtonStaticTwo, ContinueTextTwo, DraggableContainerTwo, EmptyDragNDropTwo, UIExampleCardTwo, WordChoiceContainerTwo, ContentMessageHeaderTwo } from './FillBlankTwo';
import Draggable from 'react-draggable';

export default {
  title: "Drag&Drop",
  decorators: [withDesign],
};

export const FillBlankDragnDropTwo = () => (
  <div>
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <UIExampleCardTwo>
      <CheckMarkContainerTwo>
      <CheckMarkImageTwo src={CheckIcon}/>
      </CheckMarkContainerTwo>
      <ContentMessageHeaderTwo>
      Successfully Published
      </ContentMessageHeaderTwo>
      <ContentMessageDescriptionTwo>
      Your profile has been published successfully. <br></br>You can browse projects now.
      </ContentMessageDescriptionTwo>
      <ButtonFieldContainerTwo>
        <ToolTip text='Select one of the buttons below' direction='bottom'>
        <EmptyDragNDropTwo>
          
        </EmptyDragNDropTwo>
        </ToolTip>
        <ContinueButtonStaticTwo>
        <ContinueTextTwo>
          Continue
        </ContinueTextTwo>
        </ContinueButtonStaticTwo>
      </ButtonFieldContainerTwo>
    </UIExampleCardTwo>
    </div>
        <DraggableContainerTwo>

          <Draggable>
        <WordChoiceContainerTwo>
          <AnswerChoicesTextTwo>
            Undo
          </AnswerChoicesTextTwo>
        </WordChoiceContainerTwo>
        </Draggable>

        <Draggable>
        <WordChoiceContainerTwo>
          <AnswerChoicesTextTwo>
            Close
          </AnswerChoicesTextTwo>
        </WordChoiceContainerTwo>
        </Draggable>

        <Draggable>
        <WordChoiceContainerTwo >
          <AnswerChoicesTextTwo>
            Exit
          </AnswerChoicesTextTwo>
        </WordChoiceContainerTwo>
        </Draggable>

        <Draggable>
        <WordChoiceContainerTwo>
          <AnswerChoicesTextTwo>
            Print
          </AnswerChoicesTextTwo>
        </WordChoiceContainerTwo>
        </Draggable>

        </DraggableContainerTwo>
  </div>
);

export const isCorrect = () => (
  <WordChoiceContainerTwo isCorrect>
    <AnswerChoicesTextTwo>
      Undo
    </AnswerChoicesTextTwo>
  </WordChoiceContainerTwo>
);

isCorrect.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/0iUoECZv4H81CUzK9PIGka/Heuristics?node-id=2828%3A46073",
    },
  },
}



export const isIncorrect = () => (
  <WordChoiceContainerTwo isIncorrect>
    <AnswerChoicesTextTwo>
      Close
    </AnswerChoicesTextTwo>
  </WordChoiceContainerTwo>
);


isIncorrect.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/0iUoECZv4H81CUzK9PIGka/Heuristics?node-id=2828%3A46076",
    },
  },
}
