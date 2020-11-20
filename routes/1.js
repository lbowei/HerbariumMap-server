db.counties > db.counties.aggregate([{ $group: { _id: "name" } }]);

db.counties.aggregate([
  {
    $unwind: "$cases",
  },
  {
    $match: {
      "cases.count": { $gte: 1000 },
    },
  },
  {
    $project: {
      name:1,
      cases :1,
      _id:0
    },
  },
]);
