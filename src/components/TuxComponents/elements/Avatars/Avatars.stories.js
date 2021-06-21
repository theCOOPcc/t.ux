import { AvatarLargeBox, AvatarName } from './Avatars.js'
import { withDesign } from "storybook-addon-designs";
import LargeAvatar from '../../../../images/icons/avatarLarge.svg'
import SmallAvatar from '../../../../images/icons/avatarSmall.svg'

export default {
    title: "Avatars",
    decorators: [withDesign],
};

export const LAvatar = () => (
    <img src={LargeAvatar} />


)

export const SmAvatar = () => (
    <img src={SmallAvatar} />
)



