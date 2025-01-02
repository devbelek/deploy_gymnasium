"use client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, ReactNode } from "react";
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false
    },
  },
});

interface LayoutClientProps {
  children: ReactNode;
}

const LayoutClient: FC<LayoutClientProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {children}
      </Provider>
    </QueryClientProvider>
  );
};

export default LayoutClient;