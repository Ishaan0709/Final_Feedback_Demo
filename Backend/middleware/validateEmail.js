const mongoose = require("mongoose");

// Check if email exists in the database collections (students, teachers, or societies)
exports.validateEmailForRole = async (req, res, next) => {
  try {
    const { email, role } = req.body;

    if (!email || !role) {
      return res.status(400).json({
        success: false,
        message: "Email and role are required",
      });
    }

    // Ensure database connection is ready
    if (!mongoose.connection.readyState) {
      return res.status(503).json({
        success: false,
        message: "Database connection not ready. Please try again.",
      });
    }

    const db = mongoose.connection.db;
    const normalizedEmail = email.toLowerCase().trim();

    // Map role to collection name in the database
    const collectionMap = {
      student: "students",
      teacher: "teachers",
      society: "societies",
    };

    const collectionName = collectionMap[role.toLowerCase()];

    if (!collectionName) {
      return res.status(400).json({
        success: false,
        message: "Invalid role. Must be student, teacher, or society",
      });
    }

    // Check if email exists in the appropriate database collection
    const collection = db.collection(collectionName);
    const emailDoc = await collection.findOne({ email: normalizedEmail });

    if (!emailDoc) {
      return res.status(403).json({
        success: false,
        message: `Email '${email}' is not authorized for ${role} role. Please use an email from the ${collectionName} collection.`,
      });
    }

    // Attach validated email to request
    req.validatedEmail = normalizedEmail;
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error during email validation",
      error: error.message,
    });
  }
};

