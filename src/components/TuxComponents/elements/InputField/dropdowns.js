import React, { Component } from "react";
import styled from "styled-components";
import { dark_grey, medium_grey, pop_reg, pop_semiBold, tux_primart, global_box_shadow, subA_color, subA_hover_bg, subA_bg } from "../../utilities";

export const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border-radius: 10px;
  width: 280px;
  height: 48px;
  &:hover {
      border-radius: 10px 10px 0px 0px;
  }
`;

export const StyledLi = styled.li`
  text-align: center;
  cursor: pointer;
`;


export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  width: 280px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px ${global_box_shadow};
  z-index: 1;
`;

export const DropDownLi = styled(StyledLi)`
  display: inline-block;
  width: 280px;
  
  &:hover ${DropDownContent} {
    display: block;
  }
`;

export const SubA = styled.a`
  color: ${subA_color};
  padding: 12px 16px;
  background-color: ${subA_bg};
  text-decoration: none;
  display: block;
  text-align: left;
  font: ${pop_reg};
  font-weight: 300;
  font-style: normal;
  font-size: 14px;
  line-height: 21px;
  &:hover {
    background-color: ${subA_hover_bg};
    /* font: ${pop_semiBold}; */
    font-style: italic;
    font-weight: 400;
    line-height: 21px;
    color: ${tux_primart} !important;
    border: 1px solid ${dark_grey};
  }
`;

export const DropDownArrow = styled.img`
  width: 13.98px;
  height: 8.9px;
  margin: 20px;
  position: absolute;
  margin-left: -30px;
  /* top: 5px;   */
`;

export const Input = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  box-sizing: border-box;
  font: ${pop_reg};
  font-size: 14px;
  line-height: 21px;
  width: 280px;
  height: 48px;
  border-radius: 10px;
  margin: 0;
  padding-left: 12px;
  padding-top: 8px;
  border: 1px solid ${medium_grey};
  &:hover {
      border-radius: 10px 10px 0px 0px;
  }
`;

export const Label = styled.label`
  font: ${pop_reg};
  font-size: 10px;
  line-height: 21px;
  color: ${medium_grey};
  position: absolute;
  pointer-events: none;
  /* margin-left: 12px;
  margin-bottom: 13px; */
  left: 10px;
  top: 0px;
  transition: 0.3s ease all;
  `;

class Menu extends Component {
  handleClick = action => {
    if (!action) return;

    if (this.props.onClick) this.props.onClick(action);
  };

  render = () => (

      <StyledUl>
        <DropDownLi>
          <Input placeholder="Input Text"/>
          <Label>Label</Label>
            <DropDownArrow src="/images/dropdown.png"/>
          <DropDownContent>
            {" "}
            <SubA onClick={() => this.handleClick("MenuOption1")}>Menu Option 1</SubA>
            <SubA onClick={() => this.handleClick("MenuOption2")}>Menu Option 2</SubA>
            <SubA onClick={() => this.handleClick("MenuOption3")}>Menu Option 3</SubA>
          </DropDownContent>
        </DropDownLi>
      </StyledUl>
    );

}

export default Menu;