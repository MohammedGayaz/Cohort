"use strict";
// getting users data along with address wiht JOIN
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
const getFullData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const client = new pg_1.Client({ connectionString: config_1.db_url });
    try {
        yield client.connect();
        // const queryStr = `
        // SELECT u.username, u.email, u.city, u.country, u.street, u.pincode
        // FROM users u
        // JOIN addresses a ON u.id = a.user_id
        // WHERE u.id = $1
        // `;
        const queryStr = `
            SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1
        `;
        const res = yield client.query(queryStr, [id]);
        console.log(res.rows);
    }
    catch (err) {
        console.log("error: ", err);
    }
    finally {
        client.end();
    }
});
getFullData(1);
