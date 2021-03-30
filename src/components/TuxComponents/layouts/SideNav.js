import React, { useContext } from 'react';
import { SessionContext } from '../../contexts/SessionContext';
import styled, { css } from 'styled-components';
import {Button280} from '../TuxComponents/elements';
import { tux_yellow, Flex, present_text, future_text, text_white, text_black, solid_border } from '../TuxComponents/utilities';


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
                key={index}
                onClick={() => handleJumpToSection(index)}
              >
                {section.name}
              </SideBarText>
            ) : (
              <SideBarText
              past={ index < currentSectionIndex ? true : false}
              present={currentSectionIndex === index}
              key={index}
              onClick={() => handleJumpToSection(index)}
              >
                {index}. {section.name}
                {section.modules.map((module,idx) => 
                  module.type === 'display' ?
                    <SubText
                    past={(idx < currentModuleIndex && index === currentSectionIndex)|| index < currentSectionIndex ? true : false}
                    present={currentSectionIndex === index && currentModuleIndex === idx}
                    key={idx}
                    >
                      Learning Material </SubText>
                  :
                    <SubText
                    past={(idx < currentModuleIndex && index === currentSectionIndex)|| index < currentSectionIndex ? true : false}
                    present={currentSectionIndex === index && currentModuleIndex === idx}
                    key={idx}
                    >
                      Question 
                    </SubText>
                )}
              </SideBarText>
            )
          )}
        </SideBarTextBox>

        {started &&
        currentSectionIndex === sections.length - 1 &&
        currentModuleIndex === currentSection.modules.length - 1 ? (
          <Button280 onClick={() => setStarted(false)}>
            Next
          </Button280>
        ) : started && currentSectionIndex <= sections.length - 1 ? (
          <Button280 onClick={() => handleCurrentModule()}>
            Next
          </Button280>
        ) : (
          ''
        )}

        {/* if started is now false and !finished then show Next Button280 , which will change finished to true */}
        {started === false && finished === null && (
          <Button280 onClick={() => setFinished(true)}>
            Next
          </Button280>
        )}
        {/* if started is false and finished equals false then show end Button280 */}
        {started === false && finished === true && (
          <Button280>End</Button280>
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