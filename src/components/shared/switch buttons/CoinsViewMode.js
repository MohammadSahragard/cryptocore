"use client";

// public
import { useSelector, useDispatch } from 'react-redux';

//* components
import { Tabs, Tab } from '@nextui-org/react';

//* actions
import { changeCoinsViewMode } from '@/redux/features/global-options/optionsSlice';


const CoinViewMode = () => {

    const dispatch = useDispatch();
    const viewMode = useSelector(state => state.options.coinsViewMode);


    return (
        <Tabs
            size='md'
            color='secondary'
            classNames={{
                tabList: 'bg-default',
            }}
            defaultSelectedKey={viewMode}
            onSelectionChange={key => dispatch(changeCoinsViewMode(key))}
        >
            <Tab key='list' title={<i className='fad fa-list'></i>} />
            <Tab key='grid' title={<i className='fad fa-grid-2'></i>} />
        </Tabs>
    );
};


export default CoinViewMode;