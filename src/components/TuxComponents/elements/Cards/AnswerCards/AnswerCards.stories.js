import React from "react";
import {
  AnswerCardBox,
  Icon,
  IconText,
  CardText,
  CardGroup,
} from "./AnswerCards";
import { fourAnswerOptions, twoAnswerOptions, oneAnswerOption } from './data';
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Answer Cards",
  decorators: [withDesign],
};

export const AnswerCards = () => (
  <>
    <CardGroup>
      {fourAnswerOptions.map(answer => (
          <AnswerCardBox>
          <img src={answer.image} alt={answer.altText} />
          <div style={{ display: "flex" }}>
            <Icon>
              <IconText>{answer.iconText}</IconText>
            </Icon>
            <CardText>{answer.cardText}</CardText>
          </div>
        </AnswerCardBox>
      ))}
      
    </CardGroup>

    <hr /><hr/>

    <CardGroup>
      {twoAnswerOptions.map(answer => (
          <AnswerCardBox>
          <img src={answer.image} alt={answer.altText} />
          <div style={{ display: "flex" }}>
            <Icon>
              <IconText>{answer.iconText}</IconText>
            </Icon>
            <CardText>{answer.cardText}</CardText>
          </div>
        </AnswerCardBox>
      ))}
    </CardGroup>
  </>
);

export const AnswerCard = (args) => (
  <CardGroup>
  {oneAnswerOption.map(answer => (
    <AnswerCardBox {...args}>
    <img src={answer.image} alt={answer.altText} />
    <div style={{ display: "flex" }}>
      <Icon {...args}>
        <IconText>{answer.iconText}</IconText>
      </Icon>
      <CardText>{answer.cardText}</CardText>
    </div>
  </AnswerCardBox>
))}
</CardGroup>
);

AnswerCard.args = {
  correct: false,
  incorrect: false,
  hover: false,
  focus: false,
};

AnswerCard.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=1448%3A4495",
    },
  },
};
