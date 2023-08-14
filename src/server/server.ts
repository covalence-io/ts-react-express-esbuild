import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.get('/api/hello', (req, res) => {
	res.json({ message: 'world' });
});

app.listen(3000);
