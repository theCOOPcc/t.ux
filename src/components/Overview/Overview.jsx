import React, { useContext } from 'react';
import * as U from '../../components/TuxComponents/UniversalComponents';
import { ActivityContext } from '../../contexts/ActivityContext';

const Overview = ({ user }) => {
  const {
    name: activityName,
    time: activityTime,
    setStarted,
    _id: activityId,
    sections,
  } = useContext(ActivityContext);

  // !This function builds the initial session object, which will be pushed to the session context when the Begin button is clicked.
  const buildInitialSessionObject = () => {
    const { _id, firstName, lastName } = user;
    const session = {
      userId: _id,
      userName: `${firstName} ${lastName}`,
      activityId: activityId,
      activityName: activityName,
      totalSessionTime: null,
      sections: sections,
    };
    return session;
  };

  const initializeSessionTracking = () => {
    const initialSessionObject = buildInitialSessionObject();
    // TODO: Call setSession function passed down from SessionContext
  };

  const handleStartSession = () => {
    // TODO: []Build initial session chunk
    initializeSessionTracking();

    // Set session state hook to true to load Introduction of activity.
    setStarted(true);
  };

  return (
    <>
      {/* <U.Sub6ColGrid> */}
      <U.FlexBox flexStartJC column overview>
        <U.ColorBlock SubGridBlue></U.ColorBlock>
        <U.FlexBox flexStartJC column overview2>
          {user ? (
            <U.Heading1 overview>Welcome, {user.firstName}!</U.Heading1>
          ) : (
            <U.Heading1 overview>Welcome, ____!</U.Heading1>
          )}
          <U.Normal>
            You're about to begin an activity assigned by your instructor on the{' '}
            <strong>{activityName}.</strong>
          </U.Normal>
          <U.Normal bold>What to expect:</U.Normal>
          <li>Content you've learned inside or outside the classroom.</li>
          <br></br>
          <li>Documentation of your progress to your instructor.</li>
          <br></br>
          <li>Check for understanding along the way.</li>
          <br></br>
          <li>Feedback that will help with your learning.</li>
          <br></br>
          <U.Normal overview>
            Time to complete activity is <strong>{activityTime} min</strong>
          </U.Normal>
          <U.Normal overview>Begin when you're ready. Good luck!</U.Normal>
        </U.FlexBox>
        <U.WideBtn enable onClick={handleStartSession}>
          Begin
        </U.WideBtn>
      </U.FlexBox>

      {/* </U.Sub6ColGrid> */}
    </>
  );
};

export default Overview;
