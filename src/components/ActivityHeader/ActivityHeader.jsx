import React, { useContext } from 'react';
import { SessionContext } from '../../contexts/SessionContext';
import ProgressBar from '../../components/TuxComponents/layouts/ProgressBar';
import * as U from '../../components/TuxComponents/UniversalComponents';

const ActivityHeader = () => {
  const { completed, currentSection, topic } = useContext(SessionContext);
  const { name } = currentSection;
  return (
    <U.InfoBar>
      <U.Heading1 bolder>{topic}</U.Heading1>
      <U.Heading3 greyed>&nbsp;-&nbsp;{name}</U.Heading3>
      <U.Heading3 progress>NewNewProgress&nbsp;&nbsp;</U.Heading3>
      <ProgressBar completed={completed} />
    </U.InfoBar>
  );
};

export default ActivityHeader;
