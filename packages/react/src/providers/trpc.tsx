import { httpBatchLink } from "@trpc/client";
import trpc from "../utils/trpc";
import { queryClient } from "./query";

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${import.meta.env.VITE_TRPC_SERVER_URL}`,
    }),
  ],
});

const TRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      {children}
    </trpc.Provider>
  );
};

export default TRPCProvider;
