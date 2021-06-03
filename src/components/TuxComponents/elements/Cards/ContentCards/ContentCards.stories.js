import React from "react";
import {
  ScenarioTopBar,
  ScenarioBox,
  ScenarioHeader,
  ScenarioText,
  ScenarioCardOuter,
  BulletTextTopBar,
  BulletTextBox,
  BulletTextHeader,
  BulletTextSubHeader,
  BulletTextCardOuter,
  BulletList,
  BulletTextListItem,
} from "./ContentCards";
import { scenarioCardContent, bulletedCardContent } from "./contentData";

import { withDesign } from "storybook-addon-designs";

export default {
  title: "Content Cards",
  decorators: [withDesign],
};

export const ContentCards = () => (
  <div>
    {/* Scenario Card */}
    {scenarioCardContent.map((card) => (
      <div style={{ margin: "20px" }}>
        <ScenarioTopBar />
        <ScenarioBox>
          <ScenarioHeader>{card.header}</ScenarioHeader>
          {card.image ? (
            <div style={{ display: "flex" }}>
              <ScenarioText>{card.text}</ScenarioText>
              <img src={card.image} alt={card.altText} />
            </div>
          ) : (
            <div style={{ display: "flex" }}>
              <ScenarioText>{card.text}</ScenarioText>
            </div>
          )}
        </ScenarioBox>
      </div>
    ))}

    {bulletedCardContent.map((card) => (
      <div style={{ margin: "20px" }}>
        <BulletTextTopBar />
        <BulletTextBox>
          <BulletTextHeader>{card.header}</BulletTextHeader>
          <BulletTextSubHeader>{card.subHeader}</BulletTextSubHeader>
          {card.listItems.map((item) => (
            <ul>
              <BulletTextListItem>{item}</BulletTextListItem>
            </ul>
          ))}
        </BulletTextBox>
      </div>
    ))}
  </div>
);

export const ScenarioCard = (args) => (
  <>
  {scenarioCardContent.map(card => 
    <div style={{ margin: "20px" }}>
    <ScenarioTopBar />
    <ScenarioBox>
      <ScenarioHeader>{card.header}</ScenarioHeader>
      {card.image ? (
        <div style={{ display: "flex" }}>
          <ScenarioText>{card.text}</ScenarioText>
          <img src={card.image} alt={card.altText} />
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <ScenarioText>{card.text}</ScenarioText>
        </div>
      )}
    </ScenarioBox>
  </div>
    )  }
    </>
);

ScenarioCard.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=1%3A1387",
    },
  },
};

export const BulletTextCard = (args) => (
  <>
  {bulletedCardContent.map((card) => (
    <div style={{ margin: "20px" }}>
      <BulletTextTopBar />
      <BulletTextBox>
        <BulletTextHeader>{card.header}</BulletTextHeader>
        <BulletTextSubHeader>{card.subHeader}</BulletTextSubHeader>
        {card.listItems.map((item) => (
          <ul>
            <BulletTextListItem>{item}</BulletTextListItem>
          </ul>
        ))}
      </BulletTextBox>
    </div>
  ))}
  </>
);

BulletTextCard.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=1%3A1387",
    },
  },
};
