import styled, {css} from 'styled-components'

export const Lumosity = styled.input`
  -webkit-appearance: none;
  width: 713px;
  height: 30px;
  &::-webkit-slider-runnable-track {
    height: 20px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    background: linear-gradient(
      270deg, #010103 
      4.39%, #0B0A1B 
      11.27%, #141432 
      19.04%, #24245F 
      26.31%, #2D2C75 
      33.83%, #353489 
      42.11%, #3A3896 
      49.38%, #403FA9 
      57.02%, #5553B1 
      65.31%, #7E7DC4 
      72.95%, #B1B1DC 
      80.47%, #C9C9E6 
      89.14%, #F6F5FB 
      96.65%);
    border-radius: 25px;
    border: 0px solid #000101;
  }
  &::-webkit-slider-thumb,
     -moz-range-thumb {
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
        -webkit-appearance: none;
        margin-top: -5px;
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

