import styled from "styled-components";
import { backgroundBlur, backgroundGradient, pageBackground, true_white, grey, tux_blue, backButton } from '../../utilities/Colors'
import { pop_thick } from "../../utilities";


export const BackgroundBlur = styled.main`
width: 100vw;
height: 100vh;
  background: ${backgroundBlur};
  backdrop-filter: blur(14px);
`;
export const PageBackground = styled.main`
  width: 100vw;
  height: 100vh;
  background: ${pageBackground};
`;
export const BackgroundGradient = styled.main`
  width: 100vw;
  height: 100vh;
  background: ${backgroundGradient};
  background-blend-mode: normal, multiply;
  opacity: 0.3;
`;

export const MainColumMain = styled.main`
  width: 100vw;
  height: 100vh;
  background: ${true_white};
  border: 1px solid ${grey};
  border-top: 9.38px solid ${tux_blue};
  box-sizing: border-box;
  border-radius: 5px;
`;

export const BackButton = styled.button`
  font: ${pop_thick};
  background-color: none;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  margin-left: 20px;
  margin-top: 20px;
  font-size: 16px;
  color: ${backButton};
  width: 50px;
  height: 24.03px;
`;

export const MainColumn = () => (
  <MainColumMain className='main'>
    <BackButton>&lt; Back</BackButton>
  </MainColumMain>
);