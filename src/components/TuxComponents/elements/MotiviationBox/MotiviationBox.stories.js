import React from "react";
import { withDesign } from "storybook-addon-designs";
import { MotivationContainer, MotivationImage, MotivationText, MotivationTitle, PolygonImage } from "./MotivationBox";
import PuzzlePiece from '../../../../images/icons/PuzzlePiece.svg';
import BriefcaseArrow from '../../../../images/icons/BriefcaseArrow.svg';
import BriefcasePencil from '../../../../images/icons/BriefcasePencil.svg';
import ContinuedEducation from '../../../../images/icons/continuingeducation.png'
import PolygonHover from '../../../../images/icons/PolygonHover.svg';


export default {
    title: "Motivation_Box",
    decorators: [withDesign],
};

export const Motivation_Box = () => (
    <div>
    <MotivationContainer>
    <MotivationImage puzzle/>
        <MotivationText>
            <MotivationTitle>Hobby</MotivationTitle>
        </MotivationText>
        <PolygonImage src={PolygonHover}/>
    </MotivationContainer>
    

    <MotivationContainer>
    <MotivationImage pencil/>
        <MotivationText>
            <MotivationTitle>Career change</MotivationTitle>
        </MotivationText>
        <PolygonImage src={PolygonHover}/>
    </MotivationContainer>



    <MotivationContainer>
    <MotivationImage brief/>
        <MotivationText>
            <MotivationTitle>To boost my career</MotivationTitle>
        </MotivationText>
        <PolygonImage src={PolygonHover}/>
    </MotivationContainer>


    <MotivationContainer>
    <MotivationImage education/>
        <MotivationText>
            <MotivationTitle>Continuing education</MotivationTitle>
        </MotivationText>
        <PolygonImage src={PolygonHover}/>
    </MotivationContainer>

    </div>
    
)



Motivation_Box.story = {
    parameters: {
      design: {
        type: "figma",
        url:
          "https://www.figma.com/file/CCN67B2RlMZoBCk7BJNq0U/Independent-Learner-Flow?node-id=62%3A17889",
      },
    },
  };