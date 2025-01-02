"use client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReduxProvider from "@/providers/ReduxProvider";
import { FC, ReactNode, useEffect } from "react";
import { StoreProvider } from "@/redux/store";

const queryClient = new QueryClient({
 defaultOptions: {
   queries: {
     staleTime: 60 * 1000,
     cacheTime: 5 * 60 * 1000,
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
     <StoreProvider>
       <ReduxProvider>{children}</ReduxProvider>
     </StoreProvider>
   </QueryClientProvider>
 );
};

export default LayoutClient;