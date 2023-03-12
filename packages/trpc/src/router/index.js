"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const trpc_1 = require("../trpc");
const example_1 = __importDefault(require("./example"));
const appRouter = (0, trpc_1.mergeRouters)(example_1.default);
exports.default = appRouter;
