'use client';

// public
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

//* components
import Subtitle from '@/components/ui/Subtitle';
import PercentBadge from '@/components/ui/PercentBadge';

//* helper
import { separatorThreeToThree } from '@/helper/functions';


//* get data (global market info (coingecko api))
const getData = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/global');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    };

    return res.json();
};


const GlobalMarketInfo = () => {

    // states
    const targetCurrency = useSelector(state => state.options.targetCurrency);
    const [data, setData] = useState({});

    // fetch data
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setData(data.data);
        };

        fetchData();
    }, []);


    return (
        <div className='h-max w-full py-1 px-3 border-b border-default-300
                        flex justify-start items-center flex-wrap gap-x-4 gap-y-1
                        sm:justify-center'
        >


            {/* Number of coins in market */}
            <section className='flex items-center gap-2'>
                <Subtitle>Coins: </Subtitle>
                <Subtitle customColor='text-primary'>
                    {data?.active_cryptocurrencies ?? '0'}
                </Subtitle>
            </section>

            {/* Number of markets (exchanges) */}
            <section className='flex items-center gap-2'>
                <Subtitle>Exchanges: </Subtitle>
                <Subtitle customColor='text-primary'>
                    {data?.markets ?? 0}
                </Subtitle>
            </section>

            {/* Market cap */}
            <section className='flex items-center gap-2'>
                <Subtitle>Market Cap: </Subtitle>
                <Subtitle customColor='text-primary'>
                    {targetCurrency?.symbol}
                    {separatorThreeToThree(data?.total_market_cap?.[targetCurrency?.code] ?? 0)}
                </Subtitle>
                <PercentBadge customVariant='light' isArrowIcon>
                    {data?.market_cap_change_percentage_24h_usd?.toFixed(2) ?? 0}
                </PercentBadge>
            </section>

            {/* Market volume in last 24h ago to USD  */}
            <section className='flex items-center gap-2'>
                <Subtitle>24h Vol: </Subtitle>
                <Subtitle customColor='text-primary'>
                    {targetCurrency?.symbol}
                    {separatorThreeToThree(data?.total_volume?.[targetCurrency?.code] ?? 0)}
                </Subtitle>
            </section>

            {/* Dominance in BTC & ETH */}
            <section className='flex items-center gap-2'>
                <Subtitle>Dominance: </Subtitle>
                <PercentBadge customVariant='light' startContent='BTC'>
                    {data?.market_cap_percentage?.btc?.toFixed(2) ?? 0}
                </PercentBadge>
                <PercentBadge customVariant='light' startContent='ETH'>
                    {data?.market_cap_percentage?.eth?.toFixed(2) ?? 0}
                </PercentBadge>
            </section>


        </div>
    );
};


export default GlobalMarketInfo;