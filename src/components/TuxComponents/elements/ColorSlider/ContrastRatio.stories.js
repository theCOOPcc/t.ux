import React, { useState } from 'react';
import { HiddenRadioButtonInput, RadioButtonWrapper, TestCustomRadio } from '../RadioButtons/RadioButtons'
import { HexBox } from './HexInput';
import { white } from '../../utilities/Colors';
import { pop_bolder } from '../../utilities/Type';
import { ColorSlider } from './ContrastRatio';
import { LumSlider } from './ContrastRatio';
import { CounterBox, CounterWrapper, ArrowButtonUp, ArrowButtonDown} from '../FontCounter/FontCounter'
import { ContrastRatioActivity, ContrastRatioBox} from './ContrastRatio';
import { withDesign } from "storybook-addon-designs";


export default {
  title: "Contrast Ratio",
  decorators: [withDesign],
};


export const ContrastRatioPage = (args) => {

  // For Hex Input Box
  const [textBoxValue, setTextBoxValue] = useState('');
  const [backgroundBoxValue, setBackgroundBoxValue] = useState('');
  const [prevTextInputValue, setPrevTextInputValue] = useState('');
  const [prevBackgroundInputValue, setPrevBackgroundInputValue] = useState('');


  // For Font-Counter
  const [fontCounterValue, setFontCounterValue] = useState(0);
  const [prevFontValue, setPrevFontValue] = useState(0);
  let currentFontValue;
  let fontCountLength = 0;


  const handleHexChange = (e) => {
    let currentValue = e.target.value;
    let boxType = e.target.dataset.type
    let charCountLength = currentValue.length;

    console.log('Current Value: ',currentValue);
    console.log('Char Count Length:', charCountLength);
    console.log('currentVal.match', currentValue.match(/^[a-fA-F0-9]+$/i));
    if (charCountLength <= 6 && currentValue.match(/^[a-fA-F0-9]+$/i)) {
      if (boxType === 'text') {
        setTextBoxValue(currentValue);
        setPrevTextInputValue(currentValue);
      } else {
        setBackgroundBoxValue(currentValue);
        setPrevBackgroundInputValue(currentValue);
      }
    } else {
      if(boxType === 'text') {
        setTextBoxValue(prevTextInputValue)
      } else {
        setBackgroundBoxValue(prevBackgroundInputValue)
      }
    }
  }

    const handleFontChange = (e) => {
    currentFontValue = e.target.value;
    fontCountLength = currentFontValue.length;

    if(fontCountLength <= 3) {
      setPrevFontValue(parseInt(currentFontValue));
      setFontCounterValue(parseInt(currentFontValue));
    } else {
      e.target.value = prevFontValue;
      setFontCounterValue(prevFontValue)
    }
  }

  const handleFontClick = (e) => {
    let arrowDirection = e.target.dataset.direction;
    currentFontValue = parseInt(fontCounterValue);

    if(arrowDirection === 'up') {
      if(currentFontValue < 90) {
        currentFontValue += 1;
        setFontCounterValue(currentFontValue);
      }
    }
    else {
      if(currentFontValue > 0) {
        currentFontValue -= 1;
        setFontCounterValue(currentFontValue);
      }
    }
  }


  return (
<>
  <ContrastRatioActivity>

    <div style={{display: 'inherit', flexDirection: 'row', justifyContent: 'space-between', height: '100px', maxHeight: '100px' }}>
      
      <p style={{fontSize:'90px', margin: '0'}}>Aa</p>

      <ContrastRatioBox></ContrastRatioBox>

    </div>

    <div style={{display: 'inherit', flexDirection: 'row', justifyContent: 'flex-start', maxWidth: '600px'}}>

    <p>The W3C color contrast guidelines are graded via a AA or AAA standard.  AA is best practice and requires a minimum 3:1 ratio for large-sized text and 4.5:1 ratio for regular sized text.  Adjusting font size, color, or luminance of the text or background can help you reach an acceptible color contrast ratio to meet AA standards.</p>

    </div>

    <div style={{display: 'inherit', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
      
      <div>
        
        <RadioButtonWrapper {...args} >
          <HiddenRadioButtonInput type='radio' {...args} />
          <TestCustomRadio {...args} />
          Text
        </RadioButtonWrapper>

        <span style={{ position: "relative", left: "15px", zIndex: "2", color: 'white', font: pop_bolder }}>#</span><HexBox style={{padding: '13.5px'}} onChange={handleHexChange} className='hexBox' type='text' maxLength='6' value={textBoxValue} data-type='text' {...args}></HexBox>
      </div>


        <CounterWrapper>
          <CounterBox onChange={handleFontChange} type='number' value={fontCounterValue} ></CounterBox>
          <ArrowButtonUp data-direction='up' onClick={handleFontClick} />
          <ArrowButtonDown data-direction='down' onClick={handleFontClick} />
        </CounterWrapper>

      <div>
        <RadioButtonWrapper {...args} >
          <HiddenRadioButtonInput type='radio' {...args} />
          <TestCustomRadio {...args} />
          Background
        </RadioButtonWrapper>

      
        <span style={{ position: "relative", left: "15px", zIndex: "2",color: 'white', font: pop_bolder }}>#</span>
        <HexBox style={{padding: '13.5px'}} onChange={handleHexChange} data-type='background' className='hexBox' type='text' maxLength='6' value={backgroundBoxValue} {...args}></HexBox>
      </div>
    </div>

    <div style={{display: 'inherit', backgroundColor: 'transparent', flexDirection: 'row'}}>

      <ColorSlider type='range' className='slider'></ColorSlider>

    </div>

    <div style={{display: 'inherit', backgroundColor: 'transparent', flexDirection: 'row'}}>

    <LumSlider className='lumosity' type='range' ></LumSlider>

    </div>

  </ContrastRatioActivity>
</>
  )
}

ContrastRatioPage.args = {
  checked: false
}
