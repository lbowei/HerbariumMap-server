const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Access record schema
//Record is like:
// {
//   "HerbariumID":"5f86504f545d1566bbd389b5",
//   "date":"2020-01-01",
//   "latitude":"28.7827743",
//   "longitude":"-31.64342"
// }
const accessSchema = new Schema(
  {
    HerbariumID: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Access = mongoose.model("Access", accessSchema);
module.exports = Access;
