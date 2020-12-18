import styled, {css} from 'styled-components'

export const NavLink = styled.a`
  color: var(--tux-grey);
  font: var(--pop-semi-bold);
  text-decoration: none;
  padding: 10px;

  ${props => props.right && css`
    margin-left: auto;
  `}
`;


export const Logo = styled.img`
  width: 100px;
`;

export const Nav = styled.div`
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 5px 1fr;
`;

export const NavRow2 = styled.div`
  grid-column: 1/span all;
  display: flex;
  justify-content: center;
  align-items: center;
`;
