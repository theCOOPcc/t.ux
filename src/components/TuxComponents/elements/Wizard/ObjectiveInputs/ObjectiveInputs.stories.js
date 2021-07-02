import React, {useState} from 'react'
import {ComponentWrapper, ObjectInput1, ObjectInput2, ObjectInput3, BulletPoint1, BulletPoint2,BulletPoint3, CharCount1, CharCount2, CharCount3, InputWrapper1, InputWrapper2, InputWrapper3} from './ObjectiveInputs'
import { withDesign } from "storybook-addon-designs";
import BulletPoint from '../../../../../images/ActivityWizardImgs/BulletPoint.svg'
export default {
  title: "Activity Wizard",
  decorators: [withDesign],
};



export const ObjInputs = () => { 
  const [charCount1, setCharCount1] = useState(0);
  const [charCount2, setCharCount2] = useState(0);
  const [charCount3, setCharCount3] = useState(0);

  const [prevInputValue1, setPrevInputValue1] = useState('');
  const [prevInputValue2, setPrevInputValue2] = useState('');
  const [prevInputValue3, setPrevInputValue3] = useState('');


  const handleOnChange = (e) => {
    let currentValue = e.target.value;
    let charCount = currentValue.length 
    let counter = e.target.dataset.counter;

    if (charCount <= 200) {
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
  <ComponentWrapper>
    <BulletPoint1 src={BulletPoint} />
    <BulletPoint2 src={BulletPoint} />
    <BulletPoint3 src={BulletPoint} />

    <InputWrapper1>
    <ObjectInput1 data-counter='1' onChange={handleOnChange} placeholder='Objective 1' />

    <CharCount1 maxlength='200' >{charCount1}/200</CharCount1>
    </InputWrapper1>

    <InputWrapper2>
    <ObjectInput2 data-counter='2' onChange={handleOnChange} placeholder='Objective 2' />
    <CharCount2 maxlength='200' >{charCount2}/200</CharCount2>
    </InputWrapper2>

    <InputWrapper3>
    <ObjectInput3 data-counter='3' onChange={handleOnChange} placeholder='Objective 3' />
    <CharCount3 maxlength='200' >{charCount3}/200</CharCount3>
    </InputWrapper3>
  </ComponentWrapper>
)}