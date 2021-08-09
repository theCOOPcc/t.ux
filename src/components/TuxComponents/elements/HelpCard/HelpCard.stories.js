import React from "react";
import { withDesign } from "storybook-addon-designs";
import { HelpContainer, HelpContent, HelpTopText, HelpSuggestion, HelpImage, HelpDescription, HelpPartText, HelpPartDescription, ButtonContainer } from "./HelpCard";
import { PrimaryButton } from "../Buttons/Buttons";
import HeuristicsImage from '../../../../images/icons/Heuristics.png';


export default {
    title: "Help_Card",
    decorators: [withDesign],
};


export const Help_Card = () => (
    <div>
    <HelpContainer>
        <HelpContent>
            <HelpTopText>Based on your selection, we recommend the following activity:</HelpTopText>
            <HelpSuggestion>
                <HelpImage src={HeuristicsImage}/>
                <HelpDescription>
                    <HelpPartText>Heuristics Part 1: Heuristics 1-4</HelpPartText>
                    <HelpPartDescription>Learn about the first 4 Heuristics and how you can use them to create better, more user-friendly designs.</HelpPartDescription>
                </HelpDescription>
            </HelpSuggestion>
            <ButtonContainer>
            <PrimaryButton large='true'>Start Activity</PrimaryButton>
            </ButtonContainer>
        </HelpContent>
    </HelpContainer>
</div>


)




Help_Card.story = {
    parameters: {
      design: {
        type: "figma",
        url:
          "https://www.figma.com/file/CCN67B2RlMZoBCk7BJNq0U/Independent-Learner-Flow?node-id=62%3A17889",
      },
    },
  };