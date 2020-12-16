import styled from 'styled-components'

export const ActivityCard = styled.div`
border: solid 2px black;
background-color: white;
align-items: center;
width: 100%;
height: 50px;
margin: 10px auto;
display: flex;
justify-content: space-around;
`;

export const SideBar = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SideBarItem = styled.div`
  text-align: center;
  height: 100px;
  color: white;
  display: flex;
  align-items: center;
  margin: 0px auto;
  background-color: black;
`;

export const SideBarLink = styled.a`
  ${SideBarItem}:hover {
    fill: red;
  }
`

export const ActivitiesContainer = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

export const Header = styled.div`
  height: 75px;
  background-color: black;
  align-items: center;
  text-align: center;
  color: white;
`;

export const Container = styled.div`
display: grid;
grid-template-columns: 2fr 10fr;
`;
