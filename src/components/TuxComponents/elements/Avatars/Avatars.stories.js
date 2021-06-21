import { AvatarLargeBox, AvatarLargeName, AvatarSmallName, AvatarLargeIcon, AvatarSmallBox, AvatarSmallIcon } from './Avatars.js'
import { withDesign } from "storybook-addon-designs";
import LargeAvatar from '../../../../images/icons/avatarLarge.svg'
import SmallAvatar from '../../../../images/icons/avatarSmall.svg'

export default {
    title: "Avatars",
    decorators: [withDesign],
};

export const LAvatar = (args) => (
    <>
        <AvatarLargeBox {...args} >
            <AvatarLargeIcon className="large-avatar" src={LargeAvatar} />
           <AvatarLargeName> {args.name===true ? 'Leo':''} </AvatarLargeName>
        </AvatarLargeBox>
    </>

);

LAvatar.args = {
    name: false
};

export const SmAvatar = (args) => (
    <>
        <AvatarSmallBox {...args} >
            <AvatarSmallName> {args.name===true ? 'Leo' : ''} </AvatarSmallName>
            <AvatarSmallIcon className="small-avatar" src={SmallAvatar} />
        </AvatarSmallBox>
    </>
);

SmAvatar.args = {
    name: false
};



