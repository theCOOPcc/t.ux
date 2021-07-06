import styled, {css} from 'styled-components'


export const ModalWrapper = styled.div`
  width: 515px;
  height: 486px;
  background: #ffffff;
  opacity: 0.6;
  border: 1px solid #BBBBBB;
  box-sizing: border-box;
  box-shadow: 0px 4px 9px rgba(0,0,0,0.25);
  border-radius: 10px;
`

export const ModalHeader = styled.p`
  margin: 0;
  padding: 0;
  position: absolute;
  left: 33.01%;
  right: 32.82%;
  top: 28.71%;
  bottom: 62.38%;
  width: 176px;
  height: 54px;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #000000;
`

export const ModalSubHeader = styled.p`
  position: absolute;
  left: 15.15%;
  right: 15.15%;
  top: 37.62%;
  bottom: 57.92%;
  margin: 0;
  padding: 0;
  width: 359px;
  height: 27px;
  font-size: 18px;
  line-height: 27px;
`

export const CreateButton = styled.button`
  width: 154px;
  height: 50px;
  position: absolute;
  background: #78D6DA;
  border-radius: 5px;
`