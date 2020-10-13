const router = require("express").Router();
let Access = require("../models/access.model");

router.route("/").get((req, res) => {
  Access.find()
    .then((access) => res.json(access))
    .catch((err) => res.status(400).json("Error: " + err));
});

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
