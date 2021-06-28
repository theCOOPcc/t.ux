import styled, { css } from "styled-components";
import { useState } from 'react';

const Container = styled.div`
  position: relative;
  display: inline-block;
`

const Arrow = styled.div`
  position: absolute;
  ${(props) =>
    props.direction === 'right' &&
    css`
      right: 100%;
      top: 50%;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 10px solid black;
    `
  }
  ${(props) =>
    props.direction === 'left' &&
    css`
      left: 100%;
      top: 50%;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 10px solid black;
    `
  }
  ${(props) =>
    props.direction === 'bottom' &&
    css`
      left: 50%;
      bottom: 100%;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 10px solid black;
    `
  }
  ${(props) =>
    props.direction === 'top' &&
    css`
      left: 50%;
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
  display: none;
  width: 100px;
  ${(props) =>
    props.visible &&
    css`
      display: block;
    `
  }
  ${(props) =>
    props.direction === 'right' &&
    css`
      left: calc(100% + 12px);
      top: -50%;
    `
  }
  ${(props) =>
    props.direction === 'left' &&
    css`
      right: calc(100% + 12px);
      top: -50%;
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