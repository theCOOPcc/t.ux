import React, {useState} from 'react'
import { CounterBox, CounterWrapper, ArrowButtonUp, ArrowButtonDown} from './FontCounter'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Font Counter",
  decorators: [withDesign],
};


export const FontCounter = () => {
  // To represent the value within the counter, in order to connect it to the up and down arrows
  const [counterBoxValue, setCounterBoxValue] = useState(0);
  // To restrict the char. length of the input 
  const [prevInputValue, setPrevInputValue] = useState(0);

  const handleOnChange = (e) => {
    let currentValue = e.target.value;
    let charCountLength = currentValue.length;

    if(charCountLength <= 3) {
      setPrevInputValue(parseInt(currentValue));
      setCounterBoxValue(parseInt(currentValue));
    } else {
      e.target.value = prevInputValue;
      setCounterBoxValue(prevInputValue)
    }
  }

  const handleOnClick = (e) => {
    let arrowDirection = e.target.dataset.direction;
    let currentValue = parseInt(counterBoxValue);

    if(arrowDirection === 'up') {
      if(currentValue < 999) {
        currentValue += 1;
        setCounterBoxValue(currentValue);
      }
    }
    else {
      if(currentValue > 0) {
        currentValue -= 1;
        setCounterBoxValue(currentValue);
      }
    }
  }

  return (
  <CounterWrapper>
    <CounterBox onChange={handleOnChange} type='number' value={counterBoxValue} ></CounterBox>
    <ArrowButtonUp data-direction='up' onClick={handleOnClick}/>
    <ArrowButtonDown data-direction='down' onClick={handleOnClick} />
  </CounterWrapper>

  )
}