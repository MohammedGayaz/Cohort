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
const pg_1 = require("pg");
const config_1 = require("./config");
const insertData = (_a) => __awaiter(void 0, [_a], void 0, function* ({ username, email, password }) {
    const client = new pg_1.Client({ connectionString: config_1.db_url });
    try {
        yield client.connect();
        const insertQuery = "insert into users (username, email, password) values ($1, $2, $3) ";
        const values = [username, email, password];
        const result = yield client.query(insertQuery, values);
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        client.end();
    }
});
const userData = {
    username: "Mohammed",
    email: "sheikgayazuddin@gmail.com",
    password: "password",
};
insertData(userData);
