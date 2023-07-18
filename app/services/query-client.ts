import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      retry: false,
      cacheTime: 1000 * 60 * 60 * 24,
    },
    mutations: {
      retry: false,
    },
  },
});

export { queryClient };
