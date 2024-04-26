import { Client } from "pg";
import { db_url } from "./config";

interface Address {
  user_id: number;
  city: string;
  country: string;
  street: string;
  pincode: number;
}

const insertAddresss = async ({
  user_id,
  city,
  country,
  street,
  pincode,
}: Address) => {
  const client = new Client({ connectionString: db_url });
  try {
    await client.connect();
    const queryStr =
      "insert into addresses (user_id, city, country, street, pincode) values ($1, $2, $3, $4, $5)";
    const values = [user_id, city, country, street, pincode];
    const res = await client.query(queryStr, values);
    console.log("Inserted successfully ", res);
  } catch (err) {
    console.log(err);
  } finally {
    client.end();
  }
};

const address = {
  user_id: 1,
  city: "New York",
  country: "USA",
  street: "123 Broadway St",
  pincode: 10001,
};

insertAddresss(address);
