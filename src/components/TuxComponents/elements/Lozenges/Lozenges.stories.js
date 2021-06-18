import React from 'react'
import { Lozenge } from './Lozenges'
import { withDesign } from "storybook-addon-designs";

export default {
    title: "Lozenges",
    decorators: [withDesign],
};


export const LozengeTest = (args) => (
    <Lozenge {...args} className='lozengesTest'>
    {args.complete===true ? 'Complete' : args.progress===true ? 'In Progress' : args.notStarted===true ? '- Not Yet Started -' : ''}

    </Lozenge>
);

LozengeTest.args = {
    complete: false,
    progress: false,
    notStarted: false
};
