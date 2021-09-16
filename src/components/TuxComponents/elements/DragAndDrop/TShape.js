import styled from 'styled-components'
import { Poppins } from '../../utilities/Type'
import { grey_text, tux_blue } from '../../utilities/Colors'

export const DnDActivity = styled.div`
    position:relative;
    width: 38em;
    height: 26em;
    background-color: #FAFCFE;
    font-family: ${Poppins};
    // padding: 21px 60px 40px 60px      <---in case padding needs to be added
`;

export const DnDBoxOne = styled.div`
    position:absolute;
    bottom: 0;
    left: 0;
    width: 47.6190476%;
    height: 60.5%;
    border: 2px solid ${tux_blue};
    border-radius: 5px;
    background-color: rgba(120, 214, 218, 0.1);

    &::before{
        position: relative;
        top:-11%;
        content: "${(props) => props.titleLeft}";
        white-space: nowrap;
        font-size: 20px;
    }

`;

export const DnDBoxTwo = styled.div`
    position:absolute;
    bottom: 0;
    right: 0;
    width: 47.6190476%;
    height: 60.5%;
    border: 2px solid ${tux_blue};
    border-radius: 5px;
    background-color: rgba(120, 214, 218, 0.1);

    &::before{
        position:relative;
        top:-11%;
        content: "${(props) => props.titleRight}";
        white-space: nowrap;
        font-family: ${Poppins};
        font-size: 20px;
    }
    
`;

export const DnDItemBox = styled.div`
    position:absolute;
    top: 5.25%;
    left: 27.4603175%;
    width: 45.2380952%;
    height: 13.25%;
    background-color: rgba(136, 136, 136, 0.1);
    border: 2px solid ${grey_text};

    &::before{
    content: "Answer Tile Will Populate Here";
    font-size: 16px;
    color: ${grey_text};
    text-align: center;
    position: relative;
    top: 1.2em;
    left: 1.5em;
    }
`;

export const DnDImg = styled.img`
    height: 8%;
    width: 8%;
    position: relative;
    top: 30%;
    left: -30%;
`;

export const DnDPlaceholdText = styled.div`
    &::before{
    content: "Drag and Drop Term Here";
    position: absolute;
    top: 40%;
    left: 10%;
    width: fit-content;
    font-family: ${Poppins};
    font-size: 20px;
    color: ${grey_text};
    }

`