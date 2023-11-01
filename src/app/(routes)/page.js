//* components
import CoinsHeader from "@/components/shared/headers and navbar/CoinsHeader";
import Pagination from "@/components/ui/Pagination";
import Coins from "./Coins";


const Home = () => {
  return (
    <main className='relative grid grid-rows-[max-content_auto]'>
      <CoinsHeader />
      <div>
        <div className='absolute inset-0 pt-14 overflow-auto'>
          <Coins />
          
          <div className='flex justify-center'>
            <Pagination />
          </div>
        </div>
      </div>
    </main>
  );
};


export default Home;