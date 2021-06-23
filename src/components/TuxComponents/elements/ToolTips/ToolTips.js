import styled, { css } from "styled-components";

//flexbox used for aligning arrows and boxes
export const ToolTip = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.top &&
    css`
      flex-direction: column-reverse;
    `
  }
  ${(props) =>
    props.bottom &&
    css`
      flex-direction: column;
    `
  }
  ${(props) =>
    props.left &&
    css`
      flex-direction: row-reverse;
      justify-content: flex-end;
    `
  }
`
//css triangles used for arrows
export const Arrow = styled.div`
  width: 0;
  height: 0;
  ${(props) =>
    props.left &&
    css`
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 10px solid black;
    `
  }
  ${(props) =>
    props.right &&
    css`
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 10px solid black;
    `
  }
  ${(props) =>
    props.top &&
    css`
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 10px solid black;
    `
  }
  ${(props) =>
    props.bottom &&
    css`
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 10px solid black;
    `
  }
`
//box for text
export const Box = styled.div`
  background: black;
  color: white;
  padding: 8px;
  border-radius: 3px;
`