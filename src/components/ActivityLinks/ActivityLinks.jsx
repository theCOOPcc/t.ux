import React, { useContext } from 'react';
import { SessionContext } from '../../contexts/SessionContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from '../TuxComponents/utilities';
import * as U from '../../components/TuxComponents/UniversalComponents';

const LinkList = ({ links }) => {
  <ul>
    {links.map((link, index) => (
      <ListLinks>
        <LinkTo noDecor key={index} href={link.url}>
          {link.text}
        </LinkTo>
      </ListLinks>
    ))}
  </ul>;
};

const ActivityLinks = () => {
  const { links } = useContext(SessionContext);
  return (
    <U.Sub6ColGrid>
      <Heading1>More Heuristics Resources</Heading1>
      <FlexBox>
      <Text>
        Don't stop here! There are a lot more ways to learn about accessibility
        and many websites designed to help you better design for accessibility.
      </Text>
      <Heading2>Articles:</Heading2>
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

const ListLinks = styled.li`
  font: var(--table);
  line-height: 24px;
  font-weight: 400;
  color: var(--present);
`;

const Heading1 = styled.h1`
  font: 700 48px 'Poppins', sans-serif;
  line-height: 24px;
  color: var(--extraLg-text);
  text-align: center;
  margin-top: 75px;
`;

const Text = styled.p`
  font: var(--pop-reg);
  line-height: 20px;
  font-size: 24px;
`;

const Heading2 = styled.h2`
  font: var(--table);
  font-weight: 700;
  line-height: 24px;
`;

const LinkTo = styled(Link)`
  color: var(--link-text);
  list-style: none;
`;

