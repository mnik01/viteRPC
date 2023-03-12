import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { createContext } from "./app";

type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();
const router = t.router;
const publicProcedure = t.procedure;
const mergeRouters = t.mergeRouters;

export { t, router, publicProcedure, mergeRouters };
export type { Context };
