import styled, { css } from 'styled-components'

// Main Container
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

// Texts
export const Title = styled.h1`
    font-size: 80px;
    font-weight: normal;
    margin-bottom: 0;
    `;

export const Enter = styled.h2`
    margin: 0;      
    font-size: 30px;
    line-height: 36.63px;
`;

export const Message = styled.p`
    margin: 0 auto;
    text-align: center;
    line-height: 21.47px;
    width: 300px;
`;

export const loginMessage = styled(Message)`
    text-align: right;
    font-size: 16px;
    margin-top: 14px;
`;

// Generic Input
export const Input = styled.input`
    border-radius: 5px;
    border: var(--input-border);
    background: var(--background-input);
`;

// Inputs with more specific/overriding styles
export const emailInput = styled(Input)`
    width: 260px;
    font-size: 16px;
    padding: 17px 10px;
    margin: 10px 0;
`;

// Button
export const Button = styled.button`
    width: 282px;
    border-radius: 5px;
    background-color: --primary-disabled-btn-color;
    color: --disabled-btn-text-color;
    font-size: 16px;
    padding: 17px 10px;
    border: none;
`;