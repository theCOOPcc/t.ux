import React, { useState } from 'react';
import { HiddenRadioButtonInput, RadioButtonWrapper, TestCustomRadio } from '../RadioButtons/RadioButtons'
import { HexBox } from './HexInput';
//import { white } from '../../utilities/Colors';
import { pop_bolder } from '../../utilities/Type';
import { ColorSlider } from './ContrastRatio';
import { LumSlider, HexColorSlider } from './ContrastRatio';
import { CounterBox, CounterWrapper, ArrowButtonUp, ArrowButtonDown} from '../FontCounter/FontCounter'
import { ContrastRatioActivity, ContrastRatioBox, ContrastRatioResult} from './ContrastRatio';
import { withDesign } from "storybook-addon-designs";
//import { HexColorPicker } from "react-colorful";

      // <HexColorPicker
      //   style={{ clipPath:'inset(177px 0px 0px 0px round 13px)',width: "700px", height: '201px' }}
      //   color={color}
      //   onChange={setColor}
      //   className="slider"
      // />


// .slider .react-colorful__hue-pointer {
//   width: 23px;
//   height: 23px;
//   border-radius: 10px;
// }




const tinycolor = require("tinycolor2")

export default {
  title: "Contrast Ratio",
  decorators: [withDesign],
};


//Variables for text and background hex values
    let t;
    let b;

    

export const ContrastRatioPage = (args) => {

  const [radioText, setRadioText]  = useState(true);

  const [radioBackground, setRadioBackground]  = useState(false);

  //Contrast Ratio (Pass or Fail) Result
  const [testResult, setTestResult] = useState('FAIL');

  //Contrast Ratio (Numerical) Result
  const [contRatio, setContRatio] = useState('2.72');

  // Ratio Box Color depending on passed (green) or failed (red) test
  const [Color, setColor] = useState('red');

  //Page Text Color depending on Text Hex Input Box
  const [textColor, setTextColor] = useState('#FE02FC');

  //Page Background Color depending on Background Hex Input Box
  const [backgroundColor, setBackgroundColor] = useState('#413F9F');

  //Hex Color Slider
  const [sliderColor, setSliderColor] = useState('#FE02FC')

  // For Hex Input Box (Text)
  const [textBoxValue, setTextBoxValue] = useState('');
  //const [prevTextInputValue, setPrevTextInputValue] = useState('');

  // For Hex Input Box (Background)
  const [backgroundBoxValue, setBackgroundBoxValue] = useState('');
  //const [prevBackgroundInputValue, setPrevBackgroundInputValue] = useState('');

  // For Font-Counter
  const [fontCounterValue, setFontCounterValue] = useState(100);
  const [prevFontValue, setPrevFontValue] = useState(0);
  let currentFontValue;
  let fontCountLength = 0;


//Handles live changes to the text and background hex inputs
  const handleHexChange = (e) => {
    let currentValue = e.target.value;
    let boxType = e.target.dataset.type;
    let charLength = currentValue.length;

    //Making sure input is a Hexadecimal
    if (charLength < 7 && currentValue.match(/^[a-fA-F0-9]+$/i)) {

      //Text Hex Input
      if(boxType === 'text')
      {
        setTextBoxValue(currentValue)

        //setTextColor(sliderColor);
        setRadioBackground(false);
        setRadioText(true);

        if(charLength === 6){
          t = currentValue;
          setTextColor('#' + currentValue);
          setSliderColor('#' + currentValue);
        }
      }

      //Background Hex Input
      if(boxType === 'background')
      {
        setBackgroundBoxValue(currentValue)
        //setBackgroundColor(sliderColor);
        setRadioBackground(true);
        setRadioText(false);

        if(charLength === 6){
          b = currentValue;
          setBackgroundColor('#' + currentValue);
          setSliderColor('#' + currentValue);
        }
      }


      //Checks for compliance with AA-Small Standard
        if(charLength === 6 && tinycolor.isReadable("#" + t, "#" + b,{level:"AA",size:"small"}))
        { 
          setTestResult('AA PASS');
          setColor('green');
        } 
        else if (charLength !== 6 || (charLength === 6 && !tinycolor.isReadable("#" + t, "#" + b,{level:"AA",size:"small"})))
        {
          setTestResult('FAIL');
          setColor('red');
        } 

        
        if(charLength === 6) {
          setContRatio((tinycolor.readability("#" + t , "#" + b)).toFixed(2))
        }

    }
    else if(boxType === 'text') 
    {
      setContRatio('N/A');
      setTestResult('FAIL');
    }
    else if(boxType === 'background')
    {
      setContRatio('N/A');
      setTestResult('FAIL');
    }
  }
     
  const handleTextRadio = (e) => {

    setRadioText(true);
    setRadioBackground(false);
      
}

  const handleBackgroundRadio = (e) => {

    setRadioText(false);
    setRadioBackground(true);
            
}

  const handleFontChange = (e) => {
    currentFontValue = e.target.value;
    fontCountLength = currentFontValue.length;

    if(fontCountLength <= 2) {
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
      if(currentFontValue < 100) {
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

  const handleSliderChange = (e) => {
    let newColor = e.split("").splice(1,6).join("")
    if(radioText){setTextColor(e); t = newColor; setTextBoxValue(newColor)} else{ setBackgroundColor(e); b = newColor; setBackgroundBoxValue(newColor)}
    
  }


  return (
<>
  <ContrastRatioActivity style={{backgroundColor: backgroundColor}}>

  <div style={{display: 'inherit', flexDirection: 'row', justifyContent: 'space-between', height: '100px', maxHeight: '100px' }}>
      
      <p style={{color: textColor, fontSize:fontCounterValue, margin: '0'}}>Aa</p>

      <div>
        <ContrastRatioBox style={{backgroundColor: Color}}>
          <p style={{fontSize:'13px', paddingLeft:'20px', margin:'11px 0 0 0'}}>Contrast Ratio</p>
          <p style={{fontSize:'18px', padding:'10px 0 0 40px', margin:'0'}}>{contRatio}:1</p>
        </ContrastRatioBox>
      
        <ContrastRatioResult style={{color: Color }}>{testResult}</ContrastRatioResult>
      </div>  

  </div>

  <div style={{color: textColor, display: 'inherit', flexDirection: 'row', justifyContent: 'flex-start', maxWidth: '600px'}}>

    <p>The W3C color contrast guidelines are graded via a AA or AAA standard.  AA is best practice and requires a minimum 3:1 ratio for large-sized text and 4.5:1 ratio for regular sized text.  Adjusting font size, color, or luminance of the text or background can help you reach an acceptible color contrast ratio to meet AA standards.</p>

  </div>

  <div style={{display: 'inherit', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
      
      <div>
        
        <RadioButtonWrapper {...args} style={{color: textColor}}>
          <HiddenRadioButtonInput type='radio' {...args} />
          <TestCustomRadio {...args} onClick={handleTextRadio} checked={radioText} /> 
          Text
        </RadioButtonWrapper>

        <span style={{ position: "relative", left: "15px", zIndex: "2", color: 'white', font: pop_bolder }}>#</span>
        <HexBox style={{padding: '15px'}} value={textBoxValue} onChange={handleHexChange} className='hexBox' type='text' maxLength='6' data-type='text' {...args}></HexBox>
      </div>


        <CounterWrapper>
          <CounterBox onChange={handleFontChange} type='number' value={fontCounterValue} ></CounterBox>
          <ArrowButtonUp data-direction='up' onClick={handleFontClick} />
          <ArrowButtonDown data-direction='down' onClick={handleFontClick} />
        </CounterWrapper>

      <div>
        <RadioButtonWrapper {...args} style={{color: textColor}}  >
          <HiddenRadioButtonInput type='radio' {...args} />
           <TestCustomRadio {...args} onClick={handleBackgroundRadio} checked={radioBackground}  /> 
          Background
        </RadioButtonWrapper>

      
        <span style={{ position: "relative", left: "15px", zIndex: "2",color: 'white', font: pop_bolder }}>#</span>
        <HexBox style={{padding: '15px'}} value={backgroundBoxValue} onChange={handleHexChange} data-type='background' className='hexBox' type='text' maxLength='6'  {...args}></HexBox>
      </div>
  </div>

  <div style={{display: 'inherit', backgroundColor: 'transparent', flexDirection: 'row'}}>

      {/* <ColorSlider type='range' className='slider'></ColorSlider> */}
      <HexColorSlider style ={{height: "20px"}} color={sliderColor} onChange={handleSliderChange}></HexColorSlider>

  </div>

  <div style={{display: 'inherit', backgroundColor: 'transparent', flexDirection: 'row'}}>

    <LumSlider className='lumosity' type='range' ></LumSlider>

  </div>

  </ContrastRatioActivity>
</>
  )
}

// ContrastRatioPage.args = {
//   checked: false
// }

