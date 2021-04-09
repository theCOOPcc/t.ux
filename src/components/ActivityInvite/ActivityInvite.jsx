import React, { useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { grey_text, Flex, common_shadow } from '../TuxComponents/utilities';
import EmailCheckbox from "../../components/EmailCheckbox/EmailCheckbox";
import groupAPI from '../../services/groupService'
import * as mailAPI from '../../services/mail-api'
import './ActivityInvite.css';

const ActivityInvite = ({ 
    isOpen, 
    setIsOpen, 
    groups,
    setGroups,
    selectedGroupIndex,
    setSelectedGroupIndex,
    sendEmailInvite
}) => {
    const [newGroups, setNewGroups] = useState("");
    const handleSendInvite = async () => {
        console.log('function fired')
        // const groupToInvite = await groupAPI.update(groups[selectedGroupIndex]);
        // console.log(groupToInvite);
        // TODO: send group info to nodemailer api
        // mailAPI.create(groupToInvite);
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
        <TuxFlower invite src="/images/tuxFlower.png"></TuxFlower>
        <FlexBox>
            <Heading3 invite>Invite Students</Heading3>
            <Text>Group: {<i>group name</i>}</Text>
            {/* <div className="email"> */}
            <select
                className="selectGroup"
                value={selectedGroupIndex}
                onChange={(e) => setSelectedGroupIndex(e.target.value)}
              >
                <option value=""></option>
                {groups &&
                  groups.length >= 0 &&
                  groups.map((group, index) => (
                    <option 
                      key={index} 
                      value={index}>
                      {group.name}
                    </option>
                  ))}
              </select>
              <div className="group-email-box">
              {groups &&
                groups.length >= 0 &&
                selectedGroupIndex &&
                groups[selectedGroupIndex].invited.map((user, index) => (
                  <EmailCheckbox
                    className="GroupInviteCheckbox"
                    key={index}
                    user={user}
                    index={index}
                    handleAddInvited={handleAddInvited}
                    handleRemoveInvited={handleRemoveInvited}
                  />
                ))}
                </div>
            {/* </div> */}
            <button className="send-invite" onClick={()=>handleSendInvite()}>Send Invite</button>
            <p className="or">or</p>
            <button className="copy-link">Copy Link<img className="copy" src="/images/icons/copy-icon.png" width="28" height="28" alt="copy icon"></img></button>
        </FlexBox>  
    </ReactModal>
     );
}
export default ActivityInvite;

const Text = styled.p`
  font: var(--pop-reg);
  line-height: 30px;
  font-size: 20px;
  color: ${grey_text};
`;

export const TuxFlower = styled.img`
	width: 140px;
	z-index: 10;
  position: absolute;
  top: 100px;
	border-radius: 50%;
  top: 180px;

`;

const FlexBox = styled.div`
    ${Flex({fd:'column',ai:'center',jc:'center'})};
    background-color: var(--true-white);
    box-shadow: ${common_shadow};
    border-radius: 10px;
    margin-top: 200px;
    width: 515px;
    height: 585px;
    margin-top: 120px;
`;

const Heading3 = styled.h3`
  font: 500 24px 'Poppins', sans-serif;
  line-height: 36px;
  font-size: 36px;
  line-height: 54px;
  color: #666;
  margin: 25px 0 0 ;
`;