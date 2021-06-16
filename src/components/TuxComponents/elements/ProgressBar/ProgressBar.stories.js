import React from "react";
import  {ProgressContainer, ProgressFiller, ProgressLabel}  from "./ProgressBar";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Progress_Bar",
  decorators: [withDesign],
};

export const Progress_Bar = (args) => (
    <>
      <ProgressContainer className = "ProgressBar"> 
       <ProgressFiller {...args}></ProgressFiller>
       <ProgressLabel {...args}>
         {
         args.zero === true?
         "Not Started" : args.half === true?
         "50%" : args.done === true?
         "100% Complete!": ""
         
         }
        </ProgressLabel>  
        
      </ProgressContainer>
      
    </>
)

Progress_Bar.args = {
    zero: false,
    half: false,
    done: false
}


Progress_Bar.story = {
    parameters: {
      design: {
        type: "figma",
        url:
          "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=287%3A3",
      },
    },
  };