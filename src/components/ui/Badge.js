import { Chip } from "@nextui-org/react";


const Badge = ({ children, icon }) => {
    return (
        <Chip
            className='rounded'
            startContent={icon ? <i className={`fa fa-${icon}`}></i> : null}
            size='sm'
        >
            <span> {children}</span>
        </Chip>
    );
};


export default Badge;