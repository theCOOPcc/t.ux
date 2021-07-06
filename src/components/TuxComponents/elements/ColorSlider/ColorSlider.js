import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { HuePicker } from "react-color";
import { AlphaPicker } from "react-color";
import { MaterialPicker } from "react-color";

export const SliderWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
`;

export const SampleBox = styled.div`
  height: 200px;
  width: 200px;
  border: 1px black solid;
  border-radius: 15%;
  margin: 15px;
`;
export const ColorSlider = styled.div`
  border: 2px solid #f6f6f6;
  position: relative;
  left: 0px;
  right: 0px;
  top: 0%;
  bottom: 0%;
  box-shadow: -1px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  margin: 15px;
`;

export const LuminositySlider = styled.div`
  position: relative;
  left: 0px;
  right: 0px;
  top: 0%;
  bottom: 0%;
  border: 2px solid #f6f6f6;
  box-shadow: -1px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  margin: 15px;
`;

export const HexInputBox = styled.div`
  position: relative;
  left: 0px;
  right: 0px;
  top: 0%;
  bottom: 0%;
  border: 2px solid #f6f6f6;
  box-shadow: -1px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  margin: 15px;
`;


export const ColorPicker = () => {
  const [color, setColor] = useState({ r: "151", g: "200", b: "201", a: "1" });
  return (
    <SliderWrapper>
      <ColorSlider>
        <HuePicker
          color={color}
          onChangeComplete={(color) => {
            setColor(color.rgb);
          }}
        />
      </ColorSlider>

      <LuminositySlider>
      <AlphaPicker
        color={color}
        onChangeComplete={(color) => {
          setColor(color.rgb);
        }}
      />
      </LuminositySlider>

      <HexInputBox>
      <MaterialPicker
        color={color}
        onChangeComplete={(color) => {
          setColor(color.rgb);
        }}
      />
      </HexInputBox>

      <SampleBox
        style={{
          background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
        }}
      />
    </SliderWrapper>
  );
};
