const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  products: {
    type: Array,
    default: [],
  },
  orders: {
    type: Array,
    default: [],
  },
  pictures: String,
  gstin: String,
});

module.exports = mongoose.model("owner", ownerSchema);
