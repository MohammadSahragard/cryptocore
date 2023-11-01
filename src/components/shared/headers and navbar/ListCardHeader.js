//* component's
import Title from "@/components/ui/Title";


const ListCardHeader = () => {
    return (
        <div className='h-10 px-2 border-b border-default-300 bg-default-100 backdrop-blur-lg
                        sticky top-14
                        grid grid-cols-[20px_auto_120px_60px_60px_60px_170px_170px] items-center gap-2
        '>
            <Title>#</Title>
            <Title>Coin</Title>
            <Title>Price</Title>
            <Title>1h</Title>
            <Title>24h</Title>
            <Title>7d</Title>
            <Title>Market Cap</Title>
            <Title customClassName='justify-self-end'>Last 7 Day</Title>
        </div>
    );
};


export default ListCardHeader;