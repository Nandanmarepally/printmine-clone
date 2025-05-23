import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  imageUrl: { type: String },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;
