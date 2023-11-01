//* components
import Title from '@/components/ui/Title';
import { Progress } from '@nextui-org/react';
import TimeFramePercentageTable from './TimeFramePercentageTable';


const ProgressBarTodayVote = ({ data }) => {

    const goodVote = data?.sentiment_votes_up_percentage;


    return (
        <div className='flex flex-col gap-5 bg-default-100 border border-default-300 p-3 rounded-lg'>
            {/* percentage table */}
            <TimeFramePercentageTable data={data} />

            {/* vote rate */}
            <div className='space-y-2'>
                <Title customClassName='font-normal text-opacity-75 flex justify-between'>People voted for this coin today:</Title>
    
                <Title customClassName='font-normal flex justify-between'>
                    <span>Good 😀</span>
                    <span>Bad 😢</span>
                </Title>
    
                <Progress
                    minValue={0}
                    maxValue={100}
                    value={goodVote}
                    color='success'
                    classNames={{ track: 'bg-rose-500' }}
                />
    
                <div className='flex justify-between'>
                    <Title>
                        {goodVote?.toFixed(0) ?? 0}%
                    </Title>
    
    
                    <Title>
                        {(100 - goodVote).toFixed(0) ?? 0}%
                    </Title>
                </div>
            </div>
        </div>
    );
};

export default ProgressBarTodayVote;