import { client } from "../index";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  try {
    await client.connect();
    const queryStr =
      "INSERT INTO TODO (TITLE, DESCRIPTOIN, USER_ID) VALUES ($1 $2 $3)";
    const value = [title, description, userId];
    const res = await client.query(queryStr, value);
    return res;
  } catch (err) {
    console.log(err);
  } finally {
    client.end();
  }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  try {
    await client.connect();
    const queryStr = "UPDATE TODO SET DONE=$1 WHERE TODO_ID=$2";
    const value = [true, todoId];
    const res = await client.query(queryStr, value);
    return res;
  } catch (err) {
    console.log(err);
  } finally {
    client.end();
  }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  try {
    await client.connect();
    const queryStr = `
        SELECT TITLE, DESCRIPTION, DONE,  ID
        FROM TODO 
        WHERE ID = $1
        `;
    const value = [userId];
    const res = await client.query(queryStr, value);
    return res.rows;
  } catch (err) {
    console.log(err);
  } finally {
    client.end();
  }
}
