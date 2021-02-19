
import React, { useContext } from 'react';
import { ManagerContext } from '../../contexts/ManagerContext';
import { Flex, solid_border, tux_blue, Poppins, grey_text, pop_reg } from '../TuxComponents/utilities'
import styled, { css } from 'styled-components';

const ManagerStudentResults = () => {
  const { results } = useContext(ManagerContext);
  return (
    <OutsideBox>
      <ColorBlock />
      <Heading3>
        Student Results
      </Heading3>
      {results ? (
        <>
          <Text>
            {results}
          </Text>
        </>
      ) : (
        <>
          <Box>
            <Text>
              You Have No Results Yet.
              <br></br>
              Invite Students to an Activity to see their Progress.
            </Text>
          </Box>
        </>
      )}
    </OutsideBox>
  );
};

export default ManagerStudentResults;


const OutsideBox = styled.article`
    max-width: 1440px;
    /* ${Flex({jc:'center',ai:'center',fd:'column'})}; */
    border: ${solid_border};
    border-radius: 5px;
    /* margin: 10px 60px 10px 60px; */
    margin: 0 auto 22px;
    width: 100%;
    padding-bottom: 20px;
`;

const ColorBlock = styled.div`
    height: 10px;
    background: ${tux_blue};
    width: 100%;
`;

const Heading3 = styled.h3`
    font: ${Poppins};
    font-weight: 600;
    line-height: 36px;
    margin-left: 30px;
    text-align: left;
`;

const Text = styled.p`
    text-align: center;
    font: ${pop_reg};
    line-height: 20px;
    /* margin-left: 45px; */
    color: ${grey_text};

    ${props => props.center && css`
    `}
`;

const Box = styled.div`
    ${Flex({ai:'center'})};
    margin: 0 33px;
`;