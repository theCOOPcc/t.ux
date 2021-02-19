import React, { useState, useEffect } from 'react';
import Feedback from '../Feedback/Feedback';
import Answer from '../Answer/Answer';
import styled from 'styled-components';
import { Flex, tux_blue, common_shadow } from '../TuxComponents/utilities';
import * as U from '../TuxComponents/UniversalComponents';
import * as A from '../TuxComponents/ActivitiesComponents';

const Question = ({ details }) => {
  const [response, setResponse] = useState(null);
  // const [bkgrdColor, setbkgrdColor] = useState(['blue', 'green', 'red'])

  const { problemStatement, media, answers } = details.contents;

  const handleResponse = (answer, index) => {
    setResponse({ selection: answer, selectionIndex: index });
  };

  return (
    <U.Sub6ColGrid>
      <ColorBlock></ColorBlock>
      {/* <A.ProblemStatement>{problemStatement}</A.ProblemStatement> */}
      <FlexBox dangerouslySetInnerHTML={{ __html: problemStatement }}></FlexBox>
      <MediaBox>
        <img src={media} alt="" />
        <BtnBox>
          {answers.map((answer, index) => (
            <Answer
              key={index}
              response={response}
              index={index}
              handleResponse={handleResponse}
              answer={answer}
              disabled={
                !response
                  ? false
                  : response.selectionIndex === index
                  ? false
                  : true
              }
            />
          ))}
        </BtnBox>
      </MediaBox>
      {response && <Feedback response={response} />}
    </U.Sub6ColGrid>
  );
};

export default Question;

const ColorBlock = styled.div`
    height: 10px;
    background: ${tux_blue};
    width: 100%;
`;

const FlexBox = styled.div`
    ${Flex({fd:'column',})};
    background-color: var(--true-white);
    /* box-shadow: ${common_shadow}; */
    border-radius: 10px;
    margin: 30px 60px;
`;

const MediaBox = styled.div`
  ${Flex({jc:'space-around',ai:'center'})};
`;

const BtnBox = styled.div`
  ${Flex({fd:'column',jc:'center',ai:'center'})};
`;