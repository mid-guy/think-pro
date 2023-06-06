const mongoose = require("mongoose");
const Schema = mongoose.Schema;

export const specsCoreLaptopSchema = new mongoose.Schema({
  core: {
    type: String,
    require: true,
  },
  thread: {
    type: Number,
    require: true,
  },
  clock: {
    type: Number,
    require: true,
  },
  cache: {
    type: Number,
    require: true,
  },
});

export const specsMemoryLaptopSchema = new mongoose.Schema({
  storage: {
    type: String,
    require: true,
  },
  clock: {
    type: Number,
    require: true,
  },
  cache: {
    type: Number,
    require: true,
  },
  enhanceAble: {
    type: Boolean,
    require: false,
  },
});

export const specsMonitorLaptopSchema = new mongoose.Schema({
  size: {
    type: Number,
    require: true,
  },
  ratio: {
    type: String,
    require: true,
  },
  panel: {
    type: String,
    require: true,
  },
  clock: {
    type: Number,
    require: true,
  },
  colors: {
    type: String,
    require: true,
  },
});

export const hardDriveSchema = new mongoose.Schema({
  storage: {
    type: Number,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
});

export const GraphicSchema = new mongoose.Schema({
  onBoard: {
    type: String | Boolean,
  },
  gpu: {
    type: String | Boolean,
  },
});

export const specsLaptopSchema = new mongoose.Schema({
  cpu: specsCoreLaptopSchema,
  memory: specsMemoryLaptopSchema,
  monitor: specsMonitorLaptopSchema,
  hardDrive: hardDriveSchema,
  graphic: GraphicSchema,
});

const LaptopSchema = new Schema({
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
  specs: specsLaptopSchema,
  images: [
    {
      type: String,
      require: true,
    },
  ],
});

module.exports = mongoose.model("laptop", LaptopSchema);
