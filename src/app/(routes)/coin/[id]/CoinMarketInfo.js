'use client';

// public
import { useSelector } from 'react-redux';

//* helper
import { separatorThreeToThree } from '@/helper/functions';

//* components
import Title from '@/components/ui/Title';
import Subtitle from '@/components/ui/Subtitle';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Tooltip, Chip } from '@nextui-org/react';
import ProgressBar24hRange from './ProgressBar24hRange';
import CurrencyConverter from './CurrencyConverter';



const CoinMarketInfo = ({ data }) => {

    const {
        name,
        symbol,
        market_cap_rank,
        market_data,
        watchlist_portfolio_users
    } = data || {};

    const targetCurrency = useSelector(state => state.options.targetCurrency);


    return (
        <div>
            <div className='flex gap-2 justify-end'>
                <Tooltip content='Share'>
                    <Button isIconOnly={true} customColor='primary' customVariant='flat'>
                        <i className='far fa-share'></i>
                    </Button>
                </Tooltip>
                <Button isIconOnly={true} customColor='secondary' customVariant='flat'>
                    <i className='far fa-bell'></i>
                </Button>
                <Button isIconOnly={true} customColor='warning' customVariant='flat'>
                    <i className='far fa-star'></i>
                </Button>
            </div>

            <div className='flex flex-col gap-2 mt-2'>


                <div className='flex justify-between items-center'>
                    <Chip size='lg' radius='sm'>#Rank: {market_cap_rank}</Chip>

                    <Chip size='lg' radius='sm' variant='flat' color='warning' className='self-center'>
                        <i className='fa fa-star me-1 text-yellow-400'></i>
                        <span className='ms-1'>On {separatorThreeToThree(watchlist_portfolio_users)} watchlists</span>
                    </Chip>
                </div>


                <ProgressBar24hRange
                    min={market_data?.low_24h?.[targetCurrency.code]}
                    value={market_data?.current_price?.[targetCurrency.code]}
                    max={market_data?.high_24h?.[targetCurrency.code]}
                    targetCurrencySymbol={targetCurrency.symbol}
                />


                <div className='flex flex-col py-2 divide-y divide-default-300'>
                    <div className='flex justify-between py-[13px]'>
                        <Subtitle>Market Cap</Subtitle>
                        <Title>
                            <span>{targetCurrency.symbol}</span>
                            <span>{separatorThreeToThree(market_data?.market_cap?.[targetCurrency.code] ?? 0)}</span>
                        </Title>
                    </div>
                    <div className='flex justify-between py-[13px]'>
                        <Subtitle>24 Hour Trading Vol</Subtitle>
                        <Title>
                            <span>{targetCurrency.symbol}</span>
                            <span>{separatorThreeToThree(market_data?.total_volume?.[targetCurrency.code] ?? 0)}</span>
                        </Title>
                    </div>
                    <div className='flex justify-between py-[13px]'>
                        <Subtitle>Fully Diluted Valuation</Subtitle>
                        <Title>
                            <span>{targetCurrency.symbol}</span>
                            <span>{separatorThreeToThree(market_data?.fully_diluted_valuation?.[targetCurrency.code] ?? 0)}</span>
                        </Title>
                    </div>
                    <div className='flex justify-between py-[13px]'>
                        <Subtitle>Circulating Supply</Subtitle>
                        <Title>
                            <span>{separatorThreeToThree(market_data?.circulating_supply) ?? 0}</span>
                        </Title>
                    </div>
                    <div className='flex justify-between py-[13px]'>
                        <Subtitle>Total Supply</Subtitle>
                        <Title>
                            <span>{separatorThreeToThree(market_data?.total_supply ?? 0)}</span>
                        </Title>
                    </div>
                    <div className='flex justify-between py-[13px]'>
                        <Subtitle>Max Supply</Subtitle>
                        <Title>
                            <span>{separatorThreeToThree(market_data?.max_supply ?? 0)}</span>
                        </Title>
                    </div>
                </div>


                <CurrencyConverter
                    coinName={name ?? ''}
                    coinSymbol={symbol ?? ''}
                    basePrice={market_data?.current_price?.[targetCurrency.code] ?? 0}
                    targetCurrency={targetCurrency}
                />
            </div>
        </div>
    );
};

export default CoinMarketInfo;