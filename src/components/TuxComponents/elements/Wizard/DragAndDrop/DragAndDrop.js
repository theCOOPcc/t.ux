import styled, {css} from "styled-components";

export const ComponentWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DragBox = styled.div`
  margin: 0;
  padding: 0;
  width: 500px;
  height: 300px;
  position: relative;
  border: 2px dashed rgba(136, 136, 136, 0.5);
  border-radius: 5px;
  background-image: url(./images/CloudDL.svg);
  background-repeat: no-repeat;
  background-position: 57px 40px;
`;

export const SearchFilesBtn = styled.button`
  margin: 0;
  padding: 0;
  color: #3c8582;
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  width: 166px;
  height: 50px;
  position: absolute;
  left: 33.5%;
  right: 40%;
  top: 57.26%;
  bottom: 28.77%;
  background: #ffffff;
  border: 1px solid #3c8582;
  box-sizing: border-box;
  border-radius: 5px;
  ${props => props.hover && css`
  background: #3c8582;
  color: white;
  `}
  ${props => props.pressed && css`
  background: rgba(60, 133, 130, 0.1);
    color: #3c8582;
  `}
`;

export const SmallTextField = styled.input`
  margin-top: 10px;
  width: 280px;
  height: 48px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #666;
`;

export const ImportCloud = styled.img`
  position: absolute;
  left: 233px;
  top: 60px;
  width: 45px;
  color: #b5c8ce;
`;

export const CenterMessage = styled.p`
  margin: 0;
  color: #666666;
  position: absolute;
  text-align: center;
  width: 244px;
  height: 27px;
  left: 128px;
  top: 110px;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`;
export const SubMessage = styled.p`
  margin: 0;
  color: #888888;
  position: absolute;
  text-align: center;
  width: 188px;
  height: 15px;
  left: 148px;
  top: 135px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;
export const MaxMessage = styled.p`
  margin: 0;
  color: #888888;
  position: absolute;
  text-align: center;
  width: 188px;
  height: 15px;
  left: 148px;
  top: 235px;
  font-weight: 500;
  font-size: 10px;
  line-height: 12.5px;
`;
export const OrMessage = styled.p`
   margin: 0;
  color: #666666;
  position: absolute;
  text-align: center;
  width: 188px;
  height: 15px;
  left: 148px;
  top: 150px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
`;
