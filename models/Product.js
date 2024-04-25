import mongoose from 'mongoose';

// schema/squelette du modéle
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        quantity: {
            type: Number,
            required: true, 
            default: 0,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false,
        },
    },
    // timestamps = created_At / updated_At
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema);

export { Product };