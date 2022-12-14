import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import SecretPassword from './utils/secret.js';
import * as dotenv  from 'dotenv';

dotenv.config();
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', (_, res) => {
	res.sendFile(path.join(__dirname, '/public/pages/index.html'));
});

app.get('/secretPassword', (req, res) => {

	const password = req.header('password');

	res.send(SecretPassword(password));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
