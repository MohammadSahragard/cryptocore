import { Nunito_Sans } from 'next/font/google';
import '../globals.css';

//* providers
import { Providers } from '../providers';

//* project font
const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Cryptocore | Greatest Crypto Market',
  description: 'One of the biggest cryptocurrency market in web.',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body className={nunitoSans.className}>
        <Providers>
          <div className='theme-app light bg-slate-950 light:bg-slate-100'>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
