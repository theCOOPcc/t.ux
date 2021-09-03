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
            <BoldWords>
              {currentModule.contents.bold}
            </BoldWords>
            {currentModule.contents.content}
          </p>
          <p>{currentModule.contents.objectives}</p>
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
