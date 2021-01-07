import React from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import * as U from '../../components/TuxComponents/UniversalComponents';

const ActivityHeader = ({topic,name,completed}) => {
  return (
    <U.InfoBar>
      <U.Heading1 bolder>{topic}</U.Heading1>
      <U.Heading3 greyed>&nbsp;-&nbsp;{name}</U.Heading3>
      <U.Heading3 floatRight>Progress&nbsp;&nbsp;</U.Heading3>
      <ProgressBar completed={completed} />
    </U.InfoBar>
  );
};

export default ActivityHeader;
 