import styled from "styled-components";
import { pop_bolder } from '../../utilities/Type'

export const ContrastRatioActivity = styled.div`
        // The bottom layer where the rest of the components will go

        padding: 15px 30px;
        display: flex;
        flex-direction: column;
        height: 400px;
        width: 765px;
        background-color: purple; // the hex color from input goes here
        
`;


export const ContrastRatioBox = styled.div`
        // Here goes the contrast ratio on its own
       
        width: 103px;
        height: 67px;
        background-color: red; // the result of the ratio test will determine the color

`;        

// export const StandardRow = styled.div`
//         // A foundational row to build the activity on
        
//         background-color: #

// `;     