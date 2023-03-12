// Imports
// ========================================================
import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { createContext } from './app';

// Types
// ========================================================
type Context = inferAsyncReturnType<typeof createContext>;

// Config
// ========================================================
// Initiated tRPC instance for routes
const t = initTRPC.context<Context>().create();
const router = t.router;
const publicProcedure = t.procedure;
const mergeRouters = t.mergeRouters;

// Exports
// ========================================================
export {
    Context,
    t,
    router,
    publicProcedure,
    mergeRouters
}