import React, { useContext } from 'react';
import { SessionContext } from '../../../contexts/SessionContext';
import styled, { css } from 'styled-components';
import {Button280, SideBarAllText,SubText, DotContainer, Dot, SubContainer, SubDot, HeadingIntro, NUmHeadContainer} from '../elements';
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
              <HeadingIntro className="HeadingIntro"
                past={index < currentSectionIndex ? true : false}
                present={currentSectionIndex === index}
                disabled={index > currentSectionIndex}
                key={index}
                onClick={() => handleJumpToSection(index)}
              >
                {section.name}
              </HeadingIntro>
            ) : (
              
              <SideBarAllText className="subHead"
              {...displayCount = 0}
              {...questionCount = 0}
              past={ index < currentSectionIndex ? true : false}
              present={currentSectionIndex === index}
              disabled={index > currentSectionIndex}
              key={index}
              onClick={() => handleJumpToSection(index)}
              > <NUmHeadContainer>
                {index}. {section.name}
                </NUmHeadContainer>
                
                {section.modules.map((module,idx) => 
                  module.type === 'display' ? 
                
                 
                 
                  <SubDot className="Heading-Container">
                    <DotContainer><Dot className="Dot"></Dot>
                    </DotContainer>
                  <SubText className="subHeading"
                    
                    {...displayCount++}
                    past={(idx < currentModuleIndex && index === currentSectionIndex)|| index < currentSectionIndex ? true : false}
                    present={currentSectionIndex === index && currentModuleIndex === idx}
                   
                    disabled={idx > currentModuleIndex}
                    key={idx}
                    > 
                     
                     

                      Learning Material {displayCount} </SubText> 
                     
                  </SubDot>
                  :
                  <SubDot className="Heading-Container">
                     <DotContainer><Dot className="Dot"></Dot>
                    </DotContainer>
                    <SubText
                    {...questionCount++}
                    past={(idx < currentModuleIndex && index === currentSectionIndex) || index < currentSectionIndex ? true : false}
                    present={currentSectionIndex === index && currentModuleIndex === idx}
                    disabled={idx > currentModuleIndex}
                    key={idx}
                    > 
                     
                      Question {questionCount}
                    </SubText>
                  </SubDot>                  
                   )}
                   </SideBarAllText>
             
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
  background-color: ${true_white};
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

// const SideBarText = styled.button`
//   background: transparent;
//   position: relative;
//   font-family:  'Poppins', sans-serif;
//   font-size: 16px;
//   line-height: 24px;
//   text-align: left;
//   color: ${future_text};
//   /* color: ${text_black}; */
//   border: none;
//   // border-bottom: ${solid_border};
//   width: 191px;
//   min-height: 50px;
//   height: auto;
//   margin: 0 auto;
//   // border: black 3px solid;
//   padding: 0.5rem 1rem ;
//   }

//   ${(props) =>
//     props.past &&
//     css`
//       color: ${text_black};
//       /* color: ${future_text} */
//       font-weight: 600;
//     `}

//   ${(props) =>
//     props.present &&
//     css`
//       color: ${present_text};
//       font-weight: 600;
//     `}
// `;



// const SubText = styled(SideBarText)`
//   margin-left: 61px;
//   font-size: 14px;
//   padding-left: 13.57px;
//   border-bottom: ${solid_border};
//   ${(props) =>
//     props.present &&
//     css`
//     background-color: rgba(243, 120, 6, 0.1);
//     color: ${text_black};

   
//     `}
  
    
// `;

// const Dot = styled.div`
// height: 8px;
//  width:8px;
//  border-radius: 50%;
//  background-color:  #F37806;
// ${(props) =>
//   props.present &&
//   css`
 
 

 
//   `} `;

const ColorBlock = styled.div`
  height: 5px;
  background-color: ${tux_yellow};
  height: 10px;
  width: 100%;
  border-radius: 5px 5px 0 0;
`;