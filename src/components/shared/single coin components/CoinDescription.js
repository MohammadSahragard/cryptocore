'use client';

// public
import { useSelector } from "react-redux";
import { Parser } from "html-to-react";

//* helper
import {
    separatorThreeToThree,
    nFormatter,
    convertStringToHTML
} from "@/helper/functions";

//* components
import Title from "@/components/ui/Title";
import Subtitle from "@/components/ui/Subtitle";


const CoinDescription = ({ data }) => {

    const targetCurrency = useSelector(state => state.options.targetCurrency);
    const {
        price_change_percentage_24h_in_currency,
        price_change_percentage_7d_in_currency
    } = data?.market_data || {};
    const htmlParser = new Parser();



    return (
        <div className='flex flex-col gap-8 my-6'>

            <div>
                <Title>{data?.name} ({data?.symbol?.toUpperCase()}) price has declined today.</Title>

                <Subtitle>
                    The price of {data?.name} ({data?.symbol?.toUpperCase()}) is
                    <span className='text-primary'> {targetCurrency.symbol}{separatorThreeToThree(data?.market_data?.current_price?.[targetCurrency.code])} </span>
                    today with a 24-hour trading volume of
                    <span className='text-primary'> {targetCurrency.symbol}{separatorThreeToThree(data?.market_data?.total_volume?.[targetCurrency.code])} </span>.
                    This represents a
                    <span className={price_change_percentage_24h_in_currency?.[targetCurrency.code]<0?'text-danger':'text-success'}> {price_change_percentage_24h_in_currency?.[targetCurrency.code]?.toFixed(2)}% </span>
                    price decline in the last 24 hours and a
                    <span className={price_change_percentage_7d_in_currency?.[targetCurrency.code]<0?'text-danger':'text-success'}> {price_change_percentage_7d_in_currency?.[targetCurrency.code]?.toFixed(2)}% </span>
                    price increase in the past 7 days. With a circulating supply of
                    <span className='text-primary'> {nFormatter(data?.market_data?.circulating_supply)} </span>
                    {data?.symbol?.toUpperCase()}, {data?.name} is valued at a market cap of
                    <span className='text-primary'> {targetCurrency.symbol}{separatorThreeToThree(data?.market_data?.market_cap?.[targetCurrency.code])} </span>.
                </Subtitle>
            </div>

            <div className='coin-description space-y-2'>
                <Title>Description</Title>
                {
                    data?.description?.en?
                        convertStringToHTML(data?.description?.en).map((text, index) => <p key={index}><Subtitle>{htmlParser.parse(text)}</Subtitle></p>) :
                        <Subtitle>No information.</Subtitle>
                }
            </div>

        </div>
    );
};

export default CoinDescription;