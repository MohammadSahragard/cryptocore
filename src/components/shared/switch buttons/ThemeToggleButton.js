'use client';

// public
import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";

//* components
import { Tabs, Tab } from '@nextui-org/react';


const ThemeToggleButton = () => {

    // states
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    
    
    
    useEffect(() => {
        setMounted(true);
    }, [])

    if(!mounted) return null


    return (
        <Tabs
            size='md'
            color='primary'
            selectedKey={theme}
            onSelectionChange={setTheme}
            classNames={{
                tabList: 'bg-default'
            }}
        >
            <Tab key='light' title={<i className='fa fa-sun-bright'></i>} />
            <Tab key='dark' title={<i className='fas fa-moon'></i>} />
        </Tabs>
    );
};


export default ThemeToggleButton;