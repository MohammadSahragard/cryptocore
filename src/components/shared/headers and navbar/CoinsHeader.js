//* components
import Title from "@/components/ui/Title";
import Button from "@/components/ui/Button";
import SelectTargetCurrency from "../selects/SelectTargetCurrency";
import CoinViewMode from "../switch buttons/CoinsViewMode";
import SelectTabCoins from "../selects/SelectTabCoins";


const CoinsHeader = () => {
    return (
        <div className='h-14 flex justify-between items-center px-3 bg-background/70 backdrop-blur-lg border-b border-default-300 z-30'>
            <Title>Cryptocurrencies</Title>

            <div className='gap-2 lg:flex hidden'>
                <Button isActive>Market Cap</Button>
                <Button>Top Gainers</Button>
                <Button>Top Losers</Button>
            </div>

            <div className='block lg:hidden'>
                <SelectTabCoins />
            </div>

            <div className='flex items-center gap-2'>
                <SelectTargetCurrency />
                <CoinViewMode />
            </div>
        </div>
    );
};


export default CoinsHeader;