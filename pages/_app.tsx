import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ProtectRoute from '../src/ProtectRoute';
import '../styles/globals.css';

declare module 'react-query/types/react/QueryClientProvider' {
  interface QueryClientProviderProps {
    children?: React.ReactNode;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ProtectRoute>
        <Component {...pageProps} />
      </ProtectRoute>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default MyApp;
