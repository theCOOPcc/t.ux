import React from 'react';
import * as U from '../../../components/TuxComponents/UniversalComponents';

const HeuristicsIntro = ({ sections }) => {
  return (
    <>
      <U.Normal semiBold>&lt;Back</U.Normal>
    <U.Section>
      <U.Heading1 intro>Introduction</U.Heading1>
      <h2>to the 10 Heuristics of UX Design</h2>
      <span>
        <strong>This is not a test.</strong>The following activity is intended
        as an introduction to the 10 Heuristic principles of Usability.
      </span>
      {/* [ ] TODO: Make sure every image has an alt tag that is unique. Probably best to use the name of the image */}
      <img src="" alt="" />
      {/* [ ] TODO: Add line break that spans across the container */}
      <p>
        <strong>
          25 years ago, Jakob Nielsen described the 10 general principles for
          interaction design. These principles were developed based on years of
          experience in the field of usability engineering and they’ve became
          rules of thumb for human-computer interaction.
        </strong>
      </p>
      <p>
        Today, they are just as relevant as they were then. They can help to
        save development teams considerable amounts of time during early
        usability testing, so that they can direct their attention to more
        complex design challenges. In addition, it’s also worth it to use them
        as a checklist when designing a new product or a feature.
      </p>
    </U.Section>
    </>
  );
};

export default HeuristicsIntro;
