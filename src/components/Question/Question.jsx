import React, { useState, useEffect, useContext } from 'react';
import Feedback from '../Feedback/Feedback';
import * as U from '../TuxComponents/UniversalComponents';
import * as A from '../TuxComponents/ActivitiesComponents';
import Answer from '../Answer/Answer';
import { SessionContext } from '../../contexts/SessionContext';

const Question = ({ details }) => {
  const { response } = useContext(SessionContext);
  // const [bkgrdColor, setbkgrdColor] = useState(['blue', 'green', 'red'])
  const { problemStatement, media, answers } = details.contents;

  return (
    <U.Sub6ColGrid>
      <U.ColorBlock SubGridBlue></U.ColorBlock>
      {/* <A.ProblemStatement>{problemStatement}</A.ProblemStatement> */}
      <U.FlexBox
        problemStatement
        dangerouslySetInnerHTML={{ __html: problemStatement }}
      ></U.FlexBox>
      <U.FlexBox spaceAround>
        <img src={media} alt="" />
        <U.FlexBox column>
          {answers.map((answer, index) => (
            <Answer
              key={index}
              index={index}
              response={response}
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
        </U.FlexBox>
      </U.FlexBox>
      {response && <Feedback response={response} />}
    </U.Sub6ColGrid>
  );
};

export default Question;
