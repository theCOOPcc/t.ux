import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import MotivationBox from '../../components/TuxComponents/elements/MotiviationBox/MotivationBox';
import HelpCard from '../../components/TuxComponents/elements/HelpCard/HelpCard';
import { ColorBlock } from '../../components/TuxComponents/elements/ColorBlock/ColorBlock';
import { PageBackground } from '../../components/TuxComponents/elements/PageBackgrounds/PageBackgrounds';
import { pop_semiBold } from '../../components/TuxComponents/utilities';
import { BackButton } from '../../components/TuxComponents/elements/PageBackgrounds/PageBackgrounds';

// title,description
function HelpCardDisplay(props) {
    if (!props.show) {
        return null;
    }
    return (
        <CardContainer {...props}>
        <HelpCard {...props}/>
        </CardContainer>
    );
}


class HelpPage extends Component {
    constructor(props){
        super(props);
        this.state = {displayCard: false};
        this.state = {helpindex: null};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }


    handleToggleClick(e){
        debugger;
        this.setState({displayCard: !this.state.displayCard});
        this.setState({helpindex: e.currentTarget.dataset.index});
        
    }
    

    render(){
        
    return (
        <PageBackground>
        <Main>
        <ColorBlock />
        <a href='javascript:history.back()'>
        <BackButton>&lt;Back</BackButton>
        </a>
        <TextBlock>Pick your motivation for learning UX:</TextBlock>
        <ContentContainer>
        <div>
        <MotivationBoxContainer onClick={this.handleToggleClick} data-index='0'>
        <MotivationBox puzzle title={'Hobby'}/>
        </MotivationBoxContainer>

        <MotivationBoxContainer onClick={this.handleToggleClick} data-index='1'>
        <MotivationBox pencil title={'Career change'}/>
        </MotivationBoxContainer>

        <MotivationBoxContainer onClick={this.handleToggleClick} data-index='2'>
        <MotivationBox brief title={'To boost my career'}/>
        </MotivationBoxContainer>

        <MotivationBoxContainer onClick={this.handleToggleClick} data-index='3'>
        <MotivationBox education title={'Continuing education'}/>
        </MotivationBoxContainer>
        </div>
        {this.state.displayCard ? <HelpCardDisplay helpindex={this.state.helpindex} show={this.state.displayCard}/> : null} 
        </ContentContainer>
        </Main>
        </PageBackground>
    );
    };
};

export default HelpPage;

const Main = styled.main`
margin: 0 auto;
max-width: 1440px;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 4px 9px rgb(0 0 0 / 25%);
  height: 62%;
  width: 60%;
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 2.3rem 0 2.3rem;
`;

const TextBlock = styled.p`
font: ${pop_semiBold};
margin-left: 4.6rem;
`;

const CardContainer = styled.div`

`;

const MotivationBoxContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 0 2.3rem 1.35rem 2.3rem;


`;

