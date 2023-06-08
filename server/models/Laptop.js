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
    require: true,
  },
  gpu: {
    type: String | Boolean,
    require: true,
  },
});

export const SizeSchema = new mongoose.Schema({
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
  size: SizeSchema,
  material: {
    type: String,
    require: true,
  },
});

export const specsLaptopSchema = new mongoose.Schema({
  cpu: specsCoreLaptopSchema,
  memory: specsMemoryLaptopSchema,
  monitor: specsMonitorLaptopSchema,
  hardDrive: hardDriveSchema,
  graphic: GraphicSchema,
  massAndSize: MassAndSizeSchema,
});

const LaptopSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["COMPLETED", "PROCESSING"],
    default: "PROCESSING",
    required: true,
  },
  sku: {
    type: String,
    required: true,
    unique: true,
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
