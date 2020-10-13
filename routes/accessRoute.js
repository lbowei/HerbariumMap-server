const router = require("express").Router();
let Access = require("../models/access.model");

router.route("/").get((req, res) => {
  Access.find()
    .then((access) => res.json(access))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const accessID = req.body.accessID;
  const date = req.body.date;
  const location = req.body.location;

  const newAccess = new Access({
    accessID,
    date,
    location,
  });

  newAccess
    .save()
    .then(() => res.json("Access added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
