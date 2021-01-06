import React, { useState, useEffect } from 'react';
import { Button, Modal, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import * as U from '../../components/TuxComponents/UniversalComponents';
import groupAPI from '../../services/groupService';
import * as mailAPI from '../../services/mail-api';

const Manager = () => {
  const [newGroupName, setNewGroupName] = useState('');
  const [textInput, setTextInput] = useState('');
  const [results, setResults] = useState('');
  const [activities, setActivities] = useState([
    'Heuristics',
    'Accessability',
    'Research Methodologies',
    'UI Patterns',
  ]);
  const [groups, setGroups] = useState('');
  const [selectedGroupIndex, setSelectedGroupIndex] = useState('');
  const [newStudent, setNewStudent] = useState('');
  const [newStudentEmail, setNewStudentEmail] = useState('');

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

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    // call update groups
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
      <Button onClick={handleShow}>Open Modal</Button>
      <h1>Manager Landing Page</h1>
      {/* // TODO: Render information to screen from state. */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Heading</Modal.Title>
        </Modal.Header>
      </Modal>
      <U.FlexBox column>
        <U.Normal twenty4>Student Results</U.Normal>
        {results ? (
          <U.Normal>{results}</U.Normal>
        ) : (
          <U.Normal greyed>
            You Have No Results Yet. Invite Students to an Activity to see their
            Progress.
          </U.Normal>
        )}
      </U.FlexBox>
      <U.FlexBox column>
        <U.Normal twenty4>Activities</U.Normal>
        {activities.map((activity, idx) => (
          <U.FlexBox>
            <p>icon</p>
            <h1 key={idx}>{activity}</h1>
            <button>Assign</button>
            <button>Preview</button>
          </U.FlexBox>
        ))}
      </U.FlexBox>
      <U.FlexBox column>
        <U.Normal twenty4>Manage Group Members</U.Normal>
        {!groups.length > 0 && (
          <>
            <h1>Group: None</h1>
            <label>Group Name</label>
            <input
              type="text"
              placeholder="Add group name here"
              onChange={(e) => setNewGroupName(e.target.value)}
              value={newGroupName}
            />
            <U.WideBtn teal onClick={handleCreateGroup}>
              Create Group
            </U.WideBtn>{' '}
            */
          </>
        )}
        {groups.length > 0 && (
          <>
            <h2>Group:</h2>
            {/* Have a select dropdown that iterates through groups array so we can select which group to modify */}
            <select
              value={selectedGroupIndex}
              onChange={(e) => setSelectedGroupIndex(e.target.value)}
            >
              <option value=""></option>
              {groups.map((group, index) => (
                <option key={index} value={index}>
                  {group.name}
                </option>
              ))}
            </select>

            {/* //TODO: add user emails to group invite list */}
            {selectedGroupIndex && (
              <>
                {groups[selectedGroupIndex].invited.length > 0 && (
                  <table>
                    <thead>
                      <tr>
                        <th colspan="1">Student Name</th>
                        <th colspan="1">Email</th>
                        <th colspan="1">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {groups[0].users.length > 0 ? (
                        groups[0].users.map((user, index) => (
                          <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>delete button</td>
                          </tr>
                        ))
                      ) : (
                        <>No users yet</>
                      )}
                    </tbody>
                  </table>
                )}
                <label>Add Students To Create Group</label>
                <textarea
                  type="textarea"
                  value={textInput}
                  onChange={handleTextInputChange}
                  placeholder="Enter email addresses seperated by commas (Ex: leo@gmail.com, dan@gmail.com, etc.."
                />
                <U.WideBtn teal onClick={handleAddToGroup}>
                  Add To Group
                </U.WideBtn>
              </>
            )}
            {/* map through the selected group and show student name, email and delete functionality */}
            {/* {selectedGroupIndex && (
              <>
                <table>
                  <thead>
                    <tr>
                      <th colspan="1">Student Name</th>
                      <th colspan="1">Email</th>
                      <th colspan="1">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groups[0].users.length > 0 ? (
                      groups[0].users.map((user, index) => (
                        <tr>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>delete button</td>
                        </tr>
                      ))
                    ) : (
                      <>No users yet</>
                    )}
                  </tbody>
                </table>
              </>
            )} */}
            {/* add input to add student name and student email */}
            {/* <input
              type="text"
              value={newStudent}
              onChange={(e) => setNewStudent(e.target.value)}
            />
            <label>Student Name</label>
            <input
              type="text"
              value={newStudentEmail}
              onChange={(e) => setNewStudentEmail(e.target.value)}
            />
            <label>Student Email</label>
            <button onClick={handleAddNewStudent}>Add New Student</button> */}
          </>
        )}

        {/* {groups &&
          groups.map((group, idx) => (
            <U.FlexBox>
              <h1 key={idx}>{group.name}</h1>
              <table>
                <tr>
                  <th>Student Name</th>
                  <th>Email</th>
                  <th>Delete</th>
                </tr>
                <tr>
                  {group.members.map((member) => (
                    <U.FlexBox>
                      <td>{member}</td>
                      <td>{member}</td>
                      <td>trash can icon</td>
                    </U.FlexBox>
                  ))}
                </tr>
              </table>
            </U.FlexBox>
          ))} */}
        {/* <U.Normal greyed>Add Students to Group</U.Normal>
        <textarea
          type="textarea"
          placeholder="Enter email addresses seperated by commas (Ex: leo@gmail.com, dan@gmail.com, etc.."
        />
        <U.WideBtn teal>Add to Group</U.WideBtn> */}
      </U.FlexBox>
    </>
  );
};

export default Manager;
