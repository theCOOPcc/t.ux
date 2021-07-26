import React, { useState } from "react";
import { Input, Wrapper, Label, Error, ErrorMessage, CharCount1 } from "./mulilineInputFields";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Multiline Input Fields",
  decorators: [withDesign],
};

export const MultilineInputFields = (args) => {
  const [charCount1, setCharCount1] = useState(0);
  const [prevInputValue1, setPrevInputValue1] = useState("");
  const handleOnChange = (e) => {
    let currentValue = e.target.value;
    let charCount = currentValue.length;
    let counter = e.target.dataset.counter;

    if (charCount <= 200) {
      if (counter === "1") {
        setCharCount1(charCount);
        setPrevInputValue1(currentValue);
      }
    } else {
      if (counter === "1") {
        e.target.value = prevInputValue1;
      }
    }
  };
  return (
    <Wrapper {...args}>
      {args.error && <Error {...args} src='/images/ErrorIcon.png' />}
      <Input
        className='multilineInputFields'
        data-counter='1'
        onChange={handleOnChange}
        {...args}
        placeholder={
          args.focus === true
            ? "Input Text"
            : args.active === true
            ? "Input Text"
            : args.error === true
            ? "Wrong Input"
            : null
        }
      />
      <CharCount1 {...args} maxlength='200'>{charCount1}/200</CharCount1>
      <Label {...args}>Label</Label>
      {args.error && <ErrorMessage {...args}>Error Message</ErrorMessage>}
    </Wrapper>
  );
};

MultilineInputFields.args = {
  disabled: false,
  focus: false,
  hover: false,
  active: false,
  error: false,
  medium: false,
  narrow: false,
  wide: false
};
MultilineInputFields.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=228%3A85",
    },
  },
};
