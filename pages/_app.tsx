import '../styles/globals.css';

import { persistor, store } from '@//store/store';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          <Component {...pageProps} />;
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}
