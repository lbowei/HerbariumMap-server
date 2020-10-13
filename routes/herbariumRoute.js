const router = require("express").Router();
let Herbarium = require("../models/herbarium.model");

router.route("/").get((req, res) => {
  Herbarium.find()
    .then((herbariums) => res.json(herbariums))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const Herbariumname = req.body.Herbariumname;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;

  const newHerbarium = new Herbarium({ Herbariumname, latitude, longitude });

  newHerbarium.save((err, obj) => {
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
