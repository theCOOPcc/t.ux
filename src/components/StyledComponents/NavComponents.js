import styled, {css} from 'styled-components'

export const NavLink = styled.a`
  color: var(--nav-link-color);
  text-decoration: none;
  padding: 10px;

  ${props => props.floatRight && css`
    margin-left: auto;
  `}

  ${props => props.floatLeft && css`
    margin-right: auto;
  `}
`;

export const Nav = styled.div`
  width: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
  height: 80px;
  background-color: var(--nav-background);
`;