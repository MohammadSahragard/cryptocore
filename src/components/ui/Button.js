import { Button as NextUiButton } from '@nextui-org/button';

const Button = ({ children, size, clickEvent, isActive }) => {
    return (
        <NextUiButton
            size={size ? size : 'sm'}
            radius='sm'
            className={isActive ? 'group relative bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white' : undefined}
            onClick={clickEvent}
        >
            {
                isActive ?
                    <div className='accent-button__effect absolute inset-0 transition-all group-hover:bg-white/20'></div> :
                    null
            }
            <span className='relative'>{children}</span>
        </NextUiButton>
    );
};


export default Button;