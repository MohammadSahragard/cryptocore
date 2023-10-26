import { Chip } from "@nextui-org/chip";


const PercentBadge = ({ children, customVariant, startContent }) => {
    return (
        <Chip
            className='rounded'
            color={children < 0 ? 'danger' : 'success'}
            variant={customVariant ? customVariant : 'flat'}
            startContent={startContent ? <span>{startContent} </span> : null}
            size='sm'
        >
            
            <span>{children}%</span>
        </Chip>
    );
};


export default PercentBadge;