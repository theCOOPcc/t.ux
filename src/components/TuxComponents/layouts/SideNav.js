import React, { useContext, useEffect, useState } from 'react';
import { SessionContext } from '../../../contexts/SessionContext';
import styled, { css } from 'styled-components';
import {
	PrimaryButton,
	SideBarAllText,
	SubText,
	DotContainer,
	Dot,
	SubDot,
	HeadingIntro,
	NUmHeadContainer,
} from '../elements';
import {
	tux_yellow,
	Flex,
	present_text,
	future_text,
	true_white,
	text_black,
	solid_border,
	disable_btn,
	tux_white,
} from '../utilities';

const SideBarNav = () => {
	const [module, setModule] = useState(0);
	const {
		sessionData,
		started,
		completed,
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
		incrementModuleIndex,
		updateSessionData,
		addAttempt,
		handleResponse,
		disable,
		setDisable,
	} = useContext(SessionContext);

	const { sections } = sessionData;
	let displayCount,
		questionCount = 0;

	useEffect(() => {
		let parsedModule = parseInt(localStorage.getItem('module') || 0);
		handleJumpToSection(parsedModule);
		setModule(parsedModule);
	}, []);

	useEffect(() => {
		localStorage.setItem('module', currentSectionIndex);
	}, [currentSectionIndex]);

	return (
		<SideBarParent>
			<SideBar>
				<ColorBlock></ColorBlock>
				<SideBarTextBox>
					{sections.map((section, index) =>
						index === 0 ? (
							<HeadingIntro
								past={index < currentSectionIndex ? true : false}
								present={currentSectionIndex === index}
								disabled={index > currentSectionIndex}
								key={index}
								// onClick={() => handleJumpToSection(index)}
							>
								{section.name}
							</HeadingIntro>
						) : (
							<SideBarAllText
								{...(displayCount = 0)}
								{...(questionCount = 0)}
								past={index < currentSectionIndex ? true : false}
								present={currentSectionIndex === index}
								disabled={index > currentSectionIndex}
								key={index}
								// onClick={() => handleJumpToSection(index)}
							>
								{' '}
								<NUmHeadContainer>
									{index}. {section.name}
								</NUmHeadContainer>
								{section.modules.map((module, idx) =>
									module.type === 'display' ? (
										<SubDot>
											<DotContainer>
												<Dot
													present={
														currentSectionIndex === index &&
														currentModuleIndex === idx
													}
												></Dot>
											</DotContainer>
											<SubText
												{...displayCount++}
												past={
													(idx < currentModuleIndex &&
														index === currentSectionIndex) ||
													index < currentSectionIndex
														? true
														: false
												}
												present={
													currentSectionIndex === index &&
													currentModuleIndex === idx
												}
												disabled={idx > currentModuleIndex}
												key={idx}
											>
												Learning Material {displayCount}{' '}
											</SubText>
										</SubDot>
									) : (
										<SubDot>
											<DotContainer>
												<Dot
													present={
														currentSectionIndex === index &&
														currentModuleIndex === idx
													}
												></Dot>
											</DotContainer>
											<SubText
												{...questionCount++}
												past={
													(idx < currentModuleIndex &&
														index === currentSectionIndex) ||
													index < currentSectionIndex
														? true
														: false
												}
												present={
													currentSectionIndex === index &&
													currentModuleIndex === idx
												}
												disabled={idx > currentModuleIndex}
												key={idx}
											>
												Question {questionCount}
											</SubText>
										</SubDot>
									)
								)}
							</SideBarAllText>
						)
					)}
				</SideBarTextBox>

				{started &&
				currentSectionIndex === sections.length - 1 &&
				currentModuleIndex === currentSection.modules.length - 1 ? (
					<PrimaryButton
						onClick={() => setStarted(false)}
						style={{
							backgroundColor: disable && disable_btn,
							color: disable && tux_white,
						}}
					>
						Continue
					</PrimaryButton>
				) : started && currentSectionIndex <= sections.length - 1 ? (
					<PrimaryButton
						onClick={() => handleCurrentModule()}
						style={{
							backgroundColor: disable && disable_btn,
							color: disable && tux_white,
						}}
						disabled={disable}
					>
						Continue
					</PrimaryButton>
				) : (
					''
				)}
				{/* if started is now false and !finished then show Next PrimaryButton , which will change finished to true
        {started === false && finished === null && (
          <PrimaryButton onClick={() => setFinished(true)}>Next</PrimaryButton>
        )} */}
        {started === false && currentSectionIndex === 10 && finished === null && (
          <a href='javascript:history.back()'>
            <PrimaryButton onClick={() => localStorage.setItem("module", -1)}>
              End
            </PrimaryButton>
          </a>
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
	${Flex({ ai: 'center', fd: 'column' })};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px 5px 0 0;
	overflow-x: hidden;
`;

const SideBarTextBox = styled.section`
	height: 100%;
	width: 100%;
	padding: 20px 25px;
	overflow: scroll;
`;

const ColorBlock = styled.div`
	height: 5px;
	background-color: ${tux_yellow};
	height: 10px;
	width: 100%;
	border-radius: 5px 5px 0 0;
`;
