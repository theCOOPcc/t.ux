import styled from "styled-components";
import { tux_blue, pop_semiBold, pop_reg } from "../../../utilities";
import { scenarioCardContent, bulletedCardContent } from "./contentData";

// Scenario
export const ScenarioCard = () => (
  <>
    {scenarioCardContent.map((card, idx) => (
      <div style={{ margin: "20px" }} key={idx} className="scenarioCard">
        <ScenarioTopBar />
        <ScenarioBox>
          {card.image ? (
            <ScenarioGrid>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <ScenarioHeader>{card.header}</ScenarioHeader>
                <ScenarioText>{card.text}</ScenarioText>
              </div>
              <img src={card.image} alt={card.altText} />
            </ScenarioGrid>
          ) : (
            <>
              <ScenarioHeader>{card.header}</ScenarioHeader>
              <ScenarioText>{card.text}</ScenarioText>
            </>
          )}
        </ScenarioBox>
      </div>
    ))}
  </>
);

export const ScenarioTopBar = styled.div`
  width: 941px;
  height: 21.63px;
  background: #ffe45c;
  margin-bottom: 0;
`;

export const ScenarioBox = styled.div`
  width: 891px;
  height: 196px;
  background: rgba(255, 228, 92, 0.2);
  margin-top: 0;
  padding: 50px 25px;

  img {
    width: 200px;
    height: 215px;
    box-shadow: -15px 20px #666666;
    grid-area: 1 / 2 / 2 / 3;
  }
`;

export const ScenarioGrid = styled.div`
  display: grid;
  grid-template-columns: 600px 241px;
`;

export const ScenarioHeader = styled.p`
  font: ${pop_semiBold};
  font-size: 24px;
  line-height: 24px;
  margin: 0;
`;

export const ScenarioText = styled.p`
  font: ${pop_reg};
  font-size: 16px;
  line-height: 24px;
  grid-area: 1 / 1 / 2 / 2;
  max-width: 90%;
`;

// BulletTextCard

export const BulletTextCard = (args) => (
  <>
    {bulletedCardContent.map((card, idx) => (
      <div style={{ margin: "20px" }} className="bulletTextCard" key={idx}>
        <BulletTextTopBar />
        <BulletTextBox>
          <BulletTextHeader>{card.header}</BulletTextHeader>
          <BulletTextSubHeader>{card.subHeader}</BulletTextSubHeader>
          {card.listItems.map((item, idx) => (
            <ul key={idx}>
              <BulletTextListItem>{item}</BulletTextListItem>
            </ul>
          ))}
        </BulletTextBox>
      </div>
    ))}
  </>
);

export const BulletTextTopBar = styled.div`
  width: 941px;
  height: 21.63px;
  background: ${tux_blue};
  margin-bottom: 0;
`;

export const BulletTextBox = styled.div`
  width: 891px;
  height: 196px;
  background: rgba(120, 214, 218, 0.2);
  margin-top: 0;
  padding: 50px 25px;
`;

export const BulletTextHeader = styled.p`
  font: ${pop_semiBold};
  font-size: 24px;
  line-height: 24px;
  margin: 0;
`;

export const BulletTextSubHeader = styled.p`
  font: ${pop_reg};
  font-size: 24px;
  line-height: 24px;
`;

export const BulletTextListItem = styled.li`
  font: ${pop_reg};
  font-size: 16px;
`;
