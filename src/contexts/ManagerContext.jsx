import React, { createContext, useState, useEffect } from 'react';
import groupAPI from '../services/groupService';
import * as mailAPI from '../services/mail-api';

export const ManagerContext = createContext();

const ManagerContextProvider = ({ children }) => {
  const [groups, setGroups] = useState('');
  const [selectedGroupIndex, setSelectedGroupIndex] = useState('');
  const [textInput, setTextInput] = useState('');
  const [newGroupName, setNewGroupName] = useState('');
  const [results, setResults] = useState('');

  const getAllGroups = async () => {
    return await groupAPI.getAll();
  };

  useEffect(() => {
    const retreivedGroups = getAllGroups();
    retreivedGroups.then((newGroups) => {
      setGroups(newGroups);
    });
  }, []);

  // Helper Functions
  const handleTextInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setTextInput(value);
  };
  const sendEmailInvite = async (group) => {
    console.log('sending email front end');
    await mailAPI.create(group);
  };
  const splitGroupMembers = (textInput) => {
    // Split and trim emails
    const members = textInput.split(',');
    const trimmed = members.map((member) => member.trim());
    return trimmed;
  };

  const handleAddToGroup = async () => {
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
    setGroups(updatedGroups);
    setTextInput('');
  };

  return (
    <ManagerContext.Provider
      value={{
        groups: { ...groups },
        setGroups,
        selectedGroupIndex,
        setSelectedGroupIndex,
      }}
    >
      {children}
    </ManagerContext.Provider>
  );
};

export default ManagerContextProvider;
