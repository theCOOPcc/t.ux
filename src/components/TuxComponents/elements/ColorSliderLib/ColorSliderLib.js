import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { SketchPicker } from "react-color";
import { HuePicker } from "react-color";
import { AlphaPicker } from "react-color";

export const SliderWrapper = styled.div`
  display: flex;
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


export const ColorPicker = () => {
  const [color, setColor] = useState({r:'151', g:'200', b:'201', a:'1'});
  return (
    <SliderWrapper>
      {/* <SketchPicker
        color={color}
        onChangeComplete={
          (color) => {
          setColor(color.rgb)
        }}
      /> */}

    <HuePicker
        color={color}
        onChangeComplete={
          (color) => {
          setColor(color.hex)
        }}
      />
    <AlphaPicker
        color={color}
        onChangeComplete={
          (color) => {
          setColor(color.rgb)
        }}
      />
      <SampleBox style={{backgroundColor: color,  transition: 'ease all 500ms'}}
      >
      </SampleBox>

    </SliderWrapper>
  );
};

