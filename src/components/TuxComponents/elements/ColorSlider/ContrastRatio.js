import styled from "styled-components";
import { pop_bolder } from '../../utilities/Type'
import { Slider } from './NewColorSlider';
import { Lumosity } from './LumositySlider'
import { HexColorPicker } from "react-colorful";



export const HexColorSlider = styled(HexColorPicker)`

        padding-top: 29px;

.react-colorful__hue-pointer {
   width: 18px;
   height: 18px;
   border-radius: 10px;
 }

.react-colorful__hue{
        border-radius: 13px;
        width: 713px;
        height: 20px;
        border: solid 2px #f6f6f6;
}

.react-colorful__saturation {
   display: none;
 }


`




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