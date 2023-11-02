'use client';

import { useSelector } from "react-redux";

//* components
import Title from "@/components/ui/Title";
import { Image } from "@nextui-org/react";
import SelectTargetCurrency from "../selects/SelectTargetCurrency";
import Subtitle from "@/components/ui/Subtitle";
import PercentBadge from "@/components/ui/PercentBadge";
import Price from "@/components/ui/Price";

//* helper
import { separatorThreeToThree } from "@/helper/functions";


const CoinsHeader = ({ data }) => {

    const targetCurrency = useSelector(state => state.options.targetCurrency);
    const { image, name, symbol, market_data } = data || {};



    return (
        <div className='h-14 absolute top-0 left-0 right-0 flex justify-between items-center px-3 bg-background/70 backdrop-blur-lg border-b border-default-300 z-30'>
            <div className='flex items-center gap-2'>
                <Image
                    loading='lazy'
                    src={image?.large}
                    alt='crypto logo'
                    className='min-h-[40px] min-w-[40px]'
                    width={40}
                    height={40}
                />

                <div className="flex flex-col md:flex-row md:items-center md:gap-2">
                    <Title customClassName='leading-none'>{name}</Title>
                    <Subtitle customClassName='leading-none'>{symbol?.toUpperCase()}</Subtitle>
                </div>
            </div>

            <div className='flex justify-center gap-x-3 flex-wrap'>
                <section className='flex items-center gap-2'>
                    <Subtitle customClassName='hidden md:block'>Price: </Subtitle>
                    <Price customClassName='text-primary font-normal'>{market_data?.current_price?.[targetCurrency.code]}</Price>
                    <PercentBadge customVariant='light' isArrowIcon>{market_data?.price_change_percentage_24h_in_currency?.[targetCurrency?.code].toFixed(1)}</PercentBadge>
                </section>
                <section className='hidden sm:flex items-center gap-2'>
                    <Subtitle customColor='text-primary'>
                        ₿ {separatorThreeToThree(market_data?.current_price?.btc, 8)}
                    </Subtitle>
                    <PercentBadge customVariant='light' isArrowIcon>{market_data?.price_change_percentage_24h_in_currency?.btc?.toFixed(1)}</PercentBadge>
                </section>
            </div>

            <SelectTargetCurrency />
        </div>
    );
};


export default CoinsHeader;