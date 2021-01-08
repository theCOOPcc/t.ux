import React, { useState, useEffect } from 'react';
import * as U from '../../components/TuxComponents/UniversalComponents';
import activityAPI from '../../services/activityService';
import InviteModal from '../../components/InviteModal/InviteModal';

const ManagerActivities = ({
  groups,
  selectedGroupIndex,
  setSelectedGroupIndex,
  setGroups
}) => {
  const [activities, setActivities] = useState('');
  const getActivities = async () => {
    const activities = activityAPI.getAll();
    return activities;
  };

  useEffect(() => {
    getActivities().then((activities) => setActivities(activities));
  }, []);

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <InviteModal
        show={show}
        handleClose={handleClose}
        groups={groups}
        setGroups={setGroups}
        selectedGroupIndex={selectedGroupIndex}
        setSelectedGroupIndex={setSelectedGroupIndex}
      />
      <U.FlexBox bordered managerDash column>
        <U.ColorBlock SubGridBlue></U.ColorBlock>
        <U.Heading3 alignLeft bolder>
          Activities
        </U.Heading3>
        {activities.length > 0 &&
          activities.map((activity, idx) => (
            <U.FlexBox column wide>
              <U.FlexBox wide spaceBetween>
                <U.FlexBox >
                  <U.Normal marginLeft><U.Icon25 src="/images/icons/Heuristic.svg"></U.Icon25></U.Normal>
                  <U.Normal marginLeft twenty8 key={idx}>
                    {activity.name}
                  </U.Normal>
                </U.FlexBox>
                <U.FlexBox alignRight>
                  <U.WideBtn preview onClick={handleShow}>
                    Assign
                  </U.WideBtn>
                  {/* <U.NakedBtn preview>Preview</U.NakedBtn> */}
                </U.FlexBox>
              </U.FlexBox>
              <U.ColorBlock SubGridGrey />
            </U.FlexBox>
          ))}
      </U.FlexBox>
    </>
  );
};

export default ManagerActivities;
