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
	background-color: red;
`;

/*---------- 6 Col SubGrid for Activities ----------*/
export const Sub6ColGrid = styled.div`
	grid-column: 1/ span 1;
	grid-row: 2/ span 1;
	display: grid;
	background-color: turquoise;
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
	background-color: yellow;
	height: calc(100vh - 159px);
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

	${props => props.negMargin && css`
		margin-top: -8px;
	`}

	${props => props.signUp && css`
		position: absolute;
		top: 700px;
		/* left: 420px; */
	`}
`;

/*---------- Buttons ----------*/
export const WideBtn = styled.button`
	width: 280px;
	max-height: 50px;
	padding: 15px 0;
	margin: 17px 8px;
	border-radius: 15px;
	font: var(--pop-bold);
	line-height: 27px;

	${props => props.greyed && css`
		background-color: var(--primary-disabled-btn-color);
		color: var(--text-white);
		border: var(--input-border);
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


/*---------- Forms ----------*/

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
	margin: 0;
	width: 343px;
	height: 50px;
	border: var(--input-border);
	border-radius: 5px;
	font-size: 24px;
`;








// Color Blocks
export const ColorBlock = styled.div`
  grid-column: span 1;
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
`;