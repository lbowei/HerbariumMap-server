const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const herbariumSchema = new Schema(
  {
    Herbariumname: {
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

const Herbarium = mongoose.model("Herbarium", herbariumSchema);
module.exports = Herbarium;

// loc: { type: "Point", coordinates: [ longitude, latitude ] },
