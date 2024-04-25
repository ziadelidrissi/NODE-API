import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import { Product } from "./models/Product.js";

const app = express();

app.use(express.json());

// to read form data
app.use(express.urlencoded({ extended: true }));

// router
app.get('/', (req, res) => {
    res.send('Hello NODE-API')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog')
})

app.get('/products', async (req, res) => {
    try {   
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})


// POST = add data
app.post('/product', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

// PUT (or PATCH) = update data
app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product) {
            return res.status(404).json({message: `cannot find any product with ID : ${id}`});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
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