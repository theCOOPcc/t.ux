import React from 'react';
import styled from 'styled-components';
import { Button280 } from '../../components/TuxComponents/elements';
import { Flex, pop_reg, grey_text  } from '../../components/TuxComponents/utilities';
import * as U from '../../components/TuxComponents/UniversalComponents'


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
            <Button280>More Information</Button280>
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
    background: linear-gradient(
          210.65deg,
          rgba(255, 238, 153, 0.32) 17.3%,
          rgba(122, 218, 222, 0.32) 87.56%
        ),
        linear-gradient(
          19.08deg,
          rgba(234, 74, 70, 0.32) -33.26%,
          rgba(234, 74, 70, 0) 67.74%
        );
      background-blend-mode: normal, multiply;
      height: 100vh;

`;

const Text = styled.p`
    font: ${pop_reg};
    line-height: 20px;
    font-size: 24px;
    color: ${grey_text};
`;