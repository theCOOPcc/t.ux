import React, { useState, useEffect } from 'react';
// import '../InviteModal/InviteModal.css';

const EmailCheckbox = ({
  user,
  index,
  handleAddInvited,
  handleRemoveInvited,
}) => {
  const [isChecked, setIsChecked] = useState('');
  const [userIndex, setUserIndex] = useState('');

  const handleChange = (e) => {
    const { value: userIndex } = e.target;
    setUserIndex('');
    setIsChecked(!isChecked);
    setUserIndex(userIndex);
    // console.log(isChecked);
  };

  useEffect(() => {
    console.log(isChecked);
    console.log(userIndex);
    isChecked === true && handleAddInvited(userIndex);
    isChecked === false && handleRemoveInvited(userIndex);
  }, [isChecked]);

  return (
    <label className="GroupInviteLabel">
      {user.email}
      <input
        className="GroupInviteCheckbox"
        type="checkbox"
        id={index}
        name="email"
        checked={isChecked}
        value={index}
        onChange={handleChange}
      />
    </label>
  );
};

export default EmailCheckbox;
