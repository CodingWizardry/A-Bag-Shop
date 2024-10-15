const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  discount: {
    type:Number,
    default:0
  },
  images: {
    type: Array,
    default: [],
  },
  bgcolor: String,
  textcolor: String,
  panelcolor: String,
});

module.exports = mongoose.model("products", productSchema);
