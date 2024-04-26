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
const getUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const client = new pg_1.Client({ connectionString: config_1.db_url });
    try {
        yield client.connect();
        const queryStr = "select * from users where email = $1";
        const values = [email];
        const res = yield client.query(queryStr, values);
        if (res.rows.length > 0) {
            console.log("user data: ", res.rows[0]);
        }
        else {
            console.log("user not found");
        }
    }
    catch (err) {
        console.log("Error: ", err);
    }
    finally {
        client.end();
    }
});
getUser("sheikgayazuddin@gmail.com");
