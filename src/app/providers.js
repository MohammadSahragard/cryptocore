'use client';

// next ui provider
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from "next-themes";

// redux provider
import store from '@/redux/app/store';
import { Provider } from 'react-redux';


export const Providers = ({ children }) => {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
                <Provider store={store}>
                    {children}
                </Provider>
            </NextThemesProvider>
        </NextUIProvider>
    );
};