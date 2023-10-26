"use client";

import Button from "../ui/Button";


const ThemeToggleButton = () => {

    const app = document.querySelector('.dark');

    // functions
    const toggleTheme = () => {
        const app = document.querySelector('.theme-app');

        if (app?.className?.includes('dark')) {
            app?.classList?.replace('dark', 'light');
        } else {
            app?.classList?.replace('light', 'dark');
        };
    };


    return (
        <Button isActive clickEvent={toggleTheme}>Toggle Theme</Button>
    );
};


export default ThemeToggleButton;