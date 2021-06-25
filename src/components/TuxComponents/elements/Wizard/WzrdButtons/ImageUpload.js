import styled, {css} from 'styled-components'

export const PlaceholderImg = styled.img`
  ${(props) =>
    props.hover &&
    css`
      filter: blur(4px);
    `}
  ${(props) =>
    props.pressed &&
    css`
      filter: blur(4px);
    `}
`;

export const ToolbarImg = styled.img`
&:hover {
  background: url('./images/page_button_toolbar.svg');
}
  ${(props) =>
    props.hover &&
    css`
      opacity: 1;
      position: absolute;
      width: 96px;
      flex: none;
      height: 33px;
      top: 8px;
      z-index: 1;
    `}
`;