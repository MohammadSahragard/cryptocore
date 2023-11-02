//* components
import { Card, CardBody, Image } from "@nextui-org/react";
import Title from "@/components/ui/Title";
import Price from "@/components/ui/Price";
import Subtitle from "@/components/ui/Subtitle";
import Link from "next/link";
import PercentBadge from "@/components/ui/PercentBadge";


const CryptoListCard = ({ data }) => {


    const {
        id,
        market_cap_rank,
        image,
        name,
        symbol,
        current_price,
        price_change_percentage_1h_in_currency,
        price_change_percentage_24h,
        price_change_percentage_7d_in_currency,
        market_cap,
        sparkline_in_7d
    } = data || {};



    return (
        <div
            className='h-20 min-w-[min-content] w-full border border-default-300 bg-default-100 hover:bg-default-200 rounded-lg
            pl-3 pr-1 grid grid-cols-[40px_minmax(160px,auto)_120px_60px_60px_60px_170px_170px] items-center gap-2'
        >
            <Subtitle>#{market_cap_rank}</Subtitle>

            <Link href={`/coin/${id}`} className='flex items-center gap-2'>
                <Image
                    loading='lazy'
                    src={image}
                    alt='crypto logo'
                    width={40}
                    height={40}
                />

                <div className="flex flex-col">
                    <Title>{name}</Title>
                    <Subtitle>{symbol?.toUpperCase()}</Subtitle>
                </div>
            </Link>


            <Price>{current_price}</Price>

            <PercentBadge customVariant='light'>
                {price_change_percentage_1h_in_currency?.toFixed(2)}
            </PercentBadge>
            <PercentBadge customVariant='light'>
                {price_change_percentage_24h?.toFixed(2)}
            </PercentBadge>
            <PercentBadge customVariant='light'>
                {price_change_percentage_7d_in_currency?.toFixed(2)}
            </PercentBadge>

            <Price>{market_cap}</Price>

            <Image
                loading='lazy'
                height={60}
                width={170}
                radius='sm'
                className='max-h-[60px] pr-2'
                src={`https://quickchart.io/chart?bkg=transparent&c={type:'sparkline',data:{datasets:[{backgroundColor:'transparent',borderWidth:'3',borderColor:'${price_change_percentage_7d_in_currency < 0 ? 'red' : 'green'}',data:[${sparkline_in_7d.price}]}]}}`}
                alt={`${name} (${symbol?.toUpperCase()}) 7d chart`}
            />
        </div>
    );
};


export default CryptoListCard;