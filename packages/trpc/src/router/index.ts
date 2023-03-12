import { mergeRouters } from "../trpc";
import ExampleRouter from "./example";

type AppRouter = typeof appRouter;

const appRouter = mergeRouters(ExampleRouter);

export default appRouter;
export type { AppRouter };
