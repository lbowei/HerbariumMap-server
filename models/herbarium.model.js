const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const herbariumSchema = new Schema({
  occid: {
    type: Number,
    required: true,
  },
  decimalLatitude: {
    type: Number,
    required: true,
  },
  decimalLongitude: {
    type: Number,
    required: true,
  },
  catalogNumber: {
    type: String,
    required: true,
  },
  recordedBy: {
    type: String,
    required: true,
  },
  recordNumber: {
    type: Number,
    required: true,
  },
  eventDate: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  stateProvince: {
    type: String,
    required: true,
  },
  county: {
    type: String,
    required: true,
  },
  access: [
    {
      accessDate: { type: String },
      cnt: {
        type: Number,
      },
    },
  ],
});

const Herbarium = mongoose.model("Herbarium", herbariumSchema);
module.exports = Herbarium;
