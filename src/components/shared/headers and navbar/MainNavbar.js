'use client';

import { useState } from 'react';

//* components
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem
} from '@nextui-org/navbar';
import Logo from '@/components/ui/Logo';
import NavbarLink from '@/components/ui/NavbarLink';
import ProfileAvatar from '@/components/ui/ProfileAvatar';
import ThemeToggleButton from '../switch buttons/ThemeToggleButton';
import SelectLanguageInput from '../selects/SelectLanguageInput';
import SearchbarModal from '../searchbar/SearchbarModal';
import { Divider } from '@nextui-org/react';



const MainNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: 'Cryptocurrencies', href: '/' },
        { label: 'Exchanges', href: '/exchanges' },
        { label: 'NFT', href: '/nft' },
        { label: 'Learn Crypto', href: '/tutorials' },
        { label: 'About Us', href: '/about' }
    ];

    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth='full'
            isBlurred={false}
            className='main-navbar border-b border-default-300'
            classNames={{
                menu: 'bg-background/60 backdrop-blur-lg absolute top-full'
            }}
        >
            {/* Logo and menu toggler on mobile view */}
            <NavbarContent justify='start'>
                <NavbarMenuToggle className='lg:hidden text-foreground' aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />

                <NavbarBrand>
                    <Logo />
                </NavbarBrand>
            </NavbarContent>

            {/* Navbar links on tablet and desktop view */}
            <NavbarContent className='hidden lg:flex gap-4' justify='center'>
                {menuItems.map((item, index) => (
                    <NavbarItem key={`${item.href}-${index}`} className='overflow-hidden'>
                        <NavbarLink href={item.href}>
                            {item.label}
                        </NavbarLink>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* End section options */}
            <NavbarContent justify='end'>
                <NavbarItem className='lg:hidden'>
                    <SearchbarModal />
                </NavbarItem>

                <NavbarItem className='hidden lg:flex'>
                    <SelectLanguageInput />
                </NavbarItem>

                <NavbarItem>
                    <ThemeToggleButton />
                </NavbarItem>

                <Divider orientation='vertical' className='h-2/4 bg-default-300' />

                <NavbarItem>
                    <ProfileAvatar />
                </NavbarItem>
            </NavbarContent>

            {/* Navbar menu on mobile view */}
            <NavbarMenu portalContainer={document.querySelector('.main-navbar')}>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.href}-${index}`} className='overflow-hidden'>
                        <NavbarLink href={item.href}>
                            {item.label}
                        </NavbarLink>
                    </NavbarMenuItem>
                ))}

                <NavbarItem>
                    <SelectLanguageInput />
                </NavbarItem>
            </NavbarMenu>
        </Navbar>
    );
};


export default MainNavbar;