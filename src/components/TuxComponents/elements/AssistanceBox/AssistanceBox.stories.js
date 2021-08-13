import React from "react";
import { withDesign } from "storybook-addon-designs";
import { AssistanceContainer, AssistanceImage, AssistanceText, AssistanceTitle, AssistanceDescription, AssistanceQuestionTotal, Btn, AssistanceCompletion } from "./AssistanceBox";

export default {
    title: "Assistance_Box",
    decorators: [withDesign],
};

export const Assistance_Box = (args) => (
    <>
    <AssistanceContainer>
        <AssistanceImage></AssistanceImage>
        <AssistanceText>
            <AssistanceTitle>Need help choosing the right activity?</AssistanceTitle>
            <AssistanceDescription>Follow our recommended learning cirriculum</AssistanceDescription>
        </AssistanceText>
        <Btn>Start</Btn>
        


    </AssistanceContainer>
    </>
)






Assistance_Box.story = {
    parameters: {
      design: {
        type: "figma",
        url:
          "https://www.figma.com/file/CCN67B2RlMZoBCk7BJNq0U/Independent-Learner-Flow?node-id=99%3A18433",
      },
    },
  };