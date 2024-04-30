import { client } from "../index";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  try {
    await client.connect();
    const queryStr =
      "INSERT INTO USERS (USERNAME, PASSWORD, NAME) VALUES($1 $2 $3)";
    const value = [username, password, name];
    const res = await client.query(queryStr, value);
    return res.rows[0];
  } catch (err) {
    console.log(err);
  } finally {
    client.end();
  }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
  try {
    await client.connect();
    const queryStr = "SELECT USERNAME, PASSWORD, NAME FROM USERS WHERE ID=$1";
    const value = [userId];
    const res = await client.query(queryStr, value);
    return res.rows[0];
  } catch (err) {
    console.log(err);
  } finally {
    client.end();
  }
}
