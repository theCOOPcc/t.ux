import { BulletTextCard, ScenarioCard } from "./ContentCards";
  
  import { withDesign } from "storybook-addon-designs";
  
  export default {
    title: "Content Cards",
    decorators: [withDesign],
  };
  
  export const ContentCards = () => (
    <div>
      <ScenarioCard />
      <BulletTextCard />
    </div>
  );
  
  export const ScenarioCards = () => (
    <ScenarioCard />
  );
  export const BulletTextCards = () => (
    <BulletTextCard />
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
  
 
  BulletTextCard.story = {
    parameters: {
      design: {
        type: "figma",
        url:
          "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=1%3A1387",
      },
    },
  };
  