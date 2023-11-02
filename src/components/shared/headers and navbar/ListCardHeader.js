//* component's
import Title from "@/components/ui/Title";


const ListCardHeader = () => {
    return (
        <div className='h-10 w-min px-2 border-b border-default-300
                        grid grid-cols-[40px_minmax(160px,auto)_120px_60px_60px_60px_170px_170px] items-center gap-2
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