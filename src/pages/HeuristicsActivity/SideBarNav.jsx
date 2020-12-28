import React from 'react';
import * as U from '../../components/TuxComponents/UniversalComponents';

const SideBarNav = ({
  sections,
  currentSectionIndex,
  currentQuestionIndex,
  handleCurrentSection,
  handleCurrentQuestion,
  handleJumpToSection,
}) => {
  const currentSection = sections[currentSectionIndex]
  return (
    <U.SideBarParent>
      <U.SideBar>
        <U.ColorBlock SideBarYellow></U.ColorBlock>
        {/* [x] Map through side bar nav links. */}
        {/* [x] A nav item will also have to update the current section of the parent component */}
        {/* [x] The nav items need to be in a column with a spacing between and a styled line break.  */}
        {/* [x] The buttons below need to change to another componet type, they need to be able to have an onclick property and look like an anchor tag but we dont need the href functionality of an anchor tag. They also will need to be able to change color based off of whether or not their index matches the currentSectionIndex property which is destructured above.*/}
        {/* [x] Need conditional so Introduction (index 0) is not numbered. Numbering begins with first item after intro*/}
        {sections.map((section, index) => (
          (index === 0) ?
            <U.SideBarText key={index} onClick={() => handleJumpToSection(index)}>
            {section.name}
          </U.SideBarText>
          :
          <U.SideBarText key={index} onClick={() => handleJumpToSection(index)}>
            {index}. {section.name}
          </U.SideBarText>
        ))}
      </U.SideBar>
      {/* [x] Render different button if lesson has already began */}
      {/* [x] Button should update parent component state, update current section. */}
      {currentSectionIndex ? (
        // is currentQuestionIndex greater than or equal to 0? and is that index <= the value of the length of the currentSection.questions?
        // [] TODO: Fix bug where blank screen is rendered even when no more questions in the array.
        
        currentQuestionIndex < currentSection.questions.length - 1
        ?
         (<U.WideBtn enable onClick={() => handleCurrentQuestion(currentSection)}>Next</U.WideBtn> )
         : 
         (<U.WideBtn enable onClick={() => handleCurrentSection()}>Next</U.WideBtn>)
      ) : (
        <U.WideBtn enable onClick={() => handleCurrentSection()}>Begin</U.WideBtn>
      )}
    </U.SideBarParent>
  );
};

export default SideBarNav;
