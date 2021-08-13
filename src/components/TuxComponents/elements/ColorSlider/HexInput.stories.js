import React, {useState} from 'react';
import { HexBox } from './HexInput';
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Hex Input",
  decorators: [withDesign],
};

export const Hex = (args) => {
   // To represent the value within the counter, in order to connect it to the up and down arrows
   const [counterBoxValue, setCounterBoxValue] = useState(0);
   // To restrict the char. length of the input 
   const [prevInputValue, setPrevInputValue] = useState(0);

  const handleOnChange = (e) => {
    let currentValue = e.target.value;
    let charCountLength = currentValue.length;

    if(charCountLength <= 7) {
      setPrevInputValue(parseInt(currentValue));
      setCounterBoxValue(parseInt(currentValue));
    } else {
      e.target.value = prevInputValue;
      setCounterBoxValue(prevInputValue)
    }
  }
  
  return (
  <HexBox onChange={handleOnChange} className='hexBox' type='text' {...args}></HexBox>
)}


Hex.args = {
  hover: false,
  selected: false,
}