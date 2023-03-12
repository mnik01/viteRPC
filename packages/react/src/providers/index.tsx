// Imports
// ========================================================
import WagmiProvider from "./wagmi";
import QueryProvider from "./query";
import TRPCProvider from "./trpc";

// Root Provider
// ========================================================
const RootProvider = ({ children }: { children: React.ReactNode }) => {
    return <div>
        <WagmiProvider>
            <QueryProvider>
                <TRPCProvider>
                    {children}
                </TRPCProvider>
            </QueryProvider>
        </WagmiProvider>
    </div>
};

// Exports
// ========================================================
export default RootProvider;