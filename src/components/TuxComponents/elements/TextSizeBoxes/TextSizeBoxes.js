import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { 
  display_hover_bg, 
  display_focus_bg, 
  text_btn_bg,
  text_btn_hover_bg,
  text_btn_focus_border
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 80px;
  height: 40px;
`

const Display = styled.input`
  grid-area: 1 / 1 / 3 / 4;;
  background: ${grey_text};
  color: ${true_white};
  border-right: 3px solid ${text_black};
  border-radius: 5px 0px 0px 5px;
  font-size: 20px;
  text-align: center;

  &:hover{
    background: ${display_hover_bg};
  }

  &:focus {
    background: ${display_focus_bg};
  }
`

const UpCtn = styled.div`
  grid-area: 1 / 4 / 2 / 5;
`

const UpBtn = styled.button`
  height: 100%;
  width: 100%;
  background: ${text_btn_bg};
  border-radius: 0px 5px 0px 0px;
  transition-duration: 0.2s;
  &:hover {
    background: ${text_btn_hover_bg};
  }

  &:focus div {
    border-bottom: 10px solid ${text_btn_focus_border};
  }
`

const DownCtn = styled.div`
  grid-area: 2 / 4 / 3 / 5;
`

const DownBtn = styled.button`
  height: 100%;
  width: 100%;
  background: ${text_btn_bg};
  border-radius: 0px 0px 5px 0px;
  transition-duration: 0.2s;

  &:hover {
    background: ${text_btn_hover_bg};
  }
  
  &:focus div {
    border-top: 10px solid ${text_btn_focus_border};
  }
`

const UpArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 10px solid white;
`

const DownArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 10px solid white;
`

export const TextSizeBox = () => {
  const [size, setSize] = useState(12)

  function handleChange(e) {
    console.log(e.target)
    let newNum = parseInt(e.target.value, 10)
    if(newNum) {
      setSize(newNum)
    }
  }

  function handleUpClick(e) {
    e.preventDefault()
    setSize(size+1)
  }

  function handleDownClick(e) {
    e.preventDefault()
    setSize(size-1)
  }

  return(
    <Container>
      <Display
        value={size}
        onChange={handleChange}
      />
      <UpCtn>
        {size >= 999 ? 
          <UpBtn onClick={handleUpClick} disabled>
            <UpArrow />
          </UpBtn>
          :
          <UpBtn onClick={handleUpClick}>
            <UpArrow />
          </UpBtn>
        }
      </UpCtn>
      <DownCtn>
        {size <= 1 ?
          <DownBtn onClick={handleDownClick} disabled>
            <DownArrow />
          </DownBtn>
          :
          <DownBtn onClick={handleDownClick}>
            <DownArrow />
          </DownBtn>
        }
      </DownCtn>
    </Container>
  )
}

