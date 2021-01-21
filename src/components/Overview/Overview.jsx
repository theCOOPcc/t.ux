import React from 'react';
import * as U from '../../components/TuxComponents/UniversalComponents';

const Overview = ({user, activityName, activityTime}) => {
  return (
    <>
    {/* <U.Sub6ColGrid> */}
      <U.FlexBox flexStartJC column overview>
        <U.ColorBlock SubGridBlue></U.ColorBlock>
        <U.FlexBox flexStartJC column overview2>
          {user? 
          <U.Heading1 overview>Welcome, {user.firstName}!</U.Heading1>: <U.Heading1 overview>Welcome, ____!</U.Heading1>}
          <U.Normal>You're about to begin an activity assigned by your instructor on the <strong>{activityName}.</strong></U.Normal>
          <U.Normal bold>What to expect:</U.Normal>
          <li>Content you've learned inside or outside the classroom.</li>
          <br></br>
          <li>Documentation of your progress to your instructor.</li>
          <br></br>
          <li>Check for understanding along the way.</li>
          <br></br>
          <li>Feedback that will help with your learning.</li>
          <br></br>
          <U.Normal overview>Time to complete activity is <strong>{activityTime} min</strong></U.Normal>
          <U.Normal overview>Begin when you're ready. Good luck!</U.Normal>
        </U.FlexBox>
      </U.FlexBox>
      <U.WideBtn enable>
            Begin
        </U.WideBtn>
    {/* </U.Sub6ColGrid> */}
    </>
  );
};

export default Overview;
