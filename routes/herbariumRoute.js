const router = require("express").Router();
let Herbarium = require("../models/herbarium.model");

//This route is for get all herbrium record in database
router.route("/").get((req, res) => {
  Herbarium.find()
    .then((herbariums) => res.json(herbariums))
    .catch((err) => res.status(400).json("Error: " + err));
});

//This route is for add herbrium record into database.
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
