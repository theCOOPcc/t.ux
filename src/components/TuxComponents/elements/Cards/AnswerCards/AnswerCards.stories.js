import {
  AnswerCard,
  TwoAnswerCards,
  FourAnswerCards,CardGroup, AnswerCardBox, Icon, IconText, CardText, Image, WideImage, iconIMG
} from "./AnswerCards";
import { oneAnswerOption } from "./data";
import { withDesign } from "storybook-addon-designs";
import A from '../../../../../images/icons/A.svg';
import B from '../../../../../images/icons/B.svg';
import C from '../../../../../images/icons/C.svg';
import D from '../../../../../images/icons/D.svg';
import Check from '../../../../../images/icons/answerCheckGreen.svg';
import Xred from '../../../../../images/icons/answerXRed.svg';

export default {
  title: "Answer Cards",
  decorators: [withDesign],
};

export const AnswerCards = (args) => (
  <>
    <CardGroup>
      {oneAnswerOption.map((answer, idx) => (
        <AnswerCardBox {...args} key={idx} className="answerCard">
            <Icon src={A} />
    
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
     <Icon 
     src={ args.correct ? Check : args.incorrect ? Xred : args.A ? A : args.B ? B : args.C ? C : args.D ? D : A }
     />
      <Image src={answer.image} alt={answer.altText} />
        <CardText>{answer.cardText}</CardText>
    </AnswerCardBox>
  ))}
</CardGroup>
)

AnswerCardControls.args = {
  correct: false,
  incorrect: false,
  A: false,
  B: false,
  C: false,
  D: false,
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
