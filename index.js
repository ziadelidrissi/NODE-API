import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import { router as productRouter } from './routers/productRouter.js';

const app = express();

app.use(express.json());

// to read form data
app.use(express.urlencoded({ extended: true }));

// router
app.use(productRouter);


app.get('/', (req, res) => {
    res.send('Hello NODE-API')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog')
})



mongoose.
connect(process.env.DB_URL)
.then(() => {
    console.log('connected to MongoDB');
    app.listen(process.env.PORT, () => {
        console.log(`App listening on port ${process.env.BASE_URL}:${process.env.PORT}`);
    });
}).catch((error) => {
    console.log(error);
})