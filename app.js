//packages in
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Mongodb cloud link. The database is on the cloud.
const uri =
  "mongodb+srv://longbo:weilongbo.98@cluster0.3drao.gcp.mongodb.net/accessrecord?retryWrites=true&w=majority";

//connect Database.
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mongodb database connection is on");
});

//Two router, first is get/add herbariu, second is get/add access record.
const herbariumRouter = require("./routes/herbariumRoute");
const accessRouter = require("./routes/accessRoute");

app.use("/herbarium", herbariumRouter);
app.use("/access", accessRouter);

//Run our project on port
app.listen(port, () => {
  console.log("server is runnning on");
});
