const router = require("express").Router();
let Access = require("../models/access.model");
let Herbarium = require("../models/herbarium.model");

//This route is for get all access record in database
router.route("/").get((req, res) => {
  Access.find()
    .then((access) => res.json(access))
    .catch((err) => res.status(400).json("Error: " + err));
});

// const herbariumID = "5f86504f545d1566bbd389b5";

//get by herbariumID
// router.route("/:id").get((req, res) => {
//   const herbariumID = req.params.id
//   Access.find()
//     .then((access) => {
//       let allRecord = access
//       let recordWithThatID = []
//       for (var i = 0; i < allRecord.length; i++){
//         if (allRecord[i].HerbariumID == herbariumID){
//           recordWithThatID.push(allRecord[i])
//         }
//       }
//       console.log(recordWithThatID)
//       res.json(recordWithThatID)
//     })
//     .catch((err) => res.status(400).json("Error: " + err));
// });

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
