import React, { useContext } from 'react';
import { ActivityContext } from '../../contexts/ActivityContext';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import * as U from '../../components/TuxComponents/UniversalComponents';

const ActivityHeader = () => {
  const { completed, currentSection, topic } = useContext(ActivityContext);
  const { name } = currentSection;
  return (
    <U.InfoBar>
      <U.Heading1 bolder>{topic}</U.Heading1>
      <U.Heading3 greyed>&nbsp;-&nbsp;{name}</U.Heading3>
      <U.Heading3 progress>Progress&nbsp;&nbsp;</U.Heading3>
      <ProgressBar completed={completed} />
    </U.InfoBar>
  );
};

export default ActivityHeader;
