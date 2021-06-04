import {
  AnswerCard,
  TwoAnswerCards,
  FourAnswerCards,
} from "./AnswerCards";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Answer Cards",
  decorators: [withDesign],
};

export const AnswerCards = (args) => (
  <>
    <AnswerCard className="answerCard" />
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
