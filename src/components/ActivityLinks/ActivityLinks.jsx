import React, { useContext } from 'react';
import { SessionContext } from '../../contexts/SessionContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from '../TuxComponents/utilities';
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
      <FlexBox>
      <Text>
        Don't stop here! There are a lot more ways to learn about accessibility
        and many websites designed to help you better design for accessibility.
      </Text>
      <Heading6>Articles:</Heading6>
      <ul>
        {links.map((link, index) => (
          <ListLinks>
            <LinkTo noDecor key={index} href={link.url}>
              {link.text}
            </LinkTo>
          </ListLinks>
        ))}
      </ul>
      </FlexBox>
    </U.Sub6ColGrid>
  );
};

export default ActivityLinks;

const FlexBox = styled.div`
  ${Flex({ai:'center',jc:'center',fd:'column'})};
  margin: 40px
`;

const Text = styled.p`
  font: var(--pop-reg);
  line-height: 20px;
  font-size: 24px;
`;

const Heading6 = styled.h6`
  font: var(--table);
  font-weight: 700;
  line-height: 24px;
`;

const ListLinks = styled.li`
  font: var(--table);
  line-height: 24px;
  font-weight: 400;
  color: var(--present);
`;

const LinkTo = styled(Link)`
  color: var(--link-text);
  list-style: none;
`;