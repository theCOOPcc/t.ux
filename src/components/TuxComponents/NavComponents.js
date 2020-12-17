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
  background-color: var(--nav-background);
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 5px 1fr;
 
`;



