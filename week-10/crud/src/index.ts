import { Client } from "pg";
import { db_url } from "./config";

interface User {
  username: string;
  email: string;
  password: string;
}

const insertData = async ({ username, email, password }: User) => {
  const client = new Client({ connectionString: db_url });
  try {
    await client.connect();
    const insertQuery =
      "insert into users (username, email, password) values ($1, $2, $3) ";
    const values = [username, email, password];
    const result = await client.query(insertQuery, values);
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    client.end();
  }
};

const userData = {
  username: "Mohammed",
  email: "sheikgayazuddin@gmail.com",
  password: "password",
};

insertData(userData);
