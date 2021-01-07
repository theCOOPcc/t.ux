import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const InviteModal = ({
  show,
  handleClose,
  groups,
  selectedGroupIndex,
  setSelectedGroupIndex,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Invite Students</h1>
          <h2>Group:</h2>

          <select
            value={selectedGroupIndex}
            onChange={(e) => setSelectedGroupIndex(e.target.value)}
          >
            <option value=""></option>
            {groups &&
              groups.length >= 0 &&
              groups.map((group, index) => (
                <option key={index} value={index}>
                  {group.name}
                </option>
              ))}
          </select>
          {groups &&
            groups.length >= 0 &&
            selectedGroupIndex &&
            groups[selectedGroupIndex].invited.map((user, index) => (
              <h1>{user.email}</h1>
            ))}

          <Button>Send Invite</Button>

          <Button>Copy Link</Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InviteModal;
