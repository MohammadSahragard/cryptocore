import CoinHeader from "@/components/shared/headers and navbar/CoinHeader";
import CoinChart from "@/components/shared/single coin components/CoinChart";
import CoinMarketInfo from "@/components/shared/single coin components/CoinMarketInfo";
import CoinCommunityInfo from "@/components/shared/single coin components/CoinCommunityInfo";
import ProgressBarTodayVote from "@/components/shared/single coin components/ProgressBarTodayVote";
import CoinDescription from "@/components/shared/single coin components/CoinDescription";
import CoinDeveloperInfo from "@/components/shared/single coin components/CoinDeveloperInfo";

//* get data (get coin info (coingecko api))
const getData = async id => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    };

    return res.json();
};


const Coin = async ({ params }) => {

    const { id } = params;
    const data = await getData(id);


    return (
        <div className='relative p-2'>
            <CoinHeader data={data} />
            <div className='absolute inset-0 pt-16 overflow-y-auto overflow-x-hidden p-2 grid grid-cols-1 xl:grid-cols-[auto_300px] gap-3'>
                {/* main section */}
                <div className='flex flex-col gap-4'>
                    <CoinChart data={data} coinId={id} />

                    <div className='xl:hidden'>
                        <CoinMarketInfo data={data} />
                    </div>

                    <ProgressBarTodayVote data={data} />

                    <div className='xl:hidden'>
                        <CoinCommunityInfo data={data} />
                    </div>

                    <CoinDescription data={data} />

                    <div className='xl:hidden'>
                        <CoinDeveloperInfo data={data?.developer_data} />
                    </div>
                </div>

                {/* The sidebar that disappears on mobile. */}
                <div className='flex-col gap-2 hidden xl:flex'>
                    <CoinMarketInfo data={data} />
                    <CoinCommunityInfo data={data} />
                    <CoinDeveloperInfo data={data?.developer_data} />
                </div>
            </div>
        </div>
    );
};


export default Coin;