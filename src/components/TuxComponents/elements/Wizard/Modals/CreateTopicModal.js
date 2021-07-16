import styled from 'styled-components'
import { pop_thick, pop_reg } from '../../../utilities/Type'

export const CreateTopicMod = styled.div`
position: relative;
top: 75px;
  width: 426px;
  height: 413.7px;
  border: 1px solid #BBBBBB;
  box-sizing: border-box;
  box-shadow:0px 4px 9px rgba(0, 0, 0, 0.25);
  border-radius:10px ;
`

export const CreateTopicHeader = styled.p`
  position: absolute;
  width: 267px;
  height: 54.62px;
  left: 85px;
  top: 56.64px; 
  height: 54.62px;
  text-align: center;
  font:${pop_thick};
  font-size: 36px;
  line-height: 54px;
  padding: 0;
  margin: 0;
`

export const CreateTopicSubHeader = styled.p`
  position: absolute;
  left: 48px;
  top: 111.26px;
  color: #000000;
  padding: 0;
  margin: 0;
  text-align: center;
  width: 339px;
  height: 20.34px;
  font: ${pop_reg};
  line-height: 27px;
`

export const CreateButton = styled.button`
  position: absolute;
  bottom: 40px;
  left:137px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  width: 154px;
  height: 50px;
  position: absolute;
  background: #78D6DA;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  /* color: #274D4F; */
`

export const X_Button = styled.button`
  position: absolute;
  right: 22px;
  top: 22px;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
`

export const X_Image = styled.img`

`

export const TuxFlower = styled.img`
	width: 132px;
	z-index: 1;
  position: absolute;
  top: -85px;
  left: 140px;
	border-radius: 50%;
  background: #FFFFFF;
  box-sizing: border-box;
`;

