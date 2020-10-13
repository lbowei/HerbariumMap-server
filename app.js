const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://longbo:weilongbo.98@cluster0.3drao.gcp.mongodb.net/accessrecord?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mongodb database connection is on");
});

const herbariumRouter = require("./routes/herbariumRoute");
const accessRouter = require("./routes/accessRoute");

app.use("/herbarium", herbariumRouter);
app.use("/access", accessRouter);

app.listen(port, () => {
  console.log("server is runnning on");
});
