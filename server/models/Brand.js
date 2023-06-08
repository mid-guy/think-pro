const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { BRAND } = require("../constants/common/index.js");

const BrandSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    enum: BRAND,
    required: true,
    unique: true,
  },
  images: [
    {
      type: String,
      require: true,
    },
  ],
});

module.exports = mongoose.model("brand", BrandSchema);
