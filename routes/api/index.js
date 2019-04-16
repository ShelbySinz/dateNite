const router = require("express").Router();
const dateRoutes = require("./Date");

// Book routes
router.use("/dates", dateRoutes);

module.exports = router;
