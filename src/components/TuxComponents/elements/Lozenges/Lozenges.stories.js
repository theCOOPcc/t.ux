import React from 'react'
import { CompleteLozenge, InProgress, NotStarted } from './Lozenges'
import { withDesign } from "storybook-addon-designs";

export default {
    title: "Lozenges",
    decorators: [withDesign],
};

export const GreenProgress = () => (
    <CompleteLozenge>
        Complete
    </CompleteLozenge>
)

export const OrangeProgress = () => (
    <InProgress>
        In Progress
    </InProgress>
)

export const TransparentProgress = () => (
    <NotStarted>
        - Not Yet Started - 
    </NotStarted>
)