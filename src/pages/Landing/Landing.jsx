import React from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../../components/TuxComponents/elements';
import { Flex, pop_reg, grey_text, backgroundGradient  } from '../../components/TuxComponents/utilities';


// Going to be the TUX landing page.
// On hold for now.

const Landing = (props) => {
    return (
      <React.Fragment>
        <Box>
          <img src='/images/vertical-logo.svg' alt='tux-logo' />
          <Text>
            A new way to help power the UX Learning Experience
          </Text>
          <a href='http://www.thecoop.cc'>
            <PrimaryButton>More Information</PrimaryButton>
          </a>
          <br></br>
          <Text>Coming Soon!</Text>
        </Box>
      </React.Fragment>
    )
}

export default Landing;
 
const Box = styled.div`
    ${Flex({ai:'center',jc:'center',fd:'column'})};
    background: ${backgroundGradient};
      background-blend-mode: normal, multiply;
      height: 100vh;

`;

const Text = styled.p`
    font: ${pop_reg};
    line-height: 20px;
    font-size: 24px;
    color: ${grey_text};
`;