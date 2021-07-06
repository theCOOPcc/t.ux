import styled, { css } from "styled-components";
import { useState } from 'react';

const Container = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-content: center;
`

const Arrow = styled.div`
  position: absolute;
  ${(props) =>
    props.direction === 'right' &&
    css`
      right: 100%;
      top: calc(50% - 5px);
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 10px solid black;
    `
  }
  ${(props) =>
    props.direction === 'left' &&
    css`
      left: 100%;
      top: calc(50% - 5px);
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 10px solid black;
    `
  }
  ${(props) =>
    props.direction === 'bottom' &&
    css`
      left: 47%;
      bottom: 100%;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 10px solid black;
    `
  }
  ${(props) =>
    props.direction === 'top' &&
    css`
      left: 47%;
      top: 100%;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 10px solid black;
    `
  }
`

const Box = styled.div`
  position: absolute;
  background: black;
  color: white;
  padding: 8px;
  border-radius: 3px;
  min-width: 100px;
  text-align: center;
  display: none;
  ${(props) =>
    props.visible &&
    css`
      display: block;
    `
  }
  ${(props) =>
    props.direction === 'right' &&
    css`
      align-self: center;
      left: calc(100% + 12px);
    `
  }
  ${(props) =>
    props.direction === 'left' &&
    css`
      right: calc(100% + 12px);
      align-self: center;
    `
  }
  ${(props) =>
    props.direction === 'bottom' &&
    css`
      top: calc(100% + 10px);
    `
  }
  ${(props) =>
    props.direction === 'top' &&
    css`
      bottom: calc(100% + 10px);
    `
  }
`

export const ToolTip = ({ children, text, direction }) => {
  const [show, setShow] = useState(false)

  return(
    <Container>
      <Box visible={show} direction={direction}>
        {text}
        <Arrow direction={direction} />
      </Box>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </Container>
  )
}