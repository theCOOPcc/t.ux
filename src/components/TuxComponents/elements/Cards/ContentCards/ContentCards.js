import React from 'react';
import styled from 'styled-components';
import { tux_blue, pop_semiBold, pop_reg } from '../../../utilities';

// Scenario
export const ScenarioTopBar = styled.div`
    width: 941px;
    height: 21.63px;
    background: #ffe45c;
    margin-bottom: 0;
`;

export const ScenarioBox = styled.div`
    width: 941px;
    height: 296px;
    background: rgba(255,228,92,0.2);
    margin-top: 0;
    padding: 50px 25px ;

    img {
        width: 200px;
        height: 215px;
        box-shadow: -15px 20px #666666;
        grid-area: 1 / 2 / 2 / 3;
    }
`;

export const ScenarioGrid = styled.div`
    display: grid;
    grid-template-columns: 600px 241px;

`;

export const ScenarioHeader = styled.p`
    font: ${pop_semiBold};
    font-size: 24px;
    line-height: 24px;

`;

export const ScenarioText = styled.p`
    font: ${pop_reg};
    font-size: 16px;
    line-height: 24px;
    grid-area: 1 / 1 / 2 / 2;
`;

// Bulleted Box

export const BulletTextTopBar = styled.div`
    width: 941px;
    height: 21.63px;
    background: ${tux_blue};
    margin-bottom: 0;
`;

export const BulletTextBox = styled.div`
    width: 941px;
    height: 296px;
    background: rgba(120,214,218,0.2);
    margin-top: 0;
    padding: 1% 4% ;
`;

export const BulletTextHeader = styled.p`
    font: ${pop_semiBold};
    font-size: 24px;
    line-height: 24px;

`;

export const BulletTextSubHeader = styled.p`
    font: ${pop_reg};
    font-size: 24px;
    line-height: 24px;
`;

export const BulletTextListItem = styled.li`
    font: ${pop_reg};
    font-size: 16px;
    /* line-height: 24px; */
`;
