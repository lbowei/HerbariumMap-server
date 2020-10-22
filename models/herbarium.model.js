const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Herbrium Schema
//Record is like:
// {
//   "Herbariumname":"nameE",
//   "latitude" : "46.9827743",
//   "longitude":"-81.34342"
// }

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
