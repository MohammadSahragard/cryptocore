//* components
import { Card, CardHeader, Image } from '@nextui-org/react';
// import Image from 'next/image';
import Title from '@/components/ui/Title';
import Price from '@/components/ui/Price';
import Subtitle from '@/components/ui/Subtitle';
import Badge from '@/components/ui/Badge';
import PercentBadge from '@/components/ui/PercentBadge';
import Link from 'next/link';


const CryptoGridCard = ({ data }) => {

    const {
        id,
        image,
        name,
        symbol,
        current_price,
        price_change_percentage_24h,
        price_change_percentage_7d_in_currency,
        sparkline_in_7d
    } = data || {};



    return (
        <Card
            shadow='none'
            radius='sm'
            className='border border-default-300 bg-default-100 hover:bg-default-200'
        >
            <CardHeader className='grid grid-cols-1 w-full border-b dark:border-default-300'>
                <div className='flex justify-between items-start w-full'>
                    <Link href={`/coin/${id}`} className='h-full'>
                        <Image
                            loading='lazy'
                            src={image}
                            alt='crypto logo'
                            className='rounded-full overflow-hidden'
                            height={40}
                            width={40}
                        />
                    </Link>
                    <div className='flex flex-col items-end'>
                        <Price>{current_price}</Price>
                        <PercentBadge>{price_change_percentage_24h?.toFixed(2)}</PercentBadge>
                    </div>
                </div>

                <div className='flex items-end justify-between'>
                    <Link href={`/coin/${id}`} className='flex flex-col'>
                        <Title customClassName='leading-none'>{name}</Title>
                        <Subtitle customClassName='leading-none'>{symbol.toUpperCase()}</Subtitle>
                    </Link>
                    <Subtitle>
                        <i className='fad fa-clock'></i>
                        24H
                    </Subtitle>
                </div>
            </CardHeader>

            <Image
                height='250px'
                className='object-cover p-1 z-0 min-w-[300px] min-h-[180px]'
                src={`https://quickchart.io/chart?bkg=transparent&c={type:'sparkline',data:{datasets:[{backgroundColor:'transparent',borderWidth:'2',borderColor:'${price_change_percentage_7d_in_currency < 0 ?'red':'green'}',data:[${sparkline_in_7d.price}]}]}}`}
                alt={`${name} (${symbol?.toUpperCase()}) 7d chart`}
            />

            <Badge
                icon='fad fa-clock'
                customClassName='absolute bottom-[5px] right-[4px] bg-default/50 backdrop-blur-sm border border-default-300 rounded-md'
            >
                Last 7 days
            </Badge>
        </Card>
    );
};


export default CryptoGridCard;