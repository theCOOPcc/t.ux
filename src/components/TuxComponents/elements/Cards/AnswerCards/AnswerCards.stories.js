import {
  AnswerCard,
  TwoAnswerCards,
  FourAnswerCards,CardGroup, AnswerCardBox, Icon, IconText, CardText
} from "./AnswerCards";
import { oneAnswerOption } from "./data";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Answer Cards",
  decorators: [withDesign],
};

export const AnswerCards = (args) => (
  <>
    <CardGroup>
      {oneAnswerOption.map((answer, idx) => (
        <AnswerCardBox {...args} key={idx} className="answerCard">
            <Icon {...args}>
              <IconText>{answer.iconText}</IconText>
            </Icon>
          <img src={answer.image} alt={answer.altText} />
          {/* <div style={{ display: "flex" }}> */}
            <CardText>{answer.cardText}</CardText>
          {/* </div> */}
        </AnswerCardBox>
      ))}
    </CardGroup>
    <TwoAnswerCards />
    <FourAnswerCards />
  </>
);

export const AnswerCardControls = (args) => (
  <AnswerCard {...args}/>
)

AnswerCardControls.args = {
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
