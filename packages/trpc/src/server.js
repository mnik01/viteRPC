"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
// ========================================================
const app_1 = __importDefault(require("./app"));
// Constants
// ========================================================
const PORT = process.env.PORT || 5001;
// Server
// ========================================================
app_1.default.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
