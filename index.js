import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import { router as productRouter } from './routers/productRouter.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import cors from 'cors';

const app = express();
app.use(express.json());

var corsOptions = {
    origin: process.env.FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions));

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

app.use(errorMiddleware);
 
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