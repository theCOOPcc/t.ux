import React, { useState} from 'react';
import { HiddenRadioButtonInput, RadioButtonWrapper, TestCustomRadio } from '../RadioButtons/RadioButtons'
import { HexBox } from './HexInput';
import { pop_bolder } from '../../utilities/Type';
import { LumSlider, HexColorSlider } from './ContrastRatio';
import { CounterBox, CounterWrapper, ArrowButtonUp, ArrowButtonDown } from '../FontCounter/FontCounter'
import { ContrastRatioActivity, ContrastRatioBox, ContrastRatioResult, PxSpan } from './ContrastRatio';
import { withDesign } from "storybook-addon-designs";

//Package for calculating the contrast ratio
const tinycolor = require("tinycolor2")

export default {
  title: "Contrast Ratio",
  decorators: [withDesign],
};

//Variables for text and background hex values
let t;
let b;

//Variable for the output color of the sliders
let newSliderColor;


export const ContrastRatioPage = (args) => {

  //True when typing in Text Hex Input Box (Radio Button)
  const [radioText, setRadioText] = useState(true);

  //True when typing in Background Hex Input Box (Radio Button)
  const [radioBackground, setRadioBackground] = useState(false);

  //Contrast Ratio (Pass or Fail) Result
  const [testResult, setTestResult] = useState('FAIL');

  //Contrast Ratio (Numerical) Result
  const [contRatio, setContRatio] = useState('2.72');

  //Ratio Box Color depending on passed (green) or failed (red) test
  const [Color, setColor] = useState('red');

  //Page Text Color depending on Text Hex Input Box
  const [textColor, setTextColor] = useState('#FE02FC');

  //Page Background Color depending on Background Hex Input Box
  const [backgroundColor, setBackgroundColor] = useState('#413F9F');

  //Hex Color Slider
  const [sliderColor, setSliderColor] = useState('#FE02FC');

  //Lum Slider Range Value (From 0 to 100)
  const [lumSlider, setLumSlider] = useState(100);

  // For Hex Input Box (Text)
  const [textBoxValue, setTextBoxValue] = useState('');

  // For Hex Input Box (Background)
  const [backgroundBoxValue, setBackgroundBoxValue] = useState('');

  // For Font-Counter
  const [fontCounterValue, setFontCounterValue] = useState(100);
  const [prevFontValue, setPrevFontValue] = useState(0);
  let currentFontValue;
  let fontCountLength = 0;

  //Displays Errors when characters are not Hexadecimals
  const [terror, setTError] = useState('');
  const [berror, setBError] = useState('');

//-----------------------------------------------------------------------------------------//

    //Handles the contrast ratio checks
    const checkContrast = (x, y) => {

  setContRatio((tinycolor.readability(x, y)).toFixed(2))

    if(tinycolor.isReadable(x, y, { level: "AA", size: "small" })){
        setTestResult('AA PASS');
        setColor('green');
      } else {
        setTestResult('FAIL');
        setColor('red');
      }
    }
  
    //Handles live changes to the text and background hex inputs
    const handleHexChange = (e) => {
    let currentValue = e.target.value;
    let boxType = e.target.dataset.type;
    let charLength = currentValue.length;


    //Allows for the first char to be deleted
    if (charLength === 0) {

      if (boxType === 'text') {
        setTextBoxValue("")
      }

      if (boxType === 'background') {
        setBackgroundBoxValue("");
      }
    }

      //Making sure input is a Hexadecimal
      if (charLength < 7 && currentValue.match(/^[a-fA-F0-9]+$/i)) {

        //Text Hex Input
        if (boxType === 'text') {
          setTextBoxValue(currentValue)
          setTError('');
          //setTextColor(sliderColor);
          setRadioBackground(false);
          setRadioText(true);



          if (charLength === 6) {
            t = currentValue;
            setTextBoxValue(currentValue)
            setTextColor('#' + currentValue);
            setSliderColor('#' + currentValue);
          }
        }

        //Background Hex Input
        if (boxType === 'background') {
          setBackgroundBoxValue(currentValue);
          setBError('');
          //setBackgroundColor(sliderColor);
          setRadioBackground(true);
          setRadioText(false);

          if (charLength === 6) {
            b = currentValue;
            setBackgroundBoxValue(currentValue);
            setBackgroundColor('#' + currentValue);
            setSliderColor('#' + currentValue);
          }
        }


        //Checks for compliance with AA-Small Standard
        if (charLength === 6){
          checkContrast(`${"#" + t}`, `${"#" + b}`);
        }

        //Outputs the contrast ratio
        if (charLength === 6) {
          setContRatio((tinycolor.readability("#" + t, "#" + b)).toFixed(2))
        }

      }//Errors for text box
      else if (boxType === 'text') {
        setContRatio('N/A');
        setTestResult('FAIL');
        setTError('Invalid Hex Color');

        if (charLength === 0) { setTError(''); }

      }//Errors for background box
      else if (boxType === 'background') {
        setContRatio('N/A');
        setTestResult('FAIL');
        setBError('Invalid Hex Color');

        if (charLength === 0) { setBError(''); }

      }
    }

    //Handles the toggling of the text hex input box's radio button
    const handleTextRadio = (e) => {

      setRadioText(true);
      setRadioBackground(false);

    }

    //Handles the toggling of the background hex input box's radio button
    const handleBackgroundRadio = (e) => {

      setRadioText(false);
      setRadioBackground(true);

    }

    //Changes the font size
    const handleFontChange = (e) => {
      currentFontValue = e.target.value;
      fontCountLength = currentFontValue.length;

      if (fontCountLength <= 2) {
        setPrevFontValue(parseInt(currentFontValue));
        setFontCounterValue(parseInt(currentFontValue));
      } else {
        e.target.value = prevFontValue;
        setFontCounterValue(prevFontValue)
      }
    }

    //Handles the up and down arrow clicks that affect the fontCounterValue state
    const handleFontClick = (e) => {
      let arrowDirection = e.target.dataset.direction;
      currentFontValue = parseInt(fontCounterValue);

      if (arrowDirection === 'up') {
        if (currentFontValue < 100) {
          currentFontValue += 1;
          setFontCounterValue(currentFontValue);
        }
      }
      else {
        if (currentFontValue > 0) {
          currentFontValue -= 1;
          setFontCounterValue(currentFontValue);
        }
      }
    }

    //Changes the Color of text or bacground depending on the color slider
    const handleSliderChange = (e) => {

      setSliderColor(e);
      newSliderColor = e.split("").splice(1, 6).join("");

      if (radioText) {
        setTextColor(e);
        t = newSliderColor;
        setTextBoxValue(newSliderColor);

      } else if (radioBackground) {
        setBackgroundColor(e);
        b = newSliderColor;
        setBackgroundBoxValue(newSliderColor);

      }

    checkContrast(textColor, backgroundColor);

    }

    //Changes the Luminance of the color depending on the color slider
    const handleLumChange = (e) => {
      // console.log(e.target.style.backgroundColor)
      setLumSlider(e.target.value)

      if (radioText) {
        //t = (tinycolor(`${textColor}`).lighten(e.target.value).toString()).split("").splice(1, 6).join("");
         if(lumSlider > 100){
        setTextColor(tinycolor(`${"#" + t}`).darken((lumSlider-100)).toString());
        setTextBoxValue((`${textColor}`).split("").splice(1, 6).join(""));
         }
        
         if(lumSlider <= 100){
         setTextColor(tinycolor(`${"#" + t}`).brighten((100-lumSlider)).toString());
         setTextBoxValue((`${textColor}`).split("").splice(1, 6).join(""));
         }

      }else if (radioBackground) {
        //b = (tinycolor("#" + b).lighten(e.target.value).toString()).split("").splice(1, 6).join("");
         if(lumSlider > 100){
        setBackgroundColor(tinycolor(`${"#" + b}`).darken((lumSlider-100)).toString());
        setBackgroundBoxValue((`${backgroundColor}`).split("").splice(1, 6).join(""));
         }
        
         if(lumSlider <= 100){
         setBackgroundColor(tinycolor(`${"#" + b}`).brighten((100-lumSlider)).toString());
         setBackgroundBoxValue((`${backgroundColor}`).split("").splice(1, 6).join(""));
         }

      }

      checkContrast(textColor, backgroundColor);

      console.log(e.target.value)
    }

    return (
      <>
        <ContrastRatioActivity style={{ backgroundColor: backgroundColor }}>

          <div style={{ display: 'inherit', flexDirection: 'row', justifyContent: 'space-between', height: '100px', maxHeight: '100px' }}>

            <p style={{ color: textColor, fontSize: fontCounterValue, margin: '0' }}>Aa</p>

            <div>
              <ContrastRatioBox style={{ backgroundColor: Color }}>
                <p style={{ fontSize: '13px', paddingLeft: '20px', margin: '11px 0 0 0' }}>Contrast Ratio</p>
                <p style={{ fontSize: '18px', padding: '10px 0 0 40px', margin: '0' }}>{contRatio}:1</p>
              </ContrastRatioBox>

              <ContrastRatioResult style={{ color: Color }}>{testResult}</ContrastRatioResult>
            </div>

          </div>

          <div style={{ color: textColor, display: 'inherit', flexDirection: 'row', justifyContent: 'flex-start', maxWidth: '600px' }}>

            <p>The W3C color contrast guidelines are graded via a AA or AAA standard.  AA is best practice and requires a minimum 3:1 ratio for large-sized text and 4.5:1 ratio for regular sized text.  Adjusting font size, color, or luminance of the text or background can help you reach an acceptible color contrast ratio to meet AA standards.</p>

          </div>

          <div style={{ display: 'inherit', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>

            <div>

              <RadioButtonWrapper {...args} style={{ color: textColor, position: "relative", left: "5px", bottom: "2px" }}>
                <HiddenRadioButtonInput type='radio' {...args} />
                <TestCustomRadio {...args} style={{ backgroundColor: 'white'}} onClick={handleTextRadio} checked={radioText} />
                Text
              </RadioButtonWrapper>


              <span style={{ position: "relative", left: "15px", zIndex: "2", color: 'white', font: pop_bolder }}>#</span>
              <HexBox style={{ padding: '15px' }} value={textBoxValue} onChange={handleHexChange} className='hexBox' type='text' maxLength='6' data-type='text' {...args}></HexBox>
              <p style={{ margin: '0', borderRadius: '10px', padding: '0 3px 0 3px', position: 'absolute', margin: '5px 0px 0px 13px', backgroundColor: 'black', color: '#FF5733' }}>{terror}</p>
            </div>


            <CounterWrapper style={{ position: "relative", left: "-175px" }}>
              <CounterBox style={{ height: "42px", padding: "0 2px 0 2px" }} onChange={handleFontChange} type='number' value={fontCounterValue} ></CounterBox>
              <ArrowButtonUp style={{ height: "21px" }} data-direction='up' onClick={handleFontClick} />
              <ArrowButtonDown style={{ height: "21px", borderTop: "0", top: "21px" }} data-direction='down' onClick={handleFontClick} />
              <PxSpan>PX</PxSpan>
            </CounterWrapper>

            <div>
              <RadioButtonWrapper {...args} style={{ color: textColor, position: "relative", left: "5px", bottom: "2px"  }}  >
                <HiddenRadioButtonInput type='radio' {...args} />
                <TestCustomRadio {...args} style={{ backgroundColor: 'white'}} onClick={handleBackgroundRadio} checked={radioBackground} />
                Background
              </RadioButtonWrapper>



              <span style={{ position: "relative", left: "15px", zIndex: "2", color: 'white', font: pop_bolder }}>#</span>
              <HexBox style={{ padding: '15px' }} value={backgroundBoxValue} onChange={handleHexChange} data-type='background' className='hexBox' type='text' maxLength='6'  {...args}></HexBox>
              <p style={{ margin: '0', borderRadius: '10px', padding: '0 3px 0 3px', position: 'absolute', margin: '5px 0px 0px 15px', backgroundColor: 'black', color: '#FF5733' }}>{berror}</p>
            </div>
          </div>

          <div style={{ display: 'inherit', backgroundColor: 'transparent', flexDirection: 'row' }}>

            {/* <ColorSlider type='range' className='slider'></ColorSlider> */}
            <HexColorSlider style={{ height: "20px" }} color={sliderColor} onChange={handleSliderChange}></HexColorSlider>

          </div>

          <div style={{ display: 'inherit', backgroundColor: 'transparent', flexDirection: 'row' }}>

            <LumSlider value={lumSlider} color={sliderColor} onChange={handleLumChange} min="0" max="160" className='lumosity' type='range' ></LumSlider>

          </div>

        </ContrastRatioActivity>
      </>
    )
  }

// ContrastRatioPage.args = {
//   checked: false
// }

