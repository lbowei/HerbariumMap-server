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
  const occid = req.body.occid;
  const decimalLatitude = req.body.decimalLatitude;
  const decimalLongitude = req.body.decimalLongitude;
  const catalogNumber = req.body.catalogNumber;
  const recordedBy = req.body.recordedBy;
  const recordNumber = req.body.recordNumber;
  const eventDate = req.body.eventDate;
  const country = req.body.country;
  const stateProvince = req.body.stateProvince;
  const county = req.body.county;
  const access = req.body.Access;

  const newHerbarium = new Herbarium({
    occid,
    decimalLatitude,
    decimalLongitude,
    catalogNumber,
    recordedBy,
    recordNumber,
    eventDate,
    country,
    stateProvince,
    county,
    access,
  });

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


