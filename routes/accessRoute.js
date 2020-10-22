const router = require("express").Router();
let Access = require("../models/access.model");

//This route is for get all access record in database
router.route("/").get((req, res) => {
  Access.find()
    .then((access) => res.json(access))
    .catch((err) => res.status(400).json("Error: " + err));
});

//This route is for add access record into database.
router.route("/add").post((req, res) => {
  const HerbariumID = req.body.HerbariumID;
  const date = req.body.date;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;

  const newAccess = new Access({
    HerbariumID,
    date,
    latitude,
    longitude,
  });

  newAccess.save((err, obj) => {
    if (err) {
      res.send(err);
    }
    res.json({
      message: "Herbarium added",
      data: obj,
    });
  });
});

module.exports = router;
