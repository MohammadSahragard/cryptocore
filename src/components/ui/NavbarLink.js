"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const NavbarLink = ({ children, href }) => {

    const pathname = usePathname();


    return (
        <Link
            href={href}
            className={`group relative ${href === pathname ? 'text-foreground font-bold' : 'text-slate-500 dark:text-slate-400'}`}
        >

            <div className={`bg-foreground/30 transition-all
                            absolute bottom-0 h-px w-full translate-x-[-105%] group-hover:translate-x-0`}
            >
            </div>

            <span className='relative'>{children}</span>

        </Link>
    );
};


export default NavbarLink;