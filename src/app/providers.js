'use client';

// next ui provider
import { NextUIProvider } from '@nextui-org/react';

// redux provider
import store from '@/redux/app/store';
import { Provider } from 'react-redux';


export const Providers = ({ children }) => {
    return (
        <NextUIProvider>
            <Provider store={store}>
                {children}
            </Provider>
        </NextUIProvider>
    );
};