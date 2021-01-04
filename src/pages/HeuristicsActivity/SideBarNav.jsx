import React from 'react';
import * as U from '../../components/TuxComponents/UniversalComponents';

const SideBarNav = ({
  sections,
  currentSection,
  currentSectionIndex,
  currentModule,
  currentModuleIndex,
  handleJumpToSection,
  handleCurrentSection,
  handleCurrentModule,
}) => {
  return (
    <U.SideBarParent>
      <U.SideBar>
        <U.ColorBlock SideBarYellow></U.ColorBlock>
        {sections.map((section, index) =>
          index === 0 ? (
            <U.SideBarText
              key={index}
              onClick={() => handleJumpToSection(index)}
            >
              {section.name}
            </U.SideBarText>
          ) : (
            <U.SideBarText
              key={index}
              onClick={() => handleJumpToSection(index)}
            >
              {index}. {section.name}
            </U.SideBarText>
          )
        )}
        {currentSection.name === 'Introduction' ? (
          <U.WideBtn enable onClick={() => handleJumpToSection(1)}>
            Begin
          </U.WideBtn>
        ) : currentSectionIndex < sections.length - 1 ? (
          <U.WideBtn enable onClick={() => handleCurrentModule()}>
            Next
          </U.WideBtn>
        ) : (
          <U.WideBtn enable onClick={() => handleCurrentModule()}>
            Submit
          </U.WideBtn>
        )}
      </U.SideBar>
    </U.SideBarParent>
  );
};

export default SideBarNav;
