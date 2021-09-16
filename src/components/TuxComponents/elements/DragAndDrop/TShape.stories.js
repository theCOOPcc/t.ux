import React, {useState} from 'react'
import { withDesign } from "storybook-addon-designs";
import DropArrow from '../../../../images/DragNDrop/DropArrow.svg'
import { DnDActivity, DnDBoxOne, DnDBoxTwo, DnDItemBox, DnDImg, DnDPlaceholdText } from "./TShape"

export default {
  title: "Drag&Drop",
  decorators: [withDesign],
};

export const TShapeDragnDrop = () => {

  const DnDItems = [
    'Logo on top left',
    'Cancel Button',
    'Back link',
    'Square Check Box'
  ]



  return (
    <DnDActivity>

    <DnDItemBox/>

    <DnDBoxOne titleLeft="User Control & Freedom">
      <DnDImg src={DropArrow}/>
      <DnDPlaceholdText/>
    </DnDBoxOne>

    <DnDBoxTwo titleRight="Consistency & Standards">
      <DnDImg src={DropArrow}/>
      <DnDPlaceholdText/>
    </DnDBoxTwo>

    </DnDActivity>
  )
};
