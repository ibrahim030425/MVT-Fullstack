import express from 'express';
import { database } from './db.js';
const app = express();
app.get('/', (_request, response) => {
    response.send('Hello World!');
});
app.listen(3000, () => {
    console.log('Webbtjänsten kan nu ta emot anrop.');
});
//# sourceMappingURL=index.js.map