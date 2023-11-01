"use client";

//* components
import { Select, SelectItem } from "@nextui-org/select";


const SelectTabCoins = () => {

    const tabs = [
        { label: 'Market Cap', value: 'mk' },
        { label: 'Top Gainers', value: 'tg' },
        { label: 'Top Losers', value: 'tl' }
    ];


    return (
        <Select
            color='default'
            placeholder='tab'
            radius='sm'
            size='sm'
            classNames={{
                value: 'text-foreground',
                trigger: 'shadow-none bg-default h-max w-36',
                selectorIcon: 'text-foreground'
            }}
            defaultSelectedKeys={['mk']}
            items={tabs}
        >
            {
                tab => (
                    <SelectItem key={tab.value} value={tab.value}>{tab.label}</SelectItem>
                )
            }
        </Select>
    );
};


export default SelectTabCoins;