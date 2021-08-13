import React from "react";
import { withDesign } from "storybook-addon-designs";
import { TopicContainer, TopicImage, TopicText, TopicTitle, TopicDescription, TopicQuestionTotal, Btn, TopicCompletion } from "./TopicBox";

export default {
    title: "Topic_Box",
    decorators: [withDesign],
};

export const Topic_Box = (args) => (
    <>
    <TopicContainer>
        <TopicImage><TopicCompletion>0% Complete</TopicCompletion></TopicImage>
        <TopicText>
            <TopicTitle>Heuristics</TopicTitle>
            <TopicDescription>Learn about the 10 Heuristics of Design</TopicDescription>
            <TopicQuestionTotal>0 out of 3</TopicQuestionTotal>
        </TopicText>
        <Btn>Start</Btn>
        


    </TopicContainer>
    </>
)






Topic_Box.story = {
    parameters: {
      design: {
        type: "figma",
        url:
          "https://www.figma.com/file/CCN67B2RlMZoBCk7BJNq0U/Independent-Learner-Flow?node-id=59%3A77996",
      },
    },
  };