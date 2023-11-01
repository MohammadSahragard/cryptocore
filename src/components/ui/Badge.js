import { Chip } from "@nextui-org/react";


const Badge = ({ children, icon, customClassName }) => {
    return (
        <Chip
            className={`rounded flex items-center gap-1 ${customClassName ? customClassName : undefined}`}
            startContent={icon ? <i className={icon}></i> : null}
            size='sm'
        >
            <span>{children}</span>
        </Chip>
    );
};


export default Badge;