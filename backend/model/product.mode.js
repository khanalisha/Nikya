const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
  name: { type: String, required: true, maxLength: 50 },
  picture:String,
  gender: { type: String, enum: ["male", "female"], required: true },
  category: { type: String, enum: ["makeup", "skincare", "haircare"], required: true },
  price: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports={ ProductModel};
