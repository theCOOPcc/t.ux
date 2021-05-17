import React from 'react';
import styled from 'styled-components';
import { Flex } from '../utilities';

const ProgressBar = ({ completed }) => {

  return (
    <>
      <ProgressContainer>
        <ProgressFiller style={{ width: `${completed}%` }}></ProgressFiller>
        <ProgressLabel>
          {completed === '-10'
            ? 'Not Started'
            : completed === 0
            ? 'Starting...'
            : `${completed}%`}
        </ProgressLabel>
      </ProgressContainer>
    </>
  );
};

export default ProgressBar;


/*---------- Progress Bar ----------*/
const ProgressContainer = styled.div`
  height: 22px;
  width: 268px;
  background-color: #666666;
  background-image: linear-gradient(
    45deg,
    transparent 10%,
    rgba(255, 255, 255, 0.2) 10%,
    transparent 20%,
    rgba(255, 255, 255, 0.2) 20%,
    transparent 30%,
    rgba(255, 255, 255, 0.2) 30%,
    transparent 40%,
    rgba(255, 255, 255, 0.2) 40%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    transparent 60%,
    rgba(255, 255, 255, 0.2) 60%,
    transparent 70%,
    rgba(255, 255, 255, 0.2) 70%,
    transparent 80%,
    rgba(255, 255, 255, 0.2) 80%,
    transparent 90%,
    rgba(255, 255, 255, 0.2) 90%,
    transparent
  );
  border-radius: 5px;
  ${Flex({ai:'center'})};
`;

const ProgressFiller = styled.div`
  z-index: 1;
  height: 100%;
  border-radius: 5px 0 0 5px;
  background-color: var(--tux-blue);
`;
const ProgressLabel = styled.p`
  padding: 2px;
  font: 400 12px 'Poppins', sans-serif;
  line-height: 24px;
  color: #a9aaa5;
`;
