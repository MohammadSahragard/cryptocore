//* helper
import { separatorThreeToThree } from '@/helper/functions';

//* components
import Title from '@/components/ui/Title';
import Subtitle from '@/components/ui/Subtitle';
import CoinDeveloperChart from './CoinDeveloperChart';



const CoinDeveloperInfo = ({ data }) => {
    return (
        <div className='h-[500px] max-w-[500px] grid grid-rows-[max-content_auto_max-content] gap-2 bg-default-100 p-3 rounded-lg border border-default-300'>

            <Title>Developer Data <i className='fab fa-github'></i></Title>


            <div className='bg-background rounded grid grid-rows-3 grid-cols-2 border border-default-300'>
                <div className='flex flex-col justify-center items-center'>
                    <Title>
                        {separatorThreeToThree(data?.stars)}
                    </Title>
                    <Subtitle>
                        <i className='far fa-star'></i> Stars
                    </Subtitle>
                </div>

                <div className='flex flex-col justify-center items-center border-b border-l border-default-300'>
                    <Title>
                        {separatorThreeToThree(data?.subscribers)}
                    </Title>
                    <Subtitle>
                        <i className='far fa-eye'></i> Watchers
                    </Subtitle>
                </div>

                <div className='flex flex-col justify-center items-center border-t border-r border-default-300'>
                    <Title>
                        {separatorThreeToThree(data?.forks)}
                    </Title>
                    <Subtitle>
                        <i className='fal fa-code-fork'></i> Forks
                    </Subtitle>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <Title>
                        {separatorThreeToThree(data?.pull_request_contributors)}
                    </Title>
                    <Subtitle>
                        <i className='fal fa-network-wired'></i> Contributors
                    </Subtitle>
                </div>

                <div className='flex flex-col justify-center items-center border-t border-r border-default-300'>
                    <Title>
                        {separatorThreeToThree(data?.pull_requests_merged)}
                    </Title>
                    <Subtitle>
                        <i className='fal fa-code-pull-request'></i> Merged
                    </Subtitle>
                </div>

                <div className='flex flex-col justify-center items-center border-t border-default-300'>
                    <Title>
                        {separatorThreeToThree(data?.closed_issues)} / {separatorThreeToThree(data?.total_issues)}
                    </Title>
                    <Subtitle customClassName='text-center'>
                        <i className='fal fa-code-pull-request-closed'></i> Closed / Total Issues
                    </Subtitle>
                </div>
            </div>


            <div>
                <CoinDeveloperChart data={data?.last_4_weeks_commit_activity_series} />
            </div>

        </div>
    );
};

export default CoinDeveloperInfo;