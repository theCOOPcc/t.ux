import {
  AnswerCard,
  TwoAnswerCards,
  FourAnswerCards,CardGroup, AnswerCardBox, Icon, IconText, CardText, Image, WideImage
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
          <Image src={answer.image} alt={answer.altText} />
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
  <CardGroup>
  {oneAnswerOption.map((answer, idx) => (
    <AnswerCardBox {...args} key={idx} className="answerCard">
      {
        args.correct ?
        <Icon><img src="./images/icons/answerCheckGreen.svg" alt="checkmark" width="44" height="44"/></Icon>
        : args.incorrect ?
        <Icon><img src="/images/icons/answerXRed.svg" alt="red x" width="44" height="44"/></Icon>
        : <Icon {...args}>
          <IconText>{answer.iconText}</IconText>
        </Icon>
      }
      <Image src={answer.image} alt={answer.altText} />
        <CardText>{answer.cardText}</CardText>
    </AnswerCardBox>
  ))}
</CardGroup>
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
