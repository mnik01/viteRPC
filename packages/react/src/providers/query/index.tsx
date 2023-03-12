// Imports
// ========================================================
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Config
// ========================================================
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

// Provider
// ========================================================
const QueryProvider = ({ children }: { children: React.ReactNode }) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
};

// Exports
// ========================================================
export default QueryProvider;
export {
    queryClient
}
