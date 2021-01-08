import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'


export const Placeholder = styled.div`
	/* grid-column: 1/span 3; */
	width: 520px;
	height: 520px;
	background-color: yellow;

`;

/*---------- Main Grid ----------*/
export const Main = styled.main`
	display: grid;
	grid-template-columns: 6fr 300px;
	grid-template-rows: 60px 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	background: linear-gradient(210.65deg, rgba(255, 238, 153, 0.32) 17.3%, rgba(122, 218, 222, 0.32) 87.56%), linear-gradient(19.08deg, rgba(234, 74, 70, 0.32) -33.26%, rgba(234, 74, 70, 0) 67.74%);
	background-blend-mode: normal, multiply;
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
	/* display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: auto; */
	background-color: var(--true-white);
	border: var(--solid-border);
	/* max-width: 1050px; */
`;

/* ----------- SubGrid Section ----------- */
export const Section = styled.section`
	/* padding: 0 60px; */
	margin-left: 50px;
	text-align: left;
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
	background-color: #f1f2eb
	line-height: 24px;
	color: var(--future);
	font: 500 16px 'Poppins', sans-serif;

	${props => props.past && css`
		color: var(--true-black);
		font-weight: 600;
	`}

	${props => props.present && css`
		color: var(--present);
		font-weight: 700;
	`}

	/* ${props => props.future && css`
		color: var(--future);
		font-weight: 500;
	`} */
`;

/*---------- FlexBox Components Generic ----------*/
export const FlexBox = styled.div`
	// margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	${props => props.spaceBetween && css`
		justify-content: space-between;
	`}

	/* ${props => props.alignLeft && css`
		align-items: left !important;
		text-align: left !important;
		justify-content: left;
		width: 100%;
	`} */

	${props => props.spaceAround && css`
		justify-content: space-around;
	`}

	${props => props.column && css`
		flex-direction: column;
	`}

	${props => props.wide && css`
		width: 100%;
	`}

	${props => props.flexMargin && css`
		margin: 40px;
	`}

	${props => props.negMargin && css`
		margin-top: -8px;
	`}

	${props => props.signUp && css`
		/* position: absolute;
		top: 700px;
		left: 420px; */
		margin-top: 730px;
		padding-left: 550px;
	`}

	${props => props.login && css`
		/* position: absolute; */
		/* top: 700px; */
		/* left: 500px; */
		margin-top: 625px;
		padding-left: 160px;
	`}

	${props => props.relative && css`
		position: relative;
	`}

	${props => props.managerDash && css`
		/* background: #FFFFFF; */
		border: 1px solid #DDDDD;
		/* box-sizing: border-box; */
		border-radius: 5px;
		margin: 10px 60px;
		width: 100%;
		padding-bottom: 20px;
`}

	${props => props.bordered && css`
		/* background: #FFFFFF; */
		border: var(--solid-border);
		/* box-sizing: border-box; */
		border-radius: 5px;
		margin: 10px;
	`}

	${props => props.tuxStyled && css`
		background: linear-gradient(210.65deg, rgba(255, 238, 153, 0.32) 17.3%, rgba(122, 218, 222, 0.32) 87.56%), linear-gradient(19.08deg, rgba(234, 74, 70, 0.32) -33.26%, rgba(234, 74, 70, 0) 67.74%);
		background-blend-mode: normal, multiply;
		height: 100vh;
	`}

	${props => props.flexStartJC && css`
		justify-content: flex-start;
		align-items: flex-start;
	`}

	${props => props.hint && css`
		align-items: flex-start;
		margin: 20px 35px 0 10px;
	`}

	${props => props.transparent && css`
		background-color: transparent;
	`}

	${props => props.notFlex && css`
		display: block;
	`}
`;

/*---------- Buttons ----------*/
// [ ] TODO: find out about button active/hover states

export const WideBtn = styled.button`
	border: none;
	width: 280px;
	padding: 12px 0;
	margin: 17px 8px;
	border-radius: 5px;
	font: var(--pop-bold);
	line-height: 27px;
	color: var(--true-white);
	background-color: var(--enable-btn);
	cursor: pointer;

		&:hover {
			background: #236C69;
		}
	
		&:active {
			box-shadow: var(--btn-active-shadow);
		}

	${props => props.login && css`
		margin: 17px 45px;
	  `}
	  
	${props => props.AddGroup && css`
		margin-left: 300px;
  	`}
	
	${props => props.extraWide && css`
		width: 350px;
		//this margin is for reset password
		margin-top: 104px;
		background-color: var(--enable-btn);
	`}
	
	${props => props.medium && css`
		width: 224px;
		height: 50px;
		font: var(--pop-thick);
		font-size: 14px;
		margin: 20 auto;
		padding: 0;
		border: 1px solid #3C8582;
	`}
	
	${props => props.disabled && css`
		background-color: var(--primary-disabled-btn-color);
		color: var(--text-white);
		border: var(--input-border);
	
		&:hover {
			background-color: var(--primary-disabled-btn-color);
		}
	`}
	

	/* ${props => props.enable && css`
		background-color: var(--enable-btn);
	`} */

	/* ${props => props.teal && css`
		background-color: #3C8582;
	`} */

	/* ${props => props.preview && css`
		width: 245px !important;
		height: 50px;
	`} */
`;

export const NakedBtn = styled.button`
	border: none;
	background-color: transparent;
	align-items: center;
	text-align: center;

	${props => props.preview && css`
	font-size: 12px;
	line-height: 18px;
	margin-right: 60px;
	`}
`;

/*---------- Progress Bar ----------*/
export const ProgressContainer = styled.div`
	height: 22px;
	width: 268px;
	background-color: #666666;
	background-image: linear-gradient(45deg, 
	transparent 10%, 
	rgba(255, 255, 255, .2) 10%,
	transparent 20%, 
	rgba(255, 255, 255, .2) 20%,
	transparent 30%, 
	rgba(255, 255, 255, .2) 30%, 
	transparent 40%, 
	rgba(255, 255, 255, .2) 40%, 
	transparent 50%, 
	rgba(255, 255, 255, .2) 50%, 
	transparent 60%, 
	rgba(255, 255, 255, .2) 60%, 
	transparent 70%, 
	rgba(255, 255, 255, .2) 70%, 
	transparent 80%, 
	rgba(255, 255, 255, .2) 80%, 
	transparent 90%, 
	rgba(255, 255, 255, .2) 90%, 
	transparent);
	border-radius: 5px;
	display: flex;
	/* align-items: center; */
`;
export const ProgressFiller = styled.div`
	z-index: 1;
	height: 100%;
	border-radius: 5px 0 0 5px;
	background-color: var(--tux-blue);
`;
export const ProgressLabel = styled.p`
	padding: 2px;
	font: 400 12px 'Poppins', sans-serif;
	color: #a9aaa5;
`;


/*---------- Links ----------*/
export const LinkTo = styled(Link)`
	color: var(--link-text);
`;

/*---------- Text ----------*/
export const Normal = styled.p`
  font: var(--pop-reg);
  line-height: 20px;

  ${props => props.sixteen && css`
  font-size: 16px;
  line-height: 24px;
`}

  ${props => props.setup && css`
	margin-bottom: 50px;
  `}

  ${props => props.twenty && css`
	font-size: 20px;
	line-height: 24px;
  `}

  ${props => props.twentyThirty && css`
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
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

  ${props => props.red && css`
  	color: var(--tux-red);
  `}

   ${props => props.margin && css`
	margin-left: 10px;
	text-align: left;
  `}
  
  /* ${props => props.alignRight && css`
	text-align: center;
  `} */

  ${props => props.center && css`
	text-align: center;
  `}

  ${props => props.center && css`
  	text-align: center;
  `}

  ${props => props.marginLeft && css`
  margin-left: 45px;
  `}

  ${props => props.margin50 && css`
    	margin-top: 50px;
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

	${props => props.intro && css`
		font-size: 80px;
		font-weight: 700;
		/* line-height: 24; */
		color: #366062;
		text-align: left;
		margin: 0;
		padding: 0;
	`}
`;

export const Heading3 = styled.h3`
	font: 500 24px 'Poppins', sans-serif;
	line-height: 36px;

	${props => props.greyed && css`
		color: var(--future);
	`}
	${props => props.floatRight && css`
		margin-left: auto;
	`}

	${props => props.bolder && css`
		font-weight: 600;
	`}

	${props => props.alignLeft && css`
		align-self: start;
		margin-left: 30px;
	`}

	${props => props.blue && css`
	color: #1B98A0;
	  `}
	  
	/* ${props => props.invite & css`
		 font-size: 36px; 
		line-height: 54px;
		color: var(--text-grey) !important;
	`} */

`;

/*--------------- FORMS ---------------*/
// from Manage Group Members
export const AddStudents = styled.label`
	font: var(--table);
	font-weight: 600;
	line-height: 24px;
	color: rgba(51,51,51,.75);
	margin-top: 50px;
	`;

export const TextArea = styled.textarea`
	width: 580px;
	height: 100px;
	border-radius: 5px;
	text-align: left;
	padding: 10px;
`;


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

/*---------- Tables ----------*/
export const Table = styled.table`
	width: 100%;

`;

export const TableHead = styled.thead`
	
`;

export const TableRow = styled.tr`
	border-bottom: 1px solid #cccccc;
`;

export const TableHeader = styled.th`
	font: var(--table);
	font-weight: 600;
	line-height: 24px;
	color: rgba(51,51,51,.75);
	height: 50px;
	text-align: left;
	
	${props => props.left && css`
		padding-left: 20px;
		
	`}
`;

export const TableBody = styled.tbody`

`;

export const TableData = styled.td`
	font: var(--table);
	color: rgba(51,51,51,.75);
	font-weight: 400;
	height: 50px;
	text-align: left;

	${props => props.left && css`
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
//   grid-column: span 1; 
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
		background-color: var(--tux-blue) !important;
		height: 10px !important;
		width: 100% !important;
		margin: 0;
		padding: 0;
	`}

	${props => props.SubGridGrey && css`
	background-color: #CCCCCC!important;
	height: 1px !important;
	width: 95% !important;
	padding: 0;
`}
`;	

