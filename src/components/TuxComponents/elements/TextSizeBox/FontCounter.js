
import styled from 'styled-components'
import { pop_thick
 } from '../../utilities/Type'
 import UpArrow from '../../../../images/ActivityWizardImgs/CounterArrowUp.svg'
import DownArrow from '../../../../images/ActivityWizardImgs/CounterArrowDown.svg'
import GreenUpArrow from '../../../../images/ActivityWizardImgs/GreenArrowUp.svg'
import GreenDownArrow from '../../../../images/ActivityWizardImgs/GreenArrowDown.svg'

 export const CounterWrapper = styled.div`
  position: relative;
  width: auto;
  height: auto;
 `
 export const ArrowButtonUp = styled.button`
  position: absolute;
  margin: 0;
  padding: 0;
  height: 24px;
  width: 18px;
  border: none;
  border-radius: 0 5px 0 0 ;
  background: rgba(34, 34, 34, 0.95);
  background-image: url(${UpArrow});
  background-repeat: no-repeat;
  background-size: 85%;
  background-position: 1.5px;
  border: 1px solid black;
  cursor: pointer;
  &:active {
    background-image: url(${GreenUpArrow});
  }
 `

 export const ArrowButtonDown = styled.button`
  position: absolute;
  top: 23px;
  margin: 0;
  padding: 0;
  height: 23px;
  width: 18px;
  border-radius: 0 0 5px 0 ;
  background: rgba(34, 34, 34, 0.95);
  background-image: url(${DownArrow});
  background-repeat: no-repeat;
  background-size: 85%;
  background-position: 1.5px;
  border: 1px solid black;
  cursor: pointer;
  &:active {
    background-image: url(${GreenDownArrow});
  }

 `
export const CounterBox = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  width: 42.75px;
  height: 44px;
  background:  #222;
  opacity: 80%;
  border: none;
  font: ${pop_thick};
  font-size: 20px;
  line-height: 24px;
  color: #FFF;
  /* border: none; */
  border-radius: 5px 0 0 5px ;
  &:focus {
    opacity: 95%;
  }
  &:hover {
    opacity: 90%;
  }
`




