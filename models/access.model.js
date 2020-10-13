const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accessSchema = new Schema(
  {
    accessID: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    location: { type: { type: String }, coordinates: [Number] },
  },
  {
    timestamps: true,
  }
);

const Access = mongoose.model("Access", accessSchema);
module.exports = Access;
// loc: { type: "Point", coordinates: [ longitude, latitude ] },
