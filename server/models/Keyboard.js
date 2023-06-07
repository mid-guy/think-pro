const mongoose = require("mongoose");
const Schema = mongoose.Schema;

export const specsConnectionKeyboardSchema = new mongoose.Schema({
  type: {
    type: String,
    require: true,
  },
  driver: {
    type: [String],
    require: true,
  },
  maxNumberDevice: {
    type: Number,
    require: true,
  },
});

export const LayoutKeyboardSchema = new mongoose.Schema({
  switch: {
    type: [String],
    required: true,
  },
  layout: {
    type: [Number],
    require: true,
  },
  button: {
    type: [Number],
    require: true,
  },
});

export const OSKeyboardSchema = new mongoose.Schema({
  os: {
    type: [String],
    require: true,
  },
});

export const SizeKeyboardSchema = new mongoose.Schema({
  light: {
    type: Number,
    require: true,
  },
  width: {
    type: Number,
    require: true,
  },
  height: {
    type: Number,
    require: true,
  },
});

export const MassAndSizeSchema = new mongoose.Schema({
  mass: {
    type: Number,
    require: true,
  },
  size: SizeKeyboardSchema,
  material: {
    type: String,
    require: true,
  },
});

export const specsKeyboardSchema = new mongoose.Schema({
  connection: specsConnectionKeyboardSchema,
  os: OSKeyboardSchema,
  layout: LayoutKeyboardSchema,
  massAndSize: MassAndSizeSchema,
});

const KeyboardSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  sku: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  guarantee: {
    type: Number,
    validate: {
      validator: function (value) {
        return value >= 0;
      },
      message: `Giá trị thời gian bảo hành phải lớn hơn hoặc bằng 0`,
    },
    required: true,
  },
  colors: [
    {
      type: String,
      required: true,
    },
  ],
  versions: [
    {
      type: String,
      required: true,
    },
  ],
  price: {
    type: Number,
    validate: {
      validator: function (value) {
        return value >= 0;
      },
      message: `Giá trị lớn hơn hoặc bằng 0`,
    },
    required: true,
  },
  discount: {
    type: Number,
    validate: {
      validator: function (value) {
        return value >= 0 && value <= 100;
      },
      message: `Giá trị discount phải nằm trong khoảng từ 0 -> 100%`,
    },
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  specs: specsKeyboardSchema,
  images: [
    {
      type: String,
      require: true,
    },
  ],
});

module.exports = mongoose.model("keyboard", KeyboardSchema);
