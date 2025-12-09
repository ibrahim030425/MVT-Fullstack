import { Client } from 'pg';
export const database = new Client({
    connectionString: 'postgres://postgres:@localhost/TodoList'
});
database.connect();
//# sourceMappingURL=db.js.map