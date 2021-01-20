import React, { useState, useEffect } from 'react';
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import groupAPI from '../../services/groupService';
import * as mailAPI from '../../services/mail-api';
import ManagerActivites from '../../components/ManagerActivities/ManagerActivities';
import ManagerStudentResults from '../../components/ManagerStudentResults/ManagerStudentResults';

import ManageGroupMembers from '../../components/ManageGroupMembers/ManageGroupMembers';

const Manager = () => {
  const [newGroupName, setNewGroupName] = useState('');
  const [textInput, setTextInput] = useState('');
  const [results, setResults] = useState('');
  const [groups, setGroups] = useState('');
  const [selectedGroupIndex, setSelectedGroupIndex] = useState('');

  const getAllGroups = async () => {
    return await groupAPI.getAll();
  };

  useEffect(() => {
    const retreivedGroups = getAllGroups();
    console.log(retreivedGroups);
    retreivedGroups.then((newGroups) => {
      setGroups(newGroups);
    });
  }, []);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    // setInput(value);
  };

  const handleTextInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setTextInput(value);
  };

  const splitGroupMembers = (textInput) => {
    // Split and trim emails
    const members = textInput.split(',');
    const trimmed = members.map((member) => member.trim());
    return trimmed;
  };

  const sendEmailInvite = async (group) => {
    await mailAPI.create(group);
  };

  const handleAddToGroup = async () => {
    console.log(groups);
    const emails = splitGroupMembers(textInput);
    const inviteList = [];
    emails.forEach((email) =>
      inviteList.push({ email: email, invited: false, signedUp: false })
    );
    const updatedGroups = groups;
    const selectedGroup = updatedGroups[selectedGroupIndex];

    inviteList.forEach((member) => {
      selectedGroup.invited.push({
        email: member.email,
        invited: false,
        signedUp: false,
      });
    });

    const update = await groupAPI.update(selectedGroup);
    console.log(update);
    setGroups(updatedGroups);
    setTextInput('');
  };

  const handleCreateGroup = async () => {
    const group = await groupAPI.create({ name: newGroupName });
    const updatedGroups = groups;
    updatedGroups.push(group);
    setGroups(updatedGroups);
    setNewGroupName('');
  };

  return (
    <>
      <h1>Manager Landing Page</h1>
      <ManagerStudentResults results={results} />
      <ManagerActivites
        groups={groups}
        setGroups={setGroups}
        selectedGroupIndex={selectedGroupIndex}
        setSelectedGroupIndex={setSelectedGroupIndex}
      />
      <ManageGroupMembers
        groups={groups}
        selectedGroupIndex={selectedGroupIndex}
        setSelectedGroupIndex={setSelectedGroupIndex}
        textInput={textInput}
        handleTextInputChange={handleTextInputChange}
        handleAddToGroup={handleAddToGroup}
        newGroupName={newGroupName}
        setNewGroupName={setNewGroupName}
        handleCreateGroup={handleCreateGroup}
      />
    </>
  );
};

export default Manager;
