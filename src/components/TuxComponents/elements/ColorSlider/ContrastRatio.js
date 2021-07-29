import styled from "styled-components";
import { pop_bolder } from '../../utilities/Type'
import { Slider } from './NewColorSlider';
import { Lumosity } from './LumositySlider'

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


//Touching up details about the color slider
export const ColorSlider = styled(Slider)`

        background-color: transparent;
        padding-top: 20px;

`

//Touching up details about the luminosity slider
export const LumSlider = styled(Lumosity)`

        background-color: transparent;
        padding-top: 20px;

`



// export const StandardRow = styled.div`
//         // A foundational row to build the activity on
        
//         background-color: #

// `;     