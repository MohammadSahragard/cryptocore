'use client';

// public
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

//* components
import CryptoGridCard from '@/components/shared/cards/CryptoGridCard';
import CryptoListCard from '@/components/shared/cards/CryptoListCard';
import ListCardHeader from '@/components/shared/headers and navbar/ListCardHeader';

import Loading from '../../app/(routes)/loading';


//* get data (coins info (coingecko api))
const getData = async (targetCurrency, currentPage) => {
    const res = await fetch(`
        https://api.coingecko.com/api/v3/coins/markets?vs_currency=${targetCurrency}&order=market_cap_desc&per_page=100&page=${currentPage}&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en
    `);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    };

    return res.json();
};


const Coins = () => {

    // options (targetCurrency & currentPage);
    const options = useSelector(state => state.options);
    const { targetCurrency, currenciesCurrentPage, coinsViewMode } = options;

    // states
    const [data, setData] = useState({});


    // fetch data
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData(
                targetCurrency.code,
                currenciesCurrentPage
            );

            setData(data);
        };

        fetchData();
    }, [targetCurrency, currenciesCurrentPage]);



    return (
        <div className='p-2'>
            {
                coinsViewMode === 'grid' ?
                    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2'>
                        {
                            data?.length ?
                                data?.map(coin =>
                                    <CryptoGridCard key={coin.id} data={coin} />
                                ) : <Loading />

                        }
                    </div> : null
            }
            {
                coinsViewMode === 'list' ?
                    <div className='overflow-auto'>
                        <ListCardHeader />
                        <div className='flex flex-col gap-2 mt-2'>
                            {
                                data?.length ?
                                    data?.map(coin =>
                                        <CryptoListCard key={coin.id} data={coin} />
                                    ) : <Loading />
                            }
                        </div>
                    </div> : null
            }
        </div>
    );
};


export default Coins;