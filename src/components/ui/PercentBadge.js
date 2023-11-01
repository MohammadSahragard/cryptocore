import { Chip } from "@nextui-org/chip";


const PercentBadge = ({ children, customVariant, startContent, isArrowIcon }) => {
    return (
        <Chip
            className='rounded flex items-center gap-1'
            color={children < 0 ? 'danger' : 'success'}
            variant={customVariant ? customVariant : 'flat'}
            startContent={startContent ? <span>{startContent}</span> : null}
            endContent={
                isArrowIcon ?
                    (children < 0 ?
                        <i className='far fa-arrow-turn-down scale-90'></i> :
                        <i className='far fa-arrow-turn-up scale-90'></i>
                    ) : null
            }
            size='sm'
        >

            <span>{children}%</span>
        </Chip>
    );
};


export default PercentBadge;