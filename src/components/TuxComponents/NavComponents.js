import styled, {css} from 'styled-components'

export const Header = styled.header`
  max-width: 1440px;
  height: 80px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 5px 1fr;
  margin: 0 auto;
`;

<<<<<<< HEAD
=======

>>>>>>> a997d3c10784d61fc69e1d94339535fb61e0ab99
export const Logo = styled.img`
  width: 100px;
`;

export const Nav = styled.nav`
  max-width: 1440px;
  grid-column: 1/span all;
  display: flex;
  /* justify-content: center; */
  align-items: center;
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
