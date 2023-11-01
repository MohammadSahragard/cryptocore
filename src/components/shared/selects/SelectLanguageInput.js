"use client";

//* components
import { Select, SelectItem } from "@nextui-org/select";


const SelectLanguageInput = () => {

    const languages = [{ label: 'En', value: 'en' }, { label: 'Fa', value: 'fa' }];


    return (
        <Select
            placeholder='Select language'
            radius='sm'
            size='sm'
            classNames={{
                value: 'text-foreground',
                trigger: 'shadow-none bg-transparent text-foreground h-max w-20 p-0',
                popover: 'bg-background border border-default-300 text-foreground',
                selectorIcon: 'text-foreground'
            }}
            defaultSelectedKeys={['en']}
            items={languages}
            startContent={<i className='far fa-flag'></i>}
        >
            {
                language => (
                    <SelectItem key={language.value} value={language.value}>{language.label}</SelectItem>
                )
            }
        </Select>
    );
};


export default SelectLanguageInput;