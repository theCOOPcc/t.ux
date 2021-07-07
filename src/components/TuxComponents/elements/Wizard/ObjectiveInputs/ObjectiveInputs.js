import styled, {css} from 'styled-components'
import { pop_reg} from '../../../utilities/Type'
import { tux_red } from '../../../utilities/Colors'

export const ComponentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 935px;
  height: 403px;
  background: rgba(221, 221, 221, 0.3);
  border: 1px dotted grey;
  border-top: 11px solid #999999;
`

export const ErrorMessage = styled.p`
  position: absolute;
  top: 53px;
  left: 15px;
  color: ${tux_red};
  font: ${pop_reg};
  font-size: 10px;
  line-height: 15px;
`;

export const Error = styled.img`
  width: 24px;
  height: 24px;
  margin: 20px;
  border: none;
  ${(props) =>
    props.error &&
    css`
    position: absolute;
      right: 22px;
      top: 11px;
      }
    `}
`;

export const ObjectInput1 = styled.textarea`

  width: 842px;
  height: 63px;
  padding-left: 15px;
  font: ${pop_reg};
  font-size: 14px;
  line-height: 21px;
  display: flex;
  padding-top: 20px;
  align-items: center;
  border: 1px solid #666666;
  box-sizing: border-box;
  border-radius: 10px;
  background: rgba(221, 221, 221, 0.3);
`
export const ObjectInput2 = styled.textarea`

  width: 842px;
  height: 63px;
  padding-left: 15px;
  font: ${pop_reg};
  font-size: 14px;
  line-height: 21px;
  display: flex;
  padding-top: 20px;
  align-items: center;
  border: 1px solid #666666;
  box-sizing: border-box;
  border-radius: 10px;
  background: rgba(221, 221, 221, 0.3);
  ${props => props.error && css`
      caret-color: ${tux_red};
      border: 1px solid ${tux_red};
      transition: 0.3s ease all;
  `}
`
export const ObjectInput3 = styled.textarea`
 
  width: 842px;
  height: 63px;
  padding-left: 15px;
  font: ${pop_reg};
  font-size: 14px;
  line-height: 21px;
  display: flex;
  padding-top: 20px;
  align-items: center;
  border: 1px solid #666666;
  box-sizing: border-box;
  border-radius: 10px;
  background: rgba(221, 221, 221, 0.3);
`

export const BulletPoint1 = styled.img`
position: absolute;
left: 33px;
top: 182px;
`
export const BulletPoint2 = styled.img`
position: absolute;
left: 33px;
top: 262px;
`
export const BulletPoint3 = styled.img`
position: absolute;
left: 33px;
top: 342px;
`

export const CharCount1 = styled.div`
position: absolute;
right: 5px;
bottom: 5.16px;
width: 30px;
height: 13px;
font-size: 10px;

`
export const CharCount2 = styled.div`
position: absolute;
right: 5px;
bottom: 5.16px;
width: 30px;
height: 13px;
font-size: 10px;
`
export const CharCount3 = styled.div`
position: absolute;
right: 5px;
bottom: 5.16px;
width: 30px;
height: 13px;
font-size: 10px;
`

export const InputWrapper1 = styled.div`
position: absolute;
bottom: 185px;
  /* width: 60px; */
`
export const InputWrapper2 = styled.div`
position: absolute;
bottom: 104px;
  /* width: 60px; */
`
export const InputWrapper3 = styled.div`
position: absolute;
bottom: 25px;
  /* width: 60px; */
`

export const TextHead = styled.p`
  margin: 0;
  position: absolute;
  top:33px;
  width: 898px;
  height: 63.16px;
  font-size: 18px;
  font-weight: 800;
  line-height: 23px;
  color: #666666;
`;

export const TextSub = styled.p`
  margin: 0;
  position: absolute;
  top:67px;
  width: 898px;
  height: 63.16px;
  font-size: 18px;
  /* font-weight: 800; */
  line-height: 23px;
  color: #666666;
`;
