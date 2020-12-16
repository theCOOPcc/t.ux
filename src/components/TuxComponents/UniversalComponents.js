import styled, { css } from 'styled-components'

export const Main = styled.main`
	height: 100vh;
	display: grid;
	grid-template-columns: 6fr 300px;
	grid-template-rows: 60px 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	background-color: slateblue;
	padding: 20px 39px 15px;
`;

export const InfoGrid = styled.div`
	grid-column: 1/span 2;
	grid-row: 1/span 1;
	justify-self: stretch;
	background-color: red;
`;

export const Sub6ColGrid = styled.div`
	grid-column: 1/ span 1;
	grid-row: 2/ span 1;
	display: grid;
	background-color: turquoise;
`;

export const SideBarParent = styled.div`
	height: 90vh;
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: 1fr 100px;
`;

export const SideBar = styled.div`
	grid-row: 1/span 1;
	background-color: yellow;
	height: calc(100vh - 159px);
`;

// Buttons
export const WideBtn = styled.button`
	width: 280px;
	max-height: 50px;
	padding: 15px 0;
	margin: 17px 8px;
	border-radius: 15px;
`;


// Color Blocks
export const ColorBlock = styled.div`
  grid-auto-columns: 2fr;
  width: 2fr;
  height: 5px;

  ${props => props.tuxBlue && css`
  	background-color: var(--tux-blue);
  `}

  ${props => props.tuxYellow && css`
  	background-color: var(--tux-yellow);
  `}

  ${props => props.tuxWhite && css`
  	background-color: var(--tux-white);
  `}

  ${props => props.tuxGrey && css`
  	background-color: var(--tux-grey);
  `}

  ${props => props.tuxBlack && css`
  	background-color: var(--tux-black);
  `}

  ${props => props.tuxRed && css`
  	background-color: var(--tux-red);
  `}
`;

