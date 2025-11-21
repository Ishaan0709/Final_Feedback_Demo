const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/auth");
const { getMe } = require("../controllers/authController");

// Student dashboard route - only accessible by students
router.get("/student", protect, authorize("student"), (req, res) => {
  res.json({
    success: true,
    message: "Student dashboard accessed successfully",
    data: {
      user: req.user,
    },
  });
});

// Teacher dashboard route - only accessible by teachers
router.get("/teacher", protect, authorize("teacher"), (req, res) => {
  res.json({
    success: true,
    message: "Teacher dashboard accessed successfully",
    data: {
      user: req.user,
    },
  });
});

// Society dashboard route - only accessible by societies
router.get("/society", protect, authorize("society"), (req, res) => {
  res.json({
    success: true,
    message: "Society dashboard accessed successfully",
    data: {
      user: req.user,
    },
  });
});

module.exports = router;

