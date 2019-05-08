const router = require("express").Router();
const datesController = require("../../controllers/datesController");
const passport = require("passport");

// Matches with "/api/dates"
router.route("/")
  .all(passport.authenticate('jwt', {session: false}))
  .get(datesController.findByUsername)
  .post(datesController.create);

//User Info 
router.route("/getinfo").all(passport.authenticate('jwt', {session: false}))
  .get(datesController.findUser)

//Delete User Info 
router.route("/deleteUser").all(passport.authenticate('jwt', {session: false}))
  .delete(datesController.deleteUser)

// Matches with "/api/dates/:id"
router
  .route("/:id")
  .all(passport.authenticate('jwt', {session: false}))
  // .get(datesController.findById)
  // .post(datesController.create)
  .delete(datesController.remove);
 
getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
};

module.exports = router;
