// Imports
// ========================================================
import { createClient, WagmiConfig } from "wagmi";
import { getDefaultProvider } from 'ethers';

// Config
// ========================================================
const client = createClient({
    autoConnect: true,
    provider: getDefaultProvider(),
});

// Provider
// ========================================================
const WagmiProvider = ({ children }: { children: React.ReactNode }) => {
    return <WagmiConfig client={client}>{children}</WagmiConfig>
};

// Exports
// ========================================================
export default WagmiProvider;