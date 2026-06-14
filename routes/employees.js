const express = require("express");

const router = express.Router();

const employees = [
  {
    id: 1,
    name: "Nithin",
    department: "Data Engineering",
    location: "Kerala"
  },
  {
    id: 2,
    name: "John",
    department: "Cloud Engineering",
    location: "Bangalore"
  },
  {
    id: 3,
    name: "David",
    department: "DevOps",
    location: "Hyderabad"
  }
];

router.get("/", (req, res) => {
  res.json(employees);
});

module.exports = router;