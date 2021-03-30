import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FlexCenter, Flex } from './utilities';

/*---------- Main Grid ----------*/
export const Main = styled.main`
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
export const InfoBar = styled.section`
  grid-column: 1 / span 2;
  grid-row: 1 / span 1;
  justify-self: stretch;
  background-color: var(--true-white);
  ${Flex({ai:'center'})};
  padding: 0 40px;
  max-width: 1440px;
`;

/*---------- 6 Col SubGrid for Activities ----------*/
export const Sub6ColGrid = styled.article`
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
  background-color: var(--true-white);
  border: var(--solid-border);
  width: 1042px;
`;

/* ----------- SubGrid Section ----------- */
export const Section = styled.section`
  margin-left: 50px;
  text-align: left;
`;

/*---------- 300px Sidebar Parent Grid ----------*/
export const SideBarParent = styled.article`
  height: 90vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr 100px;
  border-radius: 5px 5px 0 0;
`;

/*---------- The SideBar Itself ----------*/
export const SideBar = styled.article`
  grid-row: 1 / span 1;
  background-color: var(--true-white);
  height: calc(100vh - 159px);
  ${Flex({ai:'center',fd:'column'})};
  border: var(--solid-border);
  border-radius: 5px 5px 0 0;
`;

export const SideBarTextBox = styled.section`
  height: 100%;
  width: 100%;
  padding: 20px;
`;

export const SideBarText = styled.button`
  background: transparent;
  font: 500 16px 'Poppins', sans-serif;
  line-height: 24px;
  text-align: left;
  color: var(--true-black);
  /* padding: 0 20px; */
  border: none;
  border-bottom: var(--solid-border);
  width: 100%;
  height: 50px;

  ${(props) =>
    props.past &&
    css`
      color: var(--future);
      font-weight: 600;
    `}

  ${(props) =>
    props.present &&
    css`
      color: var(--present);
      font-weight: 700;
    `}
`;

/*---------- FlexBox Components Generic ----------*/
export const FlexBox = styled.div`
  ${FlexCenter};

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.spaceAround &&
    css`
      justify-content: space-around;
    `}

	${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}

	${(props) =>
    props.wide &&
    css`
      width: 100%;
    `}

	${(props) =>
    props.flexMargin &&
    css`
      margin: 40px;
    `}

	${(props) =>
    props.negMargin &&
    css`
      margin-top: -8px;
    `}

	${(props) =>
    props.signUp &&
    css`
      margin-top: 730px;
      padding-left: 550px;
    `}

	${(props) =>
    props.login &&
    css`
      margin-top: 625px;
      padding-left: 160px;
    `}

	${(props) =>
    props.relative &&
    css`
      position: relative;
    `}

	${(props) =>
    props.managerDash &&
    css`
      border: 1px solid #DDDDD;
      border-radius: 5px;
      margin: 10px 60px 10px 60px;
      width: 100%;
      padding-bottom: 20px;
    `}

	${(props) =>
    props.bordered &&
    css`
      border: var(--solid-border);
      border-radius: 5px;
      margin: 10px 10px 10px 10px;
    `}

	${(props) =>
    props.tuxStyled &&
    css`
      background: linear-gradient(
          210.65deg,
          rgba(255, 238, 153, 0.32) 17.3%,
          rgba(122, 218, 222, 0.32) 87.56%
        ),
        linear-gradient(
          19.08deg,
          rgba(234, 74, 70, 0.32) -33.26%,
          rgba(234, 74, 70, 0) 67.74%
        );
      background-blend-mode: normal, multiply;
      height: 100vh;
    `}

  ${(props) =>
    props.tight &&
    css`
      align-content: center;
    `}

	${(props) =>
    props.flexStartJC &&
    css`
      justify-content: flex-start;
      align-items: flex-start;
    `}

	${(props) =>
    props.hint &&
    css`
      align-items: flex-start;
      margin: 20px 35px 0 10px;
    `}

	${(props) =>
    props.transparent &&
    css`
      background-color: transparent;
    `}

	${(props) =>
    props.notFlex &&
    css`
      display: block;
    `}

	${(props) =>
    props.problemStatement &&
    css`
      justify-content: flex-start;
      margin: 30px 60px;
    `}

  ${(props) =>
    props.overview &&
    css`
      margin: 270px 250px;
      background: white;
      width: 1010px;
      border-radius: 5px;
    `}

  ${(props) =>
    props.overview2 &&
    css`
      padding: 50px;
      `}
`;

/*---------- Buttons ----------*/

export const WideBtn = styled.button`
  border: none;
  width: 280px;
  padding: 12px 0;
  margin: 17px 8px;
  border-radius: 5px;
  font: var(--pop-bolder);
  line-height: 27px;
  color: var(--true-white);
  background-color: var(--enable-btn);
  cursor: pointer;

    &:hover {
    background: #236c69;
    }

    &:active {
    box-shadow: var(--btn-active-shadow);
    }

  /*	${(props) =>
    props.login &&
    css`
      margin: 17px 45px;
    `} */

  ${(props) =>
    props.extraWide &&
    css`
      width: 350px;
      //this margin is for reset password
      margin-top: 104px;
      background-color: var(--enable-btn);
    `}

  ${(props) =>
    props.medium &&
    css`
      width: 224px;
      height: 50px;
      font: var(--pop-thick);
      font-size: 14px;
      margin: 20 auto;
      padding: 0;
      border: 1px solid #3c8582;
    `}
	
	${(props) =>
    props.disabled &&
    css`
      background-color: var(--primary-disabled-btn-color);
      color: var(--text-white);
      border: var(--input-border);

      &:hover {
        background-color: var(--primary-disabled-btn-color);
      }
    `}

	${(props) =>
    props.preview &&
    css`
      margin-right: 20px;
      max-width: 250px;
    `}

	${(props) =>
    props.AddGroup &&
    css`
      margin-left: 300px;
    `}
`;

export const NakedBtn = styled.button`
  border: none;
  background-color: transparent;
  align-items: center;
  text-align: center;

  ${(props) =>
    props.preview &&
    css`
      font-size: 12px;
      line-height: 18px;
      margin-right: 60px;
    `}
  
  ${props => props.create && css`
    color: var(--link-text);
    font: var(--pop-bolder);

  `}
`;


/*---------- Links ----------*/
export const LinkTo = styled(Link)`
  color: var(--link-text);

  ${(props) => props.noDecor && css `
    list-style: none;

  `}
`;

/*---------- Text ----------*/
export const Normal = styled.p`
  font: var(--pop-reg);
  line-height: 20px;

  ${(props) =>
    props.lineTwentySeven &&
    css`
      line-height: 27px;
    `}

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}

  ${(props) =>
    props.sixteen &&
    css`
      font-size: 16px;
      line-height: 24px;
    `}

  ${(props) =>
    props.setup &&
    css`
      margin-bottom: 50px;
    `}

  ${(props) =>
    props.twenty &&
    css`
      font-size: 20px;
      line-height: 24px;
    `}

  ${(props) =>
    props.twentyThirty &&
    css`
      font-size: 20px;
      line-height: 30px;
      font-weight: 600;
    `}

  ${(props) =>
    props.semiBold &&
    css`
      font-weight: 500;
      margin: 0;
    `}

  ${(props) =>
    props.twenty4 &&
    css`
      font-size: 24px;
      line-height: 36px;
    `}
  
  ${(props) =>
    props.greyed &&
    css`
      color: var(--future);
    `}

  ${(props) =>
    props.boldColor &&
    css`
      color: var(--extraLg-text);
    `}

  ${(props) =>
    props.red &&
    css`
      color: var(--tux-red);
    `}

   ${(props) =>
    props.margin &&
    css`
      margin-left: 10px;
      text-align: left;
    `}

  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}

  ${(props) =>
    props.marginLeft &&
    css`
      margin-left: 45px;
    `}

  ${(props) =>
    props.margin50 &&
    css`
      margin-top: 50px;
    `}
		
		${(props) =>
    props.invite &&
    css`
      font-size: 20px;
      line-height: 30px;
      color: var(--tux-grey);
      text-align: left;
      margin: 0;
    `}

    ${(props) =>
      props.overview &&
      css`
        margin: 0;
      `}
`;

export const Heading1 = styled.h1`
  font-size: 36px;
  line-height: 54px;
  font-weight: 500;

  ${(props) =>
    props.margin50 &&
    css`
      margin-top: 50px;
    `}

    ${(props) =>
    props.darkGrey &&
    css`
      color: #323239;
    `}

  ${(props) =>
    props.bolder &&
    css`
      font-weight: 600;
    `}

	${(props) =>
    props.intro &&
    css`
      font-size: 80px;
      font-weight: 700;
      /* line-height: 24; */
      color: #366062;
      text-align: left;
      margin: 0;
      padding: 0;
    `}

  ${(props) =>
    props.overview &&
    css`
      font-size: 35px;
      line-height: 24px;
      color: var(--overview-orange);
      font-weight: bold;
      `}
`;

export const Heading2 = styled.h2`
  font: 700 48px 'Poppins', sans-serif;
  line-height: 24px;
  color: var(--extraLg-text);
  text-align: center;
  margin-top: 75px;
`;

export const Heading3 = styled.h3`
  font: 500 24px 'Poppins', sans-serif;
  line-height: 36px;

  ${(props) =>
    props.greyed &&
    css`
      color: var(--future);
    `}
  ${(props) =>
    props.invite &&
    css`
      font-size: 36px;
      line-height: 54px;
      color: #666;
      margin: 25px 0 0 ;
    `}
	${(props) =>
    props.progress &&
    css`
      margin-left: auto;
      font: var(--pop-semi-bold);
      font-size: 16px;
      line-height: 24px;
    `}

	${(props) =>
    props.bolder &&
    css`
      font-weight: 600;
    `}

	${(props) =>
    props.alignLeft &&
    css`
      align-self: start;
      margin-left: 30px;
    `}

	${(props) =>
    props.blue &&
    css`
      color: var(--present);
    `}
`;

export const Heading6 = styled.h6`
  font: var(--table);
  font-weight: 700;
  line-height: 24px;
`;

export const ListLinks = styled.li`
  font: var(--table);
  line-height: 24px;
  font-weight: 400;
  color: var(--present);
`;


/*----- End of Text -----*/

/*--------------- FORMS ---------------*/
// from Manage Group Members
export const AddStudents = styled.label`
  font: var(--table);
  font-weight: 600;
  line-height: 24px;
  color: rgba(51, 51, 51, 0.75);
  margin-top: 50px;
`;
// Alexandria pulled this from FromComponents.js
export const TextArea = styled.textarea`
  width: 580px;
  height: 100px;
  border-radius: 5px;
  text-align: left;
  padding: 10px;
`;


/*---------- Checkbox ----------*/
export const checkedBox = css``;

export const uncheckedBox = css``;

export const Checkbox = styled.div`
  border: var(--input-border);
  width: 20px;
  height: 20px;
  border-radius: 5px;
  margin-right: 5px;

  ${(props) => (props.checked ? checkedBox : uncheckedBox)};
`;

/*---------- Inputs ----------*/
export const SmallInput = styled.input`
  margin: 0 10px;
  width: 343px;
  height: 50px;
  border: var(--input-border);
  border-radius: 5px;
  font-size: 24px;

  ${(props) =>
    props.marginTop &&
    css`
      margin: 98px 10px 88px 0;
    `}
`;

/*---------- Tables ----------*/
export const Table = styled.table`
  width: 100%;
`;

export const TableHead = styled.thead``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #cccccc;
`;

export const TableHeader = styled.th`
  font: var(--table);
  font-weight: 600;
  line-height: 24px;
  color: rgba(51, 51, 51, 0.75);
  height: 50px;
  text-align: left;

  ${(props) =>
    props.left &&
    css`
      padding-left: 20px;
    `}
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  font: var(--table);
  color: rgba(51, 51, 51, 0.75);
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
export const Icon25 = styled.img`
  width: 25px;
  height: 25px;
`;

// Color Blocks
export const ColorBlock = styled.div`
  height: 5px;

  ${(props) =>
    props.tuxBlue &&
    css`
      grid-row: 1 / span 1;
      grid-column: 1 / span 1;
      background-color: var(--tux-blue);
    `}

  ${(props) =>
    props.tuxYellow &&
    css`
      grid-row: 1 / span 1;
      grid-column: 2 / span 1;
      background-color: var(--tux-yellow);
    `}
	
	${(props) =>
    props.tuxWhite &&
    css`
      grid-row: 1 / span 1;
      grid-column: 3 / span 1;
      background-color: var(--tux-white);
    `}
	
	${(props) =>
    props.tuxGrey &&
    css`
      grid-row: 1 / span 1;
      grid-column: 4 / span 1;
      background-color: var(--tux-grey);
    `}
	
	${(props) =>
    props.tuxBlack &&
    css`
      grid-row: 1 / span 1;
      grid-column: 5 / span 1;
      background-color: var(--tux-black);
    `}
	
	${(props) =>
    props.tuxRed &&
    css`
      grid-row: 1 / span 1;
      grid-column: 6 / span 1;
      background-color: var(--tux-red);
    `}

	${(props) =>
    props.SideBarYellow &&
    css`
      background-color: var(--tux-yellow);
      height: 10px;
      width: 100%;
      border-radius: 5px 5px 0 0;
    `}

	${(props) =>
    props.SubGridBlue &&
    css`
      background-color: var(--tux-blue);
      height: 10px;
      width: 100%;

      /* margin: 0;
		padding: 0; */
    `}

	${(props) =>
    props.SubGridGrey &&
    css`
      background-color: #cccccc;
      height: 1px !important;
      width: 95% !important;
      padding: 0;
    `}
`;
