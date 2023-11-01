//* components
import Image from "next/image";

const Loading = () => {
    // Or a custom loading skeleton component
    return (
        <div className='absolute bg-background/40 backdrop-blur-lg inset-0 flex flex-col items-center justify-center text-foreground z-30'>
            <Image
                src='/images/logo.svg'
                width={60}
                height={60}
                className='animate-spin'
            />
        </div>
    )
};


export default Loading;