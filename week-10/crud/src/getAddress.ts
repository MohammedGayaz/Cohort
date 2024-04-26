// getting users data along with address wiht JOIN

import { Client } from "pg";
import { db_url } from "./config";

const getFullData = async (id: number) => {
  const client = new Client({ connectionString: db_url });
  try {
    await client.connect();
    const queryStr = `
            SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1
        `;
    const res = await client.query(queryStr, [id]);
    console.log(res.rows);
  } catch (err) {
    console.log("error: ", err);
  } finally {
    client.end();
  }
};

getFullData(1);
