//* components
import Image from 'next/image';
import Link from 'next/link';

//* assets
import { Gemunu_Libre } from 'next/font/google';
const gemunuLibre = Gemunu_Libre({ subsets: ['latin'] });


const Logo = () => {
    return (
        <Link
            className={`flex items-center ${gemunuLibre.className}`}
            href='/home'
        >
            <Image
                src='/images/logo.svg'
                alt='Cryptocore logo'
                width={40}
                height={40}
            />

            <span className='bg-gradient-to-r from-[#00BFFF] to-[#8000FF] bg-clip-text text-transparent 
                             text-3xl font-black'
            >
                Cryptocore
            </span>
        </Link>
    );
};


export default Logo;