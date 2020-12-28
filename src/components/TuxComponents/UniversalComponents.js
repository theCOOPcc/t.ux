import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'


/*---------- Main Grid ----------*/
export const Main = styled.main`
	margin: 0;
	height: 100vh;
	display: grid;
	grid-template-columns: 6fr 300px;
	grid-template-rows: 60px 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	background: linear-gradient(210.65deg, rgba(255, 238, 153, 0.32) 17.3%, rgba(122, 218, 222, 0.32) 87.56%), linear-gradient(19.08deg, rgba(234, 74, 70, 0.32) -33.26%, rgba(234, 74, 70, 0) 67.74%);
	background-blend-mode: normal, multiply;
	/* opacity: 0.3; */
	padding: 20px 39px 15px;
	position: relative;
	
`;


/*---------- Top Info Bar Grid ----------*/
export const InfoBar = styled.div`
	grid-column: 1/span 2;
	grid-row: 1/span 1;
	justify-self: stretch;
	background-color: var(--true-white);
	display: flex;
	/* justify-content: center; */
	align-items: center;
	padding-left: 50px;
`;

/*---------- 6 Col SubGrid for Activities ----------*/
export const Sub6ColGrid = styled.div`
	grid-column: 1/ span 1;
	grid-row: 2/ span 1;
	display: grid;
	background-color: var(--true-white);
	border: var(--solid-border);
	/* padding: 0 5%; */
`;

/*---------- 300px Sidebar Parent Grid ----------*/
export const SideBarParent = styled.div`
	height: 90vh;
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: 1fr 100px;
`;

/*---------- The SideBar Itself ----------*/
export const SideBar = styled.div`
	grid-row: 1/span 1;
	background-color: var(--true-white);
	height: calc(100vh - 159px);
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	border: var(--solid-border);
`;

export const SideBarText = styled.button`
	border: none;
	border-bottom: var(--solid-border);
	width: 238px;
	height: 50px;
	background-color: var(--text-white);
	font-size: 16px;
	line-height: 24px;
	font-family: Poppins;

	${props => props.past && css`
		color: var(--true-black);
		font-weight: 600;
	`}

	${props => props.present && css`
		color: var(--present);
		font-weight: 700;
	`}

	${props => props.future && css`
		color: var(--future);
		font-weight: 500;
	`}
`;

/*---------- FlexBox Components Generic ----------*/
export const FlexBox = styled.div`
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	${props => props.spaceBetween && css`
		justify-content: space-between;
	`}

	${props => props.column && css`
		flex-direction: column;
	`}

	${props => props.flexMargin && css`
		margin: 40px;
	`}

	${props => props.negMargin && css`
		margin-top: -8px;
	`}

	${props => props.signUp && css`
		position: absolute;
		top: 700px;
		/* left: 420px; */
	`}

	${props => props.login && css`
		position: absolute;
		top: 820px;
		/* left: 420px; */
	`}
`;

/*---------- Buttons ----------*/
// [ ] TODO: find out about button active/hover states

export const WideBtn = styled.button`
	width: 280px;
	padding: 12px 0;
	margin: 17px 8px;
	border-radius: 5px;
	font: var(--pop-bold);
	line-height: 27px;
	color: var(--true-white);

	${props => props.extraWide && css`
		width: 350px;
		//this margin is for reset password
		margin-top: 104px;
		background-color: var(--enable-btn);
	`}

	${props => props.disabled && css`
		background-color: var(--primary-disabled-btn-color);
		color: var(--text-white);
		border: var(--input-border);
	`}

	${props => props.enable && css`
		background-color: var(--enable-btn);
	`}
`;



/*---------- Progress Bar ----------*/
export const ProgressBarCont = styled.div`
	grid-column: span 2;
	color: var(--tux-black);
`;

export const ProgressBar = styled.progress`
	background-color: rebeccapurple;
`;


/*---------- Links ----------*/
export const LinkTo = styled(Link)`
	color: var(--link-text);
`;

/*---------- Text ----------*/
export const Normal = styled.p`
  font: var(--pop-reg);
  /* line-height: 20px; */

  ${props => props.eighteen && css`
	font-size: 18px;
	line-height: 27px;
  `}

  ${props => props.twenty && css`
	font-size: 20px;
	line-height: 24px;
  `}

  ${props => props.semiBold && css`
    font-weight: 500;
    margin: 0;
  `}

  ${props => props.twenty4 && css`
    font-size: 24px;
    line-height: 36px;
  `}
	
  
  ${props => props.greyed && css`
    color: var(--future);
  `}

  ${props => props.boldColor && css`
    color: var(--extraLg-text);
  `}

  ${props => props.alignLeft && css`
  align-self: start;
  margin-left: 13px;
  `}
  
  ${props => props.alignRight && css`
  align-self: end;
  /* margin-left: 13px; */
  `}
`;

export const Heading1 = styled.h1`
	font-size: 36px;
	line-height: 54px;
	font-weight: 500;

	${props => props.margin50 && css`
    	margin-top: 50px;
	  `}

	${props => props.bolder && css`
    	font-weight: 600;
	`}
`;

export const Heading3 = styled.h3`
	font: 500 24px 'Poppins', sans-serif;
	line-height: 36px;
	color: var(--future);
`;

/*--------------- FORMS ---------------*/

/*---------- Checkbox ----------*/
export const checkedBox = css`

`;

export const uncheckedBox = css`

`;

export const Checkbox = styled.div`
	border: var(--input-border);
	width: 20px;
	height: 20px;
	border-radius: 5px;
	margin-right: 5px;

	${ props => props.checked ? checkedBox : uncheckedBox };

`;

/*---------- Inputs ----------*/
export const SmallInput = styled.input`
	margin: 0 10px;
	width: 343px;
	height: 50px;
	border: var(--input-border);
	border-radius: 5px;
	font-size: 24px;

	${props => props.marginTop && css`
		margin: 98px 10px 88px 0;
	`}
`;








// Color Blocks
export const ColorBlock = styled.div`
  /* grid-column: span 1; */
  height: 5px;
  
  ${props => props.tuxBlue && css`
    	grid-row: 1/span 1;
    	grid-column: 1/span 1;
    	background-color: var(--tux-blue);
  `}
  
  	${props => props.tuxYellow && css`
  		grid-row: 1/span 1;
    	grid-column: 2/span 1;
    	background-color: var(--tux-yellow);
	`}
	
	${props => props.tuxWhite && css`
    	grid-row: 1/span 1;
    	grid-column: 3/span 1;
    	background-color: var(--tux-white);
	`}
	
	${props => props.tuxGrey && css`
    	grid-row: 1/span 1;
    	grid-column: 4/span 1;
    	background-color: var(--tux-grey);
	`}
	
	${props => props.tuxBlack && css`
    	grid-row: 1/span 1;
    	grid-column: 5/span 1;
    	background-color: var(--tux-black);
	`}
	
	${props => props.tuxRed && css`
    	grid-row: 1/span 1;
    	grid-column: 6/span 1;
  		background-color: var(--tux-red);
	`}

	${props => props.SideBarYellow && css`
		background-color: var(--tux-yellow);
		height: 10px;
		width: 100%;
	`}

	${props => props.SubGridBlue && css`
		background-color: var(--tux-blue);
		height: 10px;
		width: 100%;
	`}
`;	

