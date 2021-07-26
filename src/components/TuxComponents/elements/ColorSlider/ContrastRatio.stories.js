import React, { useState } from 'react';
import { HiddenRadioButtonInput, RadioButtonWrapper, TestCustomRadio } from '../RadioButtons/RadioButtons'
import { HexBox } from './HexInput';
import { ContrastRatioActivity, ContrastRatioBox } from './ContrastRatio';
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Contrast Ratio",
  decorators: [withDesign],
};


// export const ContrastRatioBox = () => (
//   <>
//   <ContrastRatioBox className='contrast-ratio-box'></ContrastRatioBox>
//   </>
// )



export const ContrastRatioPage = (args) => {

  // To represent the value within the counter, in order to connect it to the up and down arrows
  const [counterBoxValue, setCounterBoxValue] = useState(0);
  // To restrict the char. length of the input 
  const [prevInputValue, setPrevInputValue] = useState(0);

  let currentValue;
  let charCountLength = 0;



  const handleHexChange = (e) => {
    currentValue = e.target.value;
    charCountLength = currentValue.length;

    if (charCountLength === 6 && currentValue.match(/^[a-fA-F0-9]+$/i)) {
      setPrevInputValue(parseInt(currentValue));
      setCounterBoxValue(parseInt(currentValue));
    }
    if (charCountLength !== 6) {
      currentValue = prevInputValue;
      setCounterBoxValue(prevInputValue)
    }

  }


  return (
    <>
      <ContrastRatioActivity>

        <RadioButtonWrapper {...args} >
          <HiddenRadioButtonInput type='radio' {...args} />
          <TestCustomRadio {...args} />
          Text
        </RadioButtonWrapper>

        <div>
          <span style={{ position: "relative", left: "15px", zIndex: "2" }}>#</span>
          <HexBox onChange={handleHexChange} className='hexBox' type='text' maxLength='6' {...args}></HexBox>
        </div>

        <RadioButtonWrapper {...args} >
          <HiddenRadioButtonInput type='radio' {...args} />
          <TestCustomRadio {...args} />
          Background
        </RadioButtonWrapper>

        <div>
          <span style={{ position: "relative", left: "15px", zIndex: "2" }}>#</span>
          <HexBox onChange={handleHexChange} className='hexBox' type='text' maxLength='6' {...args}></HexBox>
        </div>


      </ContrastRatioActivity>
    </>
  )
}

ContrastRatioPage.args = {
  hover: false,
  focus: false,
  checked: false,
  disabled: false,
  error: false,
}

