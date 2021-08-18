import React from 'react';
import styled, { css } from 'styled-components';
import MotivationBox from '../../components/TuxComponents/elements/MotiviationBox/MotivationBox';
import HelpCard from '../../components/TuxComponents/elements/HelpCard/HelpCard';
import { ColorBlock } from '../../components/TuxComponents/elements/ColorBlock/ColorBlock';
import { PageBackground } from '../../components/TuxComponents/elements/PageBackgrounds/PageBackgrounds';
import { pop_semiBold } from '../../components/TuxComponents/utilities';
import { BackButton } from '../../components/TuxComponents/elements/PageBackgrounds/PageBackgrounds';



const HelpPage = ({ }) => {
    
    return (
        <PageBackground>
        <Main>
        <ColorBlock />
        <a href='javascript:history.back()'>
        <BackButton>&lt;Back</BackButton>
        </a>
        <TextBlock>Pick your motivation for learning UX:</TextBlock>
        <ContentContainer>
        <MotivationBox></MotivationBox>
        <HelpCard/>
        </ContentContainer>
        </Main>
        </PageBackground>
    );
};

export default HelpPage;

const Main = styled.main`
margin: 0 auto;
max-width: 1440px;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 4px 9px rgb(0 0 0 / 25%);
  height: 600px;
  width: 60%;
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 2.3rem 0 2.3rem;
`;

const TextBlock = styled.p`
font: ${pop_semiBold};
padding-left: 2.3rem;
`;