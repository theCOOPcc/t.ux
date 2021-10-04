import styled, {css} from "styled-components";
import {secondary_default, true_white, cloud_grey, medium_grey, sub_grey} from '../../../utilities';

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
  border: 2px dashed ${sub_grey};
  border-radius: 5px;
`;

export const SearchFilesBtn = styled.button`
  margin: 0;
  padding: 0;
  color: ${secondary_default};
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  width: 166px;
  height: 50px;
  position: absolute;
  left: 167.5px;
  bottom:45px;
  background: ${true_white};
  border: 1px solid ${secondary_default};
  box-sizing: border-box;
  border-radius: 5px;
  ${props => props.hover && css`
  background: ${secondary_default};
  color: white;
  `}
  ${props => props.pressed && css`
  background: ${secondary_default};
    color: ${secondary_default};
  `}
`;

export const SmallTextField = styled.input`
margin-top: 10px;
width: 280px;
height: 48px;
box-sizing: border-box;
border-radius: 10px;
border: 1px solid ${medium_grey};
padding-left: 12px;
  
`;

export const ImportCloud = styled.img`
  position: absolute;
  left: 225px;
  top: 78.33px;
  width: 50px;
  color: ${cloud_grey};
`;

export const CenterMessage = styled.p`
  margin: 0;
  color: ${medium_grey};
  position: absolute;
  text-align: center;
  width: 244px;
  height: 27px;
  left: 128px;
  top: 126px;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`;
export const SubMessage = styled.p`
  margin: 0;
  color: ${sub_grey};
  position: absolute;
  text-align: center;
  width: 188px;
  height: 15px;
  left: 148px;
  top: 156px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;
export const MaxMessage = styled.p`
  margin: 0;
  padding: 0;
  color: ${sub_grey};
  position: absolute;
  width: 188px;
  height: 15px;
  left: 193px;
  bottom: 26px;
  font-weight: 500;
  font-size: 10px;
  line-height: 12.5px;
`;
export const OrMessage = styled.p`
   margin: 0;
   padding: 0;
  color: ${medium_grey};
  position: absolute;
  width: 188px;
  height: 15px;
  left: 243px;
  bottom: 113px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
`;
