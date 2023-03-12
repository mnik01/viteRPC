import QueryProvider from "./query";
import TRPCProvider from "./trpc";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <TRPCProvider>{children}</TRPCProvider>
    </QueryProvider>
  );
};

export default RootProvider;
