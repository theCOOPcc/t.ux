import React, { useState } from 'react';
import ReactModal from 'react-modal';
import * as U from '../TuxComponents/UniversalComponents';
import * as L from '../TuxComponents/LoginComponents';
import EmailCheckbox from "../../components/EmailCheckbox/EmailCheckbox";
import groupAPI from "../../services/groupService";
import * as mailAPI from "../../services/mail-api";
import './ActivityInvite.css';
const ActivityInvite = ({ 
    isOpen, 
    setIsOpen, 
    groups,
    setGroups,
    selectedGroupIndex,
    setSelectedGroupIndex,
}) => {
    const [newGroups, setNewGroups] = useState("");
    const handleSendInvite = async () => {
        const groupToInvite = await groupAPI.update(groups[selectedGroupIndex]);
        console.log(groupToInvite);
        // TODO: send group info to nodemailer api
        mailAPI.create(groupToInvite);
    };
    const handleCopyLink = () => {
      //
    };
    const handleAddInvited = (index) => {
        console.log("adding", index);
        // get the selected group
        const group = groups[selectedGroupIndex];
        const inviteList = group.invited;
        // find the user in the invite list
        const user = inviteList[index];
        user.invited = true;
        // make a copy of groups in state
        const newGroups = groups;
        newGroups[selectedGroupIndex] = group;
        // set new groups to state
        console.log(newGroups);
        // setNewGroups(newGroups);
        setGroups(newGroups);
    };
    const handleRemoveInvited = (index) => {
        console.log("removing", index);
        // get the selected group
        const group = groups[selectedGroupIndex];
        const inviteList = group.invited;
        // find the user in the invite list
        const user = inviteList[index];
        user.invited = false;
        // make a copy of groups in state
        const newGroups = groups;
        newGroups[selectedGroupIndex] = group;
        // set new groups to state
        setNewGroups(newGroups);
        // setGroups(newGroups);
    };
    return ( 
    <ReactModal
        isOpen={ isOpen }
        contentLabel={"Invite Students"}
        ariaHideApp={ true }
        // aria={
        //     {
            //         labelledby: "heading",
            //         describedby: "full description here"
            //     }
            // }
        shouldCloseOnEsc={ true }
        shouldCloseOnOverlayClick={ true }
        onRequestClose={() => setIsOpen(!isOpen) }
        className='inviteModal'
        overlayClassName='inviteModalOverlay'
    >
        <L.TuxFlower invite src="/images/circle.png"></L.TuxFlower>
        <L.LoginBox invite>
            <U.Heading3 invite>Invite Students</U.Heading3>
            <U.Normal invite>Group: {<i>group name</i>}</U.Normal>
            {/* <div className="email"> */}
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
              <div className="email">
              {groups &&
                groups.length >= 0 &&
                selectedGroupIndex &&
                groups[selectedGroupIndex].invited.map((user, index) => (
                  <EmailCheckbox
                    key={index}
                    user={user}
                    index={index}
                    handleAddInvited={handleAddInvited}
                    handleRemoveInvited={handleRemoveInvited}
                  />
                ))}
                </div>
            {/* </div> */}
            <button className="send-invite">Send Invite</button>
            <p className="or">or</p>
            <button className="copy-link">Copy Link<img src="/images/icons/copy-icon.png" width="50" height="50" alt="copy icon"></img></button>
        </L.LoginBox>  
    </ReactModal>
     );
}
export default ActivityInvite;