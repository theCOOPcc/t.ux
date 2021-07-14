import React, { useContext } from 'react';
import { SessionContext } from '../../../contexts/SessionContext';
import styled, { css } from 'styled-components';
import {PrimaryButton} from '../elements';
import { tux_yellow, Flex, present_text, future_text, true_white, text_black, solid_border } from '../utilities';


const SideBarNav = () => {
  const {
    sessionData,
    started,
    finished,
    setStarted,
    setFinished,
    currentSection,
    currentModule,
    handleCurrentSection,
    handleJumpToSection,
    handleCurrentModule,
    currentSectionIndex,
    currentModuleIndex,
  } = useContext(SessionContext);

  const { sections } = sessionData;
  let displayCount, questionCount = 0;
  
  return (
    <SideBarParent>
      <SideBar>
        <ColorBlock></ColorBlock>
        <SideBarTextBox>
          {sections.map((section, index) =>
            index === 0 ? (
              <SideBarText
                past={index < currentSectionIndex ? true : false}
                present={currentSectionIndex === index}
                disabled={index > currentSectionIndex}
                key={index}
                onClick={() => handleJumpToSection(index)}
              >
                {section.name}
              </SideBarText>
            ) : (
              <SideBarText
              {...displayCount = 0}
              {...questionCount = 0}
              past={ index < currentSectionIndex ? true : false}
              present={currentSectionIndex === index}
              disabled={index > currentSectionIndex}
              key={index}
              onClick={() => handleJumpToSection(index)}
              >
                {index}. {section.name}
                
                {section.modules.map((module,idx) => 
                  module.type === 'display' ? 
                 
                  <SubText
                    
                    {...displayCount++}
                    past={(idx < currentModuleIndex && index === currentSectionIndex)|| index < currentSectionIndex ? true : false}
                    present={currentSectionIndex === index && currentModuleIndex === idx}
                    disabled={idx > currentModuleIndex}
                    key={idx}
                    >
                      Learning Material {displayCount} </SubText>
                  :
                    <SubText
                    {...questionCount++}
                    past={(idx < currentModuleIndex && index === currentSectionIndex) || index < currentSectionIndex ? true : false}
                    present={currentSectionIndex === index && currentModuleIndex === idx}
                    disabled={idx > currentModuleIndex}
                    key={idx}
                    >
                      Question {questionCount}
                    </SubText>
                )}
              </SideBarText>
            )
          )}
        </SideBarTextBox>

        {started &&
        currentSectionIndex === sections.length - 1 &&
        currentModuleIndex === currentSection.modules.length - 1 ? (
          <PrimaryButton onClick={() => setStarted(false)}>
            Next
          </PrimaryButton>
        ) : started && currentSectionIndex <= sections.length - 1 ? (
          <PrimaryButton onClick={() => handleCurrentModule()}>
            Next
          </PrimaryButton>
        ) : (
          ''
        )}

        {/* if started is now false and !finished then show Next PrimaryButton , which will change finished to true */}
        {started === false && finished === null && (
          <PrimaryButton onClick={() => setFinished(true)}>
            Next
          </PrimaryButton>
        )}
        {/* if started is false and finished equals false then show end PrimaryButton */}
        {started === false && finished === true && (
          <PrimaryButton>End</PrimaryButton>
        )}
      </SideBar>
    </SideBarParent>
  );
};

export default SideBarNav;


/*---------- 300px Sidebar Parent Grid ----------*/
const SideBarParent = styled.article`
  height: 90vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr 100px;
  border-radius: 5px 5px 0 0;
`;

/*---------- The SideBar Itself ----------*/
const SideBar = styled.article`
  grid-row: 1 / span 1;
  background-color: ${text_white};
  height: calc(100vh - 159px);
  ${Flex({ai:'center',fd:'column'})};
  border: var(--solid-border);
  border-radius: 5px 5px 0 0;
`;

const SideBarTextBox = styled.section`
  height: 100%;
  width: 100%;
  padding: 20px 25px;
  overflow: scroll;
`;

const SideBarText = styled.button`
  background: transparent;
  font: 500 16px 'Poppins', sans-serif;
  line-height: 24px;
  text-align: left;
  color: ${future_text};
  /* color: ${text_black}; */
  border: none;
  border-bottom: ${solid_border};
  width: 239px;
  min-height: 50px;
  height: auto;
  margin: 0 auto;

  ${(props) =>
    props.past &&
    css`
      color: ${text_black};
      /* color: ${future_text} */
      font-weight: 600;
    `}

  ${(props) =>
    props.present &&
    css`
      color: ${present_text};
      font-weight: 700;
    `}
`;

const SubText = styled(SideBarText)`
  margin-left: 61px;
`;

const ColorBlock = styled.div`
  height: 5px;
  background-color: ${tux_yellow};
  height: 10px;
  width: 100%;
  border-radius: 5px 5px 0 0;
`;