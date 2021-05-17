import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FlexCenter, Flex } from './utilities';

/*---------- Main Grid ----------*/
export const Main = styled.main`
  display: grid;
  grid-template-columns: 6fr 300px;
  grid-template-rows: 60px 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  background: #e9e9e9;
  padding: 20px 39px 15px;
  margin: 0 auto;
  /* position: relative; */
  max-width: 1440px;
`;

/*---------- 6 Col SubGrid for Activities ----------*/
export const Sub6ColGrid = styled.article`
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
  background-color: var(--true-white);
  border: var(--solid-border);
  width: 1042px;
`;

/*---------- FlexBox Components Generic ----------*/
export const FlexBox = styled.div`
  ${FlexCenter};

	${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}

	${(props) =>
    props.flexMargin &&
    css`
      margin: 40px;
    `}

	${(props) =>
    props.signUp &&
    css`
      margin-top: 730px;
      padding-left: 550px;
    `}

	${(props) =>
    props.login &&
    css`
      margin-top: 625px;
      padding-left: 160px;
    `}

	${(props) =>
    props.relative &&
    css`
      position: relative;
    `}
`;

/*---------- Text ----------*/
export const Normal = styled.p`
  font: var(--pop-reg);
  line-height: 20px;

  ${(props) =>
    props.lineTwentySeven &&
    css`
      line-height: 27px;
    `}

  ${(props) =>
    props.sixteen &&
    css`
      font-size: 16px;
      line-height: 24px;
    `}

  ${(props) =>
    props.setup &&
    css`
      margin-bottom: 50px;
    `}

  ${(props) =>
    props.semiBold &&
    css`
      font-weight: 500;
      margin: 0;
    `}

  ${(props) =>
    props.twenty4 &&
    css`
      font-size: 24px;
      line-height: 36px;
    `}

  ${(props) =>
    props.red &&
    css`
      color: var(--tux-red);
    `}

   ${(props) =>
    props.margin &&
    css`
      margin-left: 10px;
      text-align: left;
    `}

  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}

  ${(props) =>
    props.margin50 &&
    css`
      margin-top: 50px;
    `}
`;
/*----- End of Text -----*/


/*---------- Checkbox ----------*/
export const checkedBox = css``;

export const uncheckedBox = css``;

export const Checkbox = styled.div`
  border: var(--input-border);
  width: 20px;
  height: 20px;
  border-radius: 5px;
  margin-right: 5px;

  ${(props) => (props.checked ? checkedBox : uncheckedBox)};
`;


