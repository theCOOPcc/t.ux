import React from "react";
import {
  AnswerCardBox,
  Icon,
  IconText,
  CardText,
  FourAnswerCardGroup,
} from "./AnswerCards";
import { fourAnswerOptions, twoAnswerOptions } from './data';
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Answer Cards",
  decorators: [withDesign],
};

export const AnswerCards = () => (
  <>
    <FourAnswerCardGroup>
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
      
    </FourAnswerCardGroup>

    <hr /><hr/>

    <FourAnswerCardGroup>
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
    </FourAnswerCardGroup>
  </>
);

export const AnswerCard = (args) => (
  <AnswerCardBox {...args}>
    <img src="https://picsum.photos/200" alt="random pic" />
    <div style={{ display: "flex" }}>
      <Icon {...args}>
        <IconText>A</IconText>
      </Icon>
      <CardText>Calendar</CardText>
    </div>
  </AnswerCardBox>
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
