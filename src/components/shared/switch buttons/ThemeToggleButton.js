'use client';

import { useState } from 'react';

//* components
import { Tabs, Tab } from '@nextui-org/react';


const ThemeToggleButton = () => {

    // states
    const [selected, setSelected] = useState('dark');

    // functions
    const app = document.querySelector('.theme-app');

    if (selected === 'dark') {
        app?.classList?.replace('light', 'dark');
    } else {
        app?.classList?.replace('dark', 'light');
    };


    return (
        <Tabs
            size='md'
            color='primary'
            selectedKey={selected}
            onSelectionChange={setSelected}
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