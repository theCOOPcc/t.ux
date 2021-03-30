import styled from 'styled-components';
import { Flex } from './utilities';

export const Input = styled.input`
  ${Flex};
  border-radius: 5px;
`;

export const InputGroup = styled.div`
  ${Flex({jc:'space-between'})};
  width: 100%;
  margin: 10px 0px;
`;

export const Form = styled.form`
  ${Flex({dir:'column'})};
  width: 100%;
`; 

export const Select = styled.select`
  border-radius: 5px;
`;


export const TextArea = styled.textarea`
  background: #FFFFFF;
  border: 1px solid #3C8582;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const Button = styled.button`
border-radius: 5px;
margin: 10px 0px; 
background-color: var(green);
`

export const Label = styled.label``
