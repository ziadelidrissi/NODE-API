import { Product } from "../models/Product.js";
import asyncHandler from "express-async-handler";

const productController = {
    index: asyncHandler(async (req, res) => {
        try {   
            const products = await Product.find({});
            res.status(200).json(products);
        } catch (error) {
            res.status(500);
            throw new Error(error.message);
        }
    }),

    show: asyncHandler(async (req, res) => {
        try {
            const { id } = req.params;
            const product = await Product.findById(id)
            res.status(200).json(product);
        } catch (error) {
            res.status(500);
            throw new Error(error.message);
        }
    }),

    store: asyncHandler(async (req, res) => {
        try {
            const product = await Product.create(req.body);
            res.status(200).json(product);
        } catch (error) {
            res.status(500);
            throw new Error(error.message);
        }
    }),

    update: asyncHandler(async (req, res) => {
        try {
            const { id } = req.params;
            const product = await Product.findByIdAndUpdate(id, req.body);
            if(!product) {
                res.status(404);
                throw new Error(`cannot find any product with ID : ${id}`);            }
            const updatedProduct = await Product.findById(id);
            res.status(200).json(updatedProduct);
        
        } catch (error) {
            res.status(500);
            throw new Error(error.message);
        }
    }),

    destroy: asyncHandler(async (req, res) => {
        try {
            const { id } = req.params;
            const product = await Product.findByIdAndDelete(id);
            if(!product) {
                res.status(404);
                throw new Error(`cannot find any product with ID : ${id}`);
            }
            res.status(200).json(product);
    
        } catch (error) {
            res.status(500);
            throw new Error(error.message);
        }
    }),
}

export { productController };