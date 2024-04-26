import { Client } from "pg";
import { db_url } from "./config";

const getUser = async (email: string) => {
  const client = new Client({ connectionString: db_url });
  try {
    await client.connect();
    const queryStr = "select * from users where email = $1";
    const values = [email];
    const res = await client.query(queryStr, values);
    if (res.rows.length > 0) {
      console.log("user data: ", res.rows[0]);
    } else {
      console.log("user not found");
    }
  } catch (err) {
    console.log("Error: ", err);
  } finally {
    client.end();
  }
};

getUser("sheikgayazuddin@gmail.com");
