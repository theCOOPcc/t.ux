import React, {useState} from 'react'
import {ComponentWrapper, ObjectInput1, ObjectInput2, ObjectInput3, BulletPoint1, BulletPoint2,BulletPoint3, CharCount1, CharCount2, CharCount3, InputWrapper1, InputWrapper2, InputWrapper3, TextHead, TextSub, Error, ErrorMessage} from './ObjectiveInputs'
import { tux_red, tux_black, warning } from '../../../utilities/Colors'
import { Poppins } from '../../../utilities/Type'
import BulletPoint from '../../../../../images/ActivityWizardImgs/BulletPoint.svg'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Activity Wizard",
  decorators: [withDesign],
};



export const ObjInputs = (args) => { 
  const [charCount1, setCharCount1] = useState(0);
  const [charCount2, setCharCount2] = useState(0);
  const [charCount3, setCharCount3] = useState(0);

  const [prevInputValue1, setPrevInputValue1] = useState('');
  const [prevInputValue2, setPrevInputValue2] = useState('');
  const [prevInputValue3, setPrevInputValue3] = useState('');


  const handleOnChange = (e) => {
    let currentValue = e.target.value;
    let charCount = currentValue.length; 
    let counter = e.target.dataset.counter;

    // Error State  Styling Variables
    let warning1 = document.querySelector('#warning-1');
    let warning2 = document.querySelector('#warning-2');
    let warning3 = document.querySelector('#warning-3');

    // Textareas
    let text1 = document.querySelector('#text-1');
    let text2 = document.querySelector('#text-2');
    let text3 = document.querySelector('#text-3');

    // The actual numbers inside the input
    let counter1 = document.querySelector('.counter-1');
    let counter2 = document.querySelector('.counter-2');
    let counter3 = document.querySelector('.counter-3');

    // Red Exclimation Icon
    let error1 = document.querySelector('.error1');
    let error2 = document.querySelector('.error2');
    let error3 = document.querySelector('.error3');

    if (charCount1 >= 200) {
      warning1.innerText = "Maximum Character Reached";
      text1.style.borderColor= tux_red;
      counter1.style.color = tux_red;
      error1.style.display = 'block'
    }
      else {
        warning1.innerText = '';
        text1.style.borderColor=tux_black;
        counter1.style.color = tux_black;
        error1.style.display = 'none'
      }
    if (charCount2 >= 200) {
      warning2.innerText = "Maximum Char. Reached"
      text2.style.borderColor=tux_red;
      counter2.style.color = tux_red;
      error2.style.display = 'block'
    }
      else {
        warning2.innerText = ''
        text2.style.borderColor=tux_black;
        counter2.style.color = tux_black;
        error2.style.display = 'none'
      }
    if (charCount3 >= 200) {
      warning3.innerText = "Maximum Char. Reached"
      text3.style.borderColor=tux_red;
      counter3.style.color = tux_red;
      error3.style.display = 'block'
    }
      else {
        warning3.innerText = ''
        text3.style.borderColor=tux_black;
        counter3.style.color = tux_black;
        error3.style.display = 'none'
      }

    if (charCount <= 200) {
      if(charCount >= 118) {
        e.target.style.paddingTop = '10px'
      } else {
        e.target.style.paddingTop = '20px'
      }
      if(counter === '1') {
        setCharCount1(charCount)
        setPrevInputValue1(currentValue)
      } else if (counter === '2') {
        setCharCount2(charCount)
        setPrevInputValue2(currentValue)
      } else {
        setCharCount3(charCount)
        setPrevInputValue3(currentValue)
      }
    } else {
      if(counter === '1') {
        e.target.value = prevInputValue1
      } else if (counter === '2') {
        e.target.value = prevInputValue2
      } else {
        e.target.value = prevInputValue3
      }
    }
  }
  
  return (
  <ComponentWrapper className='objective-inputs'>
    <TextHead>Objectives</TextHead>
    <TextSub>At the end of this activity you will be able to:</TextSub>
    {/* Input Bullet Points 'position: absolute'  */}
    <BulletPoint1 src={BulletPoint} />
    <BulletPoint2 src={BulletPoint} />
    <BulletPoint3 src={BulletPoint} />

    <InputWrapper1>
     <Error className='error1' {...args} src='/images/ErrorIcon.png' />
    <ObjectInput1 id='text-1'  data-counter='1' onChange={handleOnChange} placeholder='Objective 1' />
    <div style={{height: '5px', color: tux_red, fontSize: '15px', fontFamily: Poppins,marginLeft:'17px'}} id='warning-1'></div>

    <CharCount1 style={{marginRight: '3px',marginBottom: '3px'}} className='counter-1' maxlength='200' >{charCount1}/200</CharCount1>
    </InputWrapper1>

    <InputWrapper2>
    <Error className='error2' {...args} src='/images/ErrorIcon.png' />
    <ObjectInput2 id='text-2' data-counter='2' onChange={handleOnChange} placeholder='Objective 2' />
    <div style={{height: '5px', color: tux_red, fontSize: '15px',fontFamily: Poppins, marginLeft:'17px'}} id='warning-2'></div>

    <CharCount2 style={{ marginBottom: '3px',marginRight: '3px'}} className='counter-2' maxlength='200' >{charCount2}/200</CharCount2>
    
    </InputWrapper2>

    <InputWrapper3>
    <Error className='error3' {...args} src='/images/ErrorIcon.png' />
    <ObjectInput3 id='text-3' data-counter='3' onChange={handleOnChange} placeholder='Objective 3' />

    <div style={{height: '5px', color: tux_red, fontSize: '15px',fontFamily: Poppins,marginLeft:'17px'}} id='warning-3'></div>
    <CharCount3 style={{ marginBottom: '3px',marginRight: '3px'}} className='counter-3' maxlength='200' >{charCount3}/200</CharCount3>
    
    </InputWrapper3>
  </ComponentWrapper>
)}

ObjInputs.args = {
  error: false,
}