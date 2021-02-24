import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { Flex } from './utilities';

const Main = () => {
    return ( 
        <MainGrid>
            <InfoBar></InfoBar>
        </MainGrid>
     );
}
 
export default Main;

/*---------- Main Grid ----------*/
const MainGrid = styled.main`
  display: grid;
  grid-template-columns: 6fr 300px;
  grid-template-rows: 60px 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  background: #e9e9e9;
  padding: 20px 39px 15px;
  margin: 0 auto;
  /* position: relative; */
  max-width: 1440px;
`;

/*---------- Top Info Bar Grid ----------*/
const InfoBar = styled.section`
  grid-column: 1 / span 2;
  grid-row: 1 / span 1;
  justify-self: stretch;
  background-color: var(--true-white);
  ${Flex({ai:'center'})};
  padding: 0 40px;
  max-width: 1440px;
`;

/*---------- 6 Col SubGrid for Activities ----------*/
const Sub6ColGrid = styled.article`
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
  background-color: var(--true-white);
  border: var(--solid-border);
  width: 1042px;
`;

/* ----------- SubGrid Section ----------- */
const Section = styled.section`
  margin-left: 50px;
  text-align: left;
`;

/*---------- 300px Sidebar Parent Grid ----------*/
const SideBarParent = styled.article`
  height: 90vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr 100px;
  border-radius: 5px 5px 0 0;
`;

/*---------- The SideBar Itself ----------*/
const SideBar = styled.article`
  grid-row: 1 / span 1;
  background-color: var(--true-white);
  height: calc(100vh - 159px);
  ${Flex({ai:'center',fd:'column'})};
  border: var(--solid-border);
  border-radius: 5px 5px 0 0;
`;
