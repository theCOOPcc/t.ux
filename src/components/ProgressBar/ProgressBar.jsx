import React from 'react';
import * as U from '../../components/TuxComponents/UniversalComponents';

const ProgressBar = ({ completed }) => {
  // const { completed } = props;

  return (
    <>
      <U.ProgressContainer>
        <U.ProgressFiller style={{ width: `${completed}%` }}></U.ProgressFiller>
        <U.ProgressLabel>
          {completed === '-10'
            ? 'Not Started'
            : completed === 0
            ? 'Starting...'
            : `${completed}%`}
        </U.ProgressLabel>
      </U.ProgressContainer>
    </>
  );
};

export default ProgressBar;
