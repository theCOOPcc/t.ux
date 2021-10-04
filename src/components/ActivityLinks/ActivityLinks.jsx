import React, { useContext } from 'react';
import { SessionContext } from '../../contexts/SessionContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex, present_text, tux_primart, link_text } from '../TuxComponents/utilities';

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
    <>
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
    </>
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
  color: ${present_text};
`;

const Heading1 = styled.h1`
  font: 700 48px 'Poppins', sans-serif;
  line-height: 24px;
  color: ${tux_primart};
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
  color: ${link_text};
  list-style: none;
`;

