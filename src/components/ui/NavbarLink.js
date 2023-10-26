"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const NavbarLink = ({ children, href }) => {

    const pathname = usePathname();


    return (
        <Link
            href={href}
            className={`group ${href === pathname ? 'text-white' : 'text-slate-400'} relative overflow-hidden`}
        >

            <div className={`${href === pathname ? 'bg-white' : 'bg-slate-400'} transition-all
                            absolute bottom-0 h-px w-full -translate-x-full group-hover:translate-x-0`}
            >
            </div>

            <span className='relative'>{children}</span>

        </Link>
    );
};


export default NavbarLink;