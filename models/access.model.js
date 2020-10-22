const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
