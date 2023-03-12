// Imports
// ========================================================
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../../../trpc/src/router';

// Config
// ========================================================
const trpc = createTRPCReact<AppRouter>();

// Exports
// ========================================================
export default trpc;