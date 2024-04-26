import { Client } from "pg";
import { db_url } from "./config";

const createAddressTable = async () => {
  const client = new Client({ connectionString: db_url });
  try {
    await client.connect();
    const res = await client.query(`
    CREATE TABLE addresses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(20),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
    `);
    console.log("Table created successfully", res);
  } catch (err) {
    console.log("Error: ", err);
  } finally {
    client.end();
  }
};

createAddressTable();
