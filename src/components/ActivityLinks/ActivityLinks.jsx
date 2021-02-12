import React, { useContext } from 'react';
import { SessionContext } from '../../contexts/SessionContext';
import * as U from '../../components/TuxComponents/UniversalComponents';

const LinkList = ({ links }) => {
  <ul>
    {links.map((link, index) => (
      <U.ListLinks>
        <U.LinkTo noDecor key={index} href={link.url}>
          {link.text}
        </U.LinkTo>
      </U.ListLinks>
    ))}
  </ul>;
};

const ActivityLinks = () => {
  const { links } = useContext(SessionContext);
  return (
    <U.Sub6ColGrid>
      <U.Heading2>More Heuristics Resources</U.Heading2>
      <U.FlexBox column flexStartJC flexMargin>
        <U.Normal twenty4>
          Don't stop here! There are a lot more ways to learn about
          accessibility and many websites designed to help you better design for
          accessibility.
        </U.Normal>
        <U.Heading6>Articles:</U.Heading6>
        <LinkList links={links} />
        {/* <ul>
          {links.map((link, index) => (
            <U.ListLinks>
              <U.LinkTo noDecor key={index} href={link.url}>
                {link.text}
              </U.LinkTo>
            </U.ListLinks>
          ))}
        </ul> */}
      </U.FlexBox>
    </U.Sub6ColGrid>
  );
};

export default ActivityLinks;
