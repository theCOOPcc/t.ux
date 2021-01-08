import React from 'react';
import * as U from '../../components/TuxComponents/UniversalComponents'


// Going to be the TUX landing page.
// On hold for now.

const Landing = (props) => {
    return (
      <React.Fragment>
        <U.FlexBox wide tuxStyled column >
                <img src='/images/vertical-logo.svg' alt='tux-logo' />
            <U.Normal twenty4 greyed>
                A new way to help power the UX Learning Experience
            </U.Normal>
            <a href='http://www.thecoop.cc'>
                <U.WideBtn teal>More Information</U.WideBtn>
            </a>
            <br></br>
            <U.Normal twenty4 greyed>Coming Soon!</U.Normal>
        </U.FlexBox>
      </React.Fragment>
    )
}

export default Landing;
 