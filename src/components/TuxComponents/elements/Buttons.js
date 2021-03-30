import styled, { css } from 'styled-components';
import { disable_btn, enable_btn, enable_hover } from '../utilities/Colors';
import { btn_active_shadow, input_border, pop_thick, pop_bolder } from '../utilities';



// This was the "WideBtn", 280px
export const Button280 = styled.button`
    border: none;
    border-radius: 5px;
    width: 280px;
    padding: 12px 0;
    margin: 17px 8px;
    font: ${pop_bolder};
    background: ${enable_btn};
    color: white;
    cursor: pointer;

        &:hover {
            background: ${enable_hover};
        }
        &:active {
            box-shadow: ${btn_active_shadow};
        }

    /* Disabled */
    ${props => props.disabled && css`
		background-color: ${disable_btn};
		border: ${input_border};
	
		&:hover {
			background-color: ${disable_btn};
		}
    `}    

    /* Extra Wide 350px*/
    ${props => props.wide350 && css`
        width: 350px;
    `}

    ${props => props.login && css`
        width: 343px;
    `}

    ${props => props.medium && css`
        width: 224px;
        font: var(--pop-thick);
        font-size: 14px;
        margin: 
    `}
`;

export const Button350 = styled(Button280)`
    width: 350px;

    ${props => props.auto && css`
        margin-left: auto;
    `}
`;

export const LoginBtn = styled(Button280)`
    width: 343px;
`;

export const MedBtn = styled(Button280)`
    width: 224px;
    font: ${pop_thick};
    font-size: 14px;
`;

// Disabled button extention
export const DisabledBtn = styled(Button280)`
    background-color: ${disable_btn};
		border: ${input_border};
	
		&:hover {
			background-color: ${disable_btn};
		}
`;

