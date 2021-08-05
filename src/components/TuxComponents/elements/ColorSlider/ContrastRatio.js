import styled from "styled-components";
import { pop_bolder } from '../../utilities/Type'
import { Slider } from './NewColorSlider';
import { Lumosity } from './LumositySlider'

export const ContrastRatioActivity = styled.div`
        // The bottom layer where the rest of the components will go

        padding: 15px 30px;
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        height: 400px;
        width: 765px;
        
`;


export const ContrastRatioBox = styled.div`
        // Here goes the contrast ratio on its own
       
        width: 128px;
        height: 67px;
        font: ${pop_bolder};
        border: 1px solid #000000;
        border-radius: 3px;
        color: white;

`;


export const ContrastRatioResult = styled.div`
        // Here goes the contrast result
       
        width: 130px;
        height: 33px;
        margin-top:5px;
        font: ${pop_bolder};
        border-radius: 3px;
        padding-top: 10px;
        text-align: center;
        background-color: white;
        border: 1px solid #000000; 

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