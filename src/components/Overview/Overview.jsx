import React from 'react';
import * as U from '../../components/TuxComponents/UniversalComponents';

const Overview = ({ setStarted }) => {
  return (
    <U.Sub6ColGrid>
      <h1>Overview page.</h1>
      <button onClick={() => setStarted(true)}>Begin</button>
    </U.Sub6ColGrid>
  );
};

export default Overview;
