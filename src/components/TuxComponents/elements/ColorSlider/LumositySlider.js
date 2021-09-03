import styled, {css} from 'styled-components'

export const Lumosity = styled.input`
  -webkit-appearance: none;
  width: 713px;
  height: 30px;
  &::-webkit-slider-runnable-track {
    height: 20px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    background: linear-gradient(
                0.25turn,
                #ffffff,
                ${(props) => props.color},
                #000000);
    border-radius: 25px;
    border: 2px solid #F6F6F6;
  }
  &::-webkit-slider-thumb,
     -moz-range-thumb {
       margin-top: -2px;
      height: 20px;
      width: 20px;
      background-color: transparent;
      border-radius: 50px;
      border: 3.5px solid #f6f6f6;
      cursor: pointer;
      z-index: 1;
      -webkit-appearance: none;
      &:hover {
        height: 30px;
        width: 30px;
        border-radius: 50px;
        border: 6px double #f6f6f6;
        cursor: pointer;
        margin-top: -5.5px;
        -webkit-appearance: none;
        box-shadow: 5px 5px 5px rgba(0,0,0,.5);
      &:active {
        height: 30px;
        width: 30px;
        border: 4px solid #f6f6f6;
        box-shadow: 6px 6px 6px rgba(0,0,0,.5);

        }
      }
    }

`

