import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "TodoList",
    password: "1212",
    port: 5432
});

export { pool}
