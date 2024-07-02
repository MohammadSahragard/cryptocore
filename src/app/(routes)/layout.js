import { Suspense } from 'react';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

import { Nunito_Sans } from 'next/font/google';
import '../globals.css';

//* providers
import { Providers } from '../providers';

//* project font
const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

//* fontawesome
import '/public/FontAwesome.Pro.6.4.2/css/all.css';

//* components
import GlobalMarketInfo from '@/components/shared/headers and navbar/GlobalMarketInfo';
import MainNavbar from '@/components/shared/headers and navbar/MainNavbar';
import Searchbar from '@/components/shared/searchbar/Searchbar';
import Loading from './loading';
import Error from './error';



export const metadata = {
  title: 'Cryptocore | Cryptocurrency marketplace',
  description: 'One of the biggest cryptocurrency market in web.',
  icons: '/images/logo.svg'
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body className={nunitoSans.className}>
        <Providers>
          <div className='h-screen bg-background grid grid-rows-[max-content_max-content_auto] overflow-hidden'>

            {/* Global market info and main navbar section */}
            <GlobalMarketInfo />
            <MainNavbar />

            <div className='grid grid-cols-1 lg:grid-cols-[300px_auto]'>
              {/* Searchbar section in tablet and desktop size */}
              <div className='hidden lg:block'>
                <Searchbar />
              </div>

              {/* Routes are render here */}
              {children}
            </div>

          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
