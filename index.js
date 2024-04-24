import 'dotenv/config';
import express from 'express';
const app = express();

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.BASE_URL}:${process.env.PORT}`);
});