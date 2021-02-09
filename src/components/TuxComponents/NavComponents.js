import styled, {css} from 'styled-components'
import { FlexCenter } from './utilities';

export const Header = styled.header`
  max-width: 1440px;
  height: 80px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 5px 1fr;
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const Nav = styled.nav`
  max-width: 1440px;
  grid-column: 1/span all;
  ${FlexCenter};
  padding: 0 40px;
  border-bottom: var(--nav-border);
`;

export const NavLink = styled.a`
  color: var(--tux-grey);
  font: var(--pop-semi-bold);
  text-decoration: none;
  padding: 15px;

  ${props => props.right && css`
    margin-left: auto;
  `}
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
