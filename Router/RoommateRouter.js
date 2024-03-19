const express = require("express");
const router = express.Router();
const  {
    gettingAllRoommate,  getSingleRoommate,createRoommate,updateRoommate,deleteRoommate
} = require("../controllers/Roommate")
router.route("/").get(gettingAllRoommate);
router.route("/:roommate_id").get(getSingleRoommate);
router.route("/:property_id").post(createRoommate);
router.route("/:roommate_id").patch(updateRoommate);
router.route("/:roommate_id").delete(deleteRoommate);
module.exports = router;