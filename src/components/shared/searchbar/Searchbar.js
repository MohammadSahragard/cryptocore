"use client";

// public
import { useState, useEffect } from "react";

//* components
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/react";
import Title from "@/components/ui/Title";
import CryptoSearchedCard from "../cards/CryptoSearchedCard";
import Loading from "@/app/(routes)/loading";


//* get data (searched coin and top 7 trending coins (coingecko api))
const getAllCoins = async () => {
    const allCoins = await fetch('https://api.coingecko.com/api/v3/search?query');

    if (!allCoins.ok) {
        throw new Error('Failed to fetch data');
    };

    return allCoins.json();
};

const getTop7Coins = async () => {
    const top7 = await fetch('https://api.coingecko.com/api/v3/search/trending');

    if (!top7.ok) {
        throw new Error('Failed to fetch data');
    };

    return top7.json();
};


const Searchbar = () => {

    // states
    const [searchQuery, setSearchQuery] = useState('');
    const [allCoins, setAllCoins] = useState([]);
    const [top7, setTop7] = useState([]);

    const searchedCoins = allCoins?.filter(coin => coin.name.toLowerCase().includes(searchQuery.toLowerCase()));


    // fetch data
    useEffect(() => {
        const fetchData = async () => {
            const allCoins = await getAllCoins();
            const top7 = await getTop7Coins();

            setAllCoins(allCoins.coins);
            setTop7(top7.coins);
        };

        fetchData();
    }, []);



    return (
        <Card
            radius='none'
            className='h-full bg-transparent border-r border-default-300 grid grid-rows-[max-content_auto]'
            shadow='none'
        >
            <CardHeader className='relative h-14 border-b border-default-300 py-1'>
                <Input
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    startContent={<i className='far fa-search'></i>}
                    radius='none'
                    placeholder='Search currency'
                    classNames={{
                        mainWrapper: 'absolute inset-0',
                        inputWrapper: 'h-full bg-default-200'
                    }}
                />
            </CardHeader>
            <CardBody className='relative'>
                <div className='absolute inset-0 overflow-auto grid grid-cols-1 auto-rows-max gap-2 p-2'>
                    {!searchQuery && top7.length && <Title>Trending Search 🔥</Title>}
                    {
                        top7.length ?
                            (searchQuery ?
                                searchedCoins.slice(0, 20).map(coin => <CryptoSearchedCard key={coin.id} data={coin} />) :
                                top7.map(coin => <CryptoSearchedCard key={coin.item.id} data={coin.item} />)) :
                            <Loading />
                    }
                </div>
            </CardBody>
        </Card>
    );
};


export default Searchbar;