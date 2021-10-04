import React from 'react';
import styled, { css } from 'styled-components';
import {not_started, disable_btn} from '../TuxComponents/utilities';

const GroupUserTable = ({groups, selectedGroupIndex}) => {
  const selectedGroup = groups[selectedGroupIndex]
  const {invited} = selectedGroup
  return ( <Table>
    <thead>
    <TableRow> 
        <TableHeader left colspan="1">Student Name</TableHeader>
        <TableHeader left colspan="1">Email</TableHeader>
        <TableHeader colspan="1">Delete</TableHeader>
    </TableRow>
    </thead>
    <tbody>
      {invited.length > 0 ? (
        invited.map((user, index) => (
          <TableRow>
            <TableData>{user.name && user.name.length > 0 ? user.name : '--- not sign up ---'}</TableData>
            <TableData>{user.email}</TableData>
            <TableData left><Icon25 src="/images/icons/Trashcan.png"></Icon25></TableData>
          </TableRow>
        ))
      ) : (
        <>No users yet</>
      )}
    </tbody>
  </Table> );
}
 
export default GroupUserTable;


/*---------- Tables ----------*/
const Table = styled.table`
  width: 100%;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid ${disable_btn};
`;

const TableHeader = styled.th`
  font: var(--table);
  font-weight: 600;
  line-height: 24px;
  color: ${not_started};
  height: 50px;
  text-align: left;

  ${(props) =>
    props.left &&
    css`
      padding-left: 20px;
    `}
`;

const TableData = styled.td`
  font: var(--table);
  color: ${not_started};
  font-weight: 400;
  height: 50px;
  text-align: left;

  ${(props) =>
    props.left &&
    css`
      padding-left: 15px;
    `}
`;


/*---------- Images ----------*/
const Icon25 = styled.img`
  width: 25px;
  height: 25px;
`;