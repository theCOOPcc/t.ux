import styled, {css} from 'styled-components'
import { pop_bolder } from '../../utilities/Type'
import { white } from '../../utilities/Colors'
import { text_black, tux_grey } from '../../utilities';


export const HexBox = styled.input`
&::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  width: 128px;
  height: 42px;
  border-radius: 5px;
  background: ${tux_grey};
  opacity: 0.7;
  color: ${white};
  font: ${pop_bolder};
  line-height: 24px;
  font-size: 18px;
  padding-left: 20px;
  box-sizing: border-box;
  &:hover {
    opacity: 0.8;
  }
  &:focus {
   opacity: 0.9;
  }
  ${props => props.hover && css`
    opacity: 0.8;
  `}
  ${props => props.selected && css`
  opacity: 0.9;
  border: 1px solid ${text_black};
  `}
`