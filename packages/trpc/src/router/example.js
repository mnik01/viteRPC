"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const trpc_1 = require("../trpc");
const ExampleRouter = (0, trpc_1.router)({
    exampleWithArgs: trpc_1.publicProcedure
        .input(zod_1.z.object({
        message: zod_1.z.string(),
    }))
        .mutation((req) => {
        return { info: req.input.message };
    }),
    example: trpc_1.publicProcedure.query(({ ctx }) => __awaiter(void 0, void 0, void 0, function* () {
        return { info: 42 };
    })),
});
exports.default = ExampleRouter;
