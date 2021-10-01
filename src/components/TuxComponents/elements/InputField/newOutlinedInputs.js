import styled from "styled-components";
import { true_white, grey_text, tux_grey, input_focus_border} from "../../utilities"

export const Wrapper = styled.div`
  position: relative;
`;
export const Label = styled.label`
  position: absolute;
  font-size: 1rem;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${true_white};
  color: ${grey_text};
  padding: 0 0.3rem;
  margin: 0 0.5rem;
  transition: 0.1s ease-out;
  transform-origin: left top;
  pointer-events: none;
`;

export const Input = styled.input`
  font-size: 1rem;
  outline: none;
  border: 1px solid ${tux_grey};
  border-radius: 5px;
  padding: 1rem 0.7rem;
  color: ${grey_text};
  transition: 0.1s ease-out;
  &:focus {
    border-color: ${input_focus_border};
  }
  &:focus + Label {
    color: ${input_focus_border};
    top: 0;
    transform: translateY(-50%) scale(0.9);
  }
  input:not(:placeholder-shown) + Label {
    top: 0;
    transform: translateY(-50%) scale(0.9);
  }
`;
