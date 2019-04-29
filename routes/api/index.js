const router = require("express").Router();
const dateRoutes = require("./Date");
const auth = require("./auth");

// routes

router.use("/dates", dateRoutes)
router.use("/user", auth)

module.exports = router;

