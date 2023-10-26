import { Avatar } from "@nextui-org/react";


const ProfileAvatar = ({ src }) => {
    return (
        <Avatar
            isBordered
            src={src}
            alt='profile image'
        />
    );
};


export default ProfileAvatar;