import styled, {css} from 'styled-components'
import {         
  hex_slider_hue,
  lumosity_box_shadow,
  text_black,
  true_white
} from '../../utilities';

export const Lumosity = styled.input`
  -webkit-appearance: none;
  width: 713px;
  height: 30px;
  &::-webkit-slider-runnable-track {
    height: 20px;
    box-shadow: 2px 2px 2px ${lumosity_box_shadow};
    background: linear-gradient(
                0.25turn,
                #fff,
                ${(props) => props.color},
                #000);
    border-radius: 25px;
    border: 2px solid ${hex_slider_hue};
  }
  &::-webkit-slider-thumb,
     -moz-range-thumb {
       margin-top: -2px;
      height: 20px;
      width: 20px;
      background-color: transparent;
      border-radius: 50px;
      border: 3.5px solid ${hex_slider_hue};
      cursor: pointer;
      z-index: 1;
      -webkit-appearance: none;
      &:hover {
        height: 30px;
        width: 30px;
        border-radius: 50px;
        border: 6px double ${hex_slider_hue};
        cursor: pointer;
        margin-top: -5.5px;
        -webkit-appearance: none;
        box-shadow: 5px 5px 5px ${lumosity_box_shadow};
      &:active {
        height: 30px;
        width: 30px;
        border: 4px solid ${hex_slider_hue};
        box-shadow: 6px 6px 6px ${lumosity_box_shadow};

        }
      }
    }

`

