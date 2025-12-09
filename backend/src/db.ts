import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "todo_db",
    password: "1212",
    port: 5432
});

export { pool}
