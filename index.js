import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
const app = express();

// router
app.get('/', (req, res) => {
    res.send('Hello NODE-API')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog')
})


mongoose.
connect('mongodb+srv://admin:sVwtl9EdeVTr0YvE@node-api.uadbae6.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NODE-API')
.then(() => {
    console.log('connected to MongoDB');
    app.listen(process.env.PORT, () => {
        console.log(`App listening on port ${process.env.BASE_URL}:${process.env.PORT}`);
    });
}).catch((error) => {
    console.log(error);
})