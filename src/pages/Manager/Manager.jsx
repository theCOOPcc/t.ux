import React from 'react';
import ManagerActivites from '../../components/ManagerActivities/ManagerActivities';
import ManagerStudentResults from '../../components/ManagerStudentResults/ManagerStudentResults';
import ManageGroupMembers from '../../components/ManageGroupMembers/ManageGroupMembers';

const Manager = () => {
  return (
    <>
      <h1>Manager Landing Page</h1>
      <ManagerStudentResults />
      <ManagerActivites />
      <ManageGroupMembers />
    </>
  );
};

export default Manager;
