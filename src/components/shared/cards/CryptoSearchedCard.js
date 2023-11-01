//* components
import { Card, CardHeader, Image } from "@nextui-org/react";
import Title from "@/components/ui/Title";
import Subtitle from "@/components/ui/Subtitle";
import Link from "next/link";


const CryptoSearchedCard = ({ data }) => {

    const {
        id,
        large,
        name,
        symbol,
        market_cap_rank
    } = data || {};


    return (
        <Card
            shadow='none'
            radius='sm'
            className='border border-default-300 bg-default-100 hover:bg-default-200 h-max'
        >
            <CardHeader className='p-2'>
                <Link
                    href={`/coin/${id}`}
                    className='w-full grid grid-cols-[40px_auto_max-content] items-center gap-2'>

                    <Image
                        src={large}
                        alt='crypto logo'
                        className='rounded-full overflow-hidden'
                        height={40}
                        width={40}
                    />

                    <div className="flex flex-col items-start justify-center">
                        <Title customClassName='leading-none'>{name}</Title>
                        <Subtitle customClassName='leading-none'>{symbol?.toUpperCase()}</Subtitle>
                    </div>

                    <Subtitle>#{market_cap_rank}</Subtitle>
                </Link>
            </CardHeader>
        </Card>
    );
};


export default CryptoSearchedCard;