const express = require("express");
const router = express.Router();
const  {
    gettingAllProperties,  getSingleProperty,createProperty,updatePropertyById,deleteProperty
} = require("../controllers/Properties")
router.route("/").get(gettingAllProperties)
router.route("/:property_id").get(getSingleProperty);
router.route("/").post(createProperty);
router.route("/:property_id").patch(updatePropertyById);
router.route("/:property_id").delete(deleteProperty);
module.exports = router;