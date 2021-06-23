import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  
`;
export const Label = styled.label`
  position: absolute;
  font-size: 1rem;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  color: grey;
  padding: 0 0.3rem;
  margin: 0 0.5rem;
  transition: 0.1s ease-out;
  transform-origin: left top;
  pointer-events: none;
`;

export const Input = styled.input`
width: 280px;
  font-size: 1rem;
  outline: none;
  border: 1px solid #666666;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 1rem 0.7rem;
  color: gray;
  transition: 0.1s ease-out;
  &:focus {
    border-color: #6200ee;
  }
  &:focus + Label {
    color: #6200ee;
    top: 0;
    transform: translateY(-50%) scale(0.9);
  }
  input:not(:placeholder-shown) + Label {
    top: 0;
    transform: translateY(-50%) scale(0.9);
  }
  ${(props) =>
    props.disabled &&
    css`
    
    `}
`;
