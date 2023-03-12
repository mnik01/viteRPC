// Imports
// ========================================================
import 'iron-session';
import { SiweMessage } from 'siwe';

// Type
// ========================================================
declare module 'iron-session' {
    interface IronSessionData {
        nonce?: string;
        issuedAt?: string;
        expirationTime?: string;
        siwe?: SiweMessage
    }
};