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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertUser = (_a) => __awaiter(void 0, [_a], void 0, function* ({ username, password, firstname, lastname }) {
    const res = yield prisma.user.create({
        data: {
            username,
            password,
            firstname,
            lastname
        }
    });
    console.log(res);
});
const userData = {
    username: "admin1@mail.com",
    password: "password",
    firstname: "joey1",
    lastname: "oggy1",
};
insertUser(userData);
