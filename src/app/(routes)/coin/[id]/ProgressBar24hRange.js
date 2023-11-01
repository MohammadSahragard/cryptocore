//* helper
import { separatorThreeToThree } from '@/helper/functions';

//* components
import Title from '@/components/ui/Title';
import { Progress } from '@nextui-org/progress';
import { Tooltip } from '@nextui-org/tooltip';



const ProgressBar24hRange = ({ min, value, max, targetCurrencySymbol }) => {
    return (
        <div className='flex flex-col gap-2 border border-default-300 bg-default-100 p-3 pt-4 rounded-lg'>
            <Progress
                minValue={min}
                value={value}
                maxValue={max}
                classNames={{
                    indicator: 'bg-gradient-to-r from-[#8000FF] to-[#00BFFF]'
                }}
            />

            <div className='flex justify-between'>
                <Tooltip content='Low'>
                    <Title
                        customClassName='font-normal'
                    >
                        {targetCurrencySymbol} {separatorThreeToThree(min)}
                    </Title>
                </Tooltip>

                <Title customClassName='font-normal text-opacity-75'>24h Range</Title>

                <Tooltip showArrow={true} content='High'>
                    <Title
                        customClassName='font-normal'
                    >
                        {targetCurrencySymbol} {separatorThreeToThree(max)}
                    </Title>
                </Tooltip>
            </div>
        </div>
    );
};

export default ProgressBar24hRange;