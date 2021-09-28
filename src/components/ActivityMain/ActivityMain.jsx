import React, { useContext } from "react";
import { SessionContext } from "../../contexts/SessionContext";
import styled from "styled-components";

import Question from "../../components/Question/Question";
import InjectHTML from "../../components/InjectHTML/InjectHTML";
import { Flex } from "../TuxComponents/utilities";
import { MainColumn } from "../TuxComponents/elements/PageBackgrounds/PageBackgrounds";

const ActivityMain = () => {
  const { currentModule, handleAnswers } = useContext(SessionContext);

  return (
    <>
      {currentModule.type === "display" ? (
        <FlexBox>
          <ContentTitle>{currentModule.contents.title}</ContentTitle>
          <CenteredImage>
            <img src={currentModule.contents.image} alt="" />
          </CenteredImage>

          <p>
            {/* BOLD Visibility of System Status */}
            <BoldWords>{currentModule.contents.boldText}</BoldWords>

            {currentModule.contents.content}

            {/* this creates the necessary breaklines for text. */}
            {currentModule.contents.boldText2 && <br></br>}
            {currentModule.contents.boldText2 && <br></br>}
            {currentModule.contents.content2 && <br></br>}
            {currentModule.contents.content2 && <br></br>}

            <BoldWords>{currentModule.contents.boldText2}</BoldWords>
            {currentModule.contents.content2}
            {/* this creates the necessary breaklines for text. */}
            {currentModule.contents.boldText3 && <br></br>}
            {currentModule.contents.boldText3 && <br></br>}

            <BoldWords>{currentModule.contents.boldText3}</BoldWords>
            {currentModule.contents.content3}

            {currentModule.contents.boldText4 && <br></br>}

            <BoldWords>{currentModule.contents.boldText4}</BoldWords>
            {currentModule.contents.content4}

          </p>
          {/* Bulleted list of tips */}
          <p>
            <BoldWords>{currentModule.contents.boldTips}</BoldWords>
          </p>
          {/* if there are any tips, render bullet points only when needed */}
          {currentModule.contents.objectives1 && (
            <li>{currentModule.contents.objectives1}</li>
          )}
          {currentModule.contents.objectives2 && (
            <li>{currentModule.contents.objectives2}</li>
          )}
          {currentModule.contents.objectives3 && (
            <li>{currentModule.contents.objectives3}</li>
          )}

          {/* if there are tips 4,5,6 then render those bullet points. Otherwise, do not */}
          {currentModule.contents.objectives4 && (
            <li>{currentModule.contents.objectives4}</li>
          )}
          {currentModule.contents.objectives5 && (
            <li>{currentModule.contents.objectives5}</li>
          )}
          {currentModule.contents.objectives6 && (
            <li>{currentModule.contents.objectives6}</li>
          )}

          {/* <InjectHTML markup={currentModule.contents} /> */}
        </FlexBox>
      ) : currentModule.type === "dnd" ? (
        <p>{currentModule.contents.title}</p>
      ) : (
        <Activity>
          <Question details={currentModule} handleAnswers={handleAnswers} />
        </Activity>
      )}
    </>
  );
};

export default ActivityMain;

const Activity = styled.section`
  ${Flex({ fd: "column", ai: "center" })}
`;

const FlexBox = styled.div`
  ${Flex({ fd: "column", ai: "start" })};
  padding: 40px;
`;

const CenteredImage = styled.div`
  align-self: center;
`;
const BoldWords = styled.span`
  font-weight: bold;
`;
const ContentTitle = styled.p`
  color: #f37806;
  font-weight: 500;
  font-size: 24px;
`;
