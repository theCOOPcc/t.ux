import styled from 'styled-components';
import { pop_reg, pop_thick, pop_bolder, modal_grey, tux_blue, true_white} from '../../../utilities';

export const QuestionModalWrapper = styled.div`
  position: relative;
  top: 75px;
  width: 515px;
  height: 486px;
  border: 1px solid ${modal_grey};
  box-sizing: border-box;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`

export const QuestionHeader = styled.p`
  position: absolute;
  top: 54px;
  left: 110px;
  padding: 0;
  margin: 0;
  width: 297px;
  height: 54px;
  text-align: center;
  font: ${pop_thick};
  font-size: 36px;
  line-height: 54px;
`

export const QuestionSubHeader = styled.p`
  position: absolute;
  top: 85px;
  left: 63px;
  width: 389px;
  height: 27px;
  text-align: center;
  font: ${pop_reg};
  line-height: 27px;
`

export const CreateButton = styled.button`
  position: absolute;
  bottom: 40px;
  left:181px;
  font: ${pop_bolder};
  font-size: 20px;
  line-height: 27px;
  width: 154px;
  height: 50px;
  position: absolute;
  background: ${tux_blue};
  border-radius: 5px;
  border: none;
  cursor: pointer;
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
  top: -95px;
  left: 188px;
	border-radius: 50%;
  background: ${true_white};
  box-sizing: border-box;
`;




