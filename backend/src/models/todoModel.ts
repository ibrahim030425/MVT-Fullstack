import { pool } from "../db.js";

 export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const getTodos = async (): Promise<Todo[]> => {
    const res = await pool.query("SELECT * FROM todos ORDER BY id ASC");
    return res.rows;
};

const addTodo = async (text: string): Promise<Todo> => {
    const res = await pool.query(
        "INSERT INTO todos (text, completed) VALUES ($1, false) RETURNING *",
        [text]
    );
    return res.rows[0];
};

 const toggleTodo = async (id: number): Promise<Todo> => {
    const res = await pool.query(
        "UPDATE todos SET completed = NOT completed WHERE id = $1 RETURNING *",
        [id]
    );
    return res.rows[0];
};

const deleteTodo = async (id: number): Promise<void> => {
    await pool.query("DELETE FROM todos WHERE id = $1", [id]);
};

export { getTodos, addTodo, toggleTodo, deleteTodo};