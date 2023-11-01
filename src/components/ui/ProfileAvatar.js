//* components
import { Avatar } from "@nextui-org/react";
import Link from "next/link";


const ProfileAvatar = ({ src }) => {
    return (
        <Link href='https://www.instagram.com/mohammadsahragard_/'>
            <Avatar
                isBordered
                src='https://avatars.githubusercontent.com/u/77649975?v=4'
            />
        </Link>
    );
};


export default ProfileAvatar;