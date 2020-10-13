const router = require("express").Router();
let Herbarium = require("../models/herbarium.model");

router.route("/").get((req, res) => {
  Herbarium.find()
    .then((herbariums) => res.json(herbariums))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const Herbariumname = req.body.Herbariumname;
  const location = req.body.location;

  const newHerbarium = new Herbarium({ Herbariumname, location });

  newHerbarium
    .save()
    .then(() => res.json("Herbarium added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
