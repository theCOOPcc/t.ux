import styled, {css} from 'styled-components'


export const ModalWrapper = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  width: 515px;
  height: 486px;
  border: 1px solid #BBBBBB;
  box-sizing: border-box;
  box-shadow: 0px 4px 9px rgba(0,0,0,0.25);
  border-radius: 10px;
`

export const ModalHeader = styled.p`
position: absolute;
  width: 176px;
  height: 54px;
  top: 54px;
  left: 170px;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  padding: 0;
  margin: 0;
  text-align: center;
  
`

export const ModalSubHeader = styled.p`
  position: absolute;
  left: 78px;
  top: 108px;
  width: 359px;
  height: 27px;
  font-size: 18px;
  line-height: 27px;
  padding: 0;
  margin: 0;
  text-align: center;
`

export const CreateButton = styled.button`
  position: absolute;
  bottom: 40px;
  left:181px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  width: 154px;
  height: 50px;
  position: absolute;
  background: #78D6DA;
  border-radius: 5px;
  border: none;
  /* color: #274D4F; */
`

export const ModalInput = styled.input`
  position: absolute;
  top: 155px;
  left: 118px;
  width: 280px;
  height: 48px;
  border: 1px solid #666666;
  box-sizing: border-box;
  border-radius: 10px;
`

export const DropDownArrow = styled.img`
  position: absolute;
  top: 176.34px;
  right: 133.02px;
  width: 13.98px;
  height: 8.9px;
`