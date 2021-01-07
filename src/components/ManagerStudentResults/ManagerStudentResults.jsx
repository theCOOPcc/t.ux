import React from 'react';
import * as U from '../../components/TuxComponents/UniversalComponents';

const ManagerStudentResults = ({ results }) => {
  return (
    <U.FlexBox bordered managerDash column>
      <U.ColorBlock SubGridBlue />
      <U.Heading3 alignLeft bolder>
        Student Results
      </U.Heading3>
      {results ? (
        <>
          <U.Normal center greyed>
            {results}
          </U.Normal>
        </>
      ) : (
        <>
          <U.FlexBox>
            <U.Normal twentyThirty center greyed>
              You Have No Results Yet.
              <br></br>
              Invite Students to an Activity to see their Progress.
            </U.Normal>
          </U.FlexBox>
        </>
      )}
    </U.FlexBox>
  );
};

export default ManagerStudentResults;
