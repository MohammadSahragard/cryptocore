import { useState, useEffect } from 'react';

//* helper
import { separatorThreeToThree } from '@/helper/functions';

//* components
import Title from '@/components/ui/Title';
import Badge from '@/components/ui/Badge';
import { Input } from '@nextui-org/react';
import SelectTargetCurrency from '@/components/shared/selects/SelectTargetCurrency';



const CurrencyConverter = ({ coinName, coinSymbol, targetCurrency, basePrice }) => {

    // states
    const [amount, setAmount] = useState(1);


    return (
        <div className='p-3 border border-default-300 bg-default-100 flex flex-col gap-2 rounded-lg'>

            <div className='flex justify-between items-center'>
                <Title>{coinName} Converter</Title>
                <div className='flex items-center gap-1'>
                    <Badge>{coinSymbol?.toUpperCase()}</Badge>
                    <i className='fal fa-arrow-right text-slate-500 dark:text-slate-400'></i>
                    <Badge>{targetCurrency.code.toUpperCase()}</Badge>
                </div>
            </div>


            <Input
                classNames={{
                    inputWrapper: 'bg-background text-foreground'
                }}
                type='number'
                min={1}
                value={amount}
                onChange={e => setAmount(e.target.value)}
                startContent={<SelectTargetCurrency isTransparent />}
            />


            <Title>
                {amount} {coinSymbol?.toUpperCase()} = {targetCurrency.symbol} {separatorThreeToThree(basePrice*amount)}
            </Title>

        </div>
    );
};


export default CurrencyConverter;