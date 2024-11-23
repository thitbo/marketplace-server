const listingController = require("../controllers/listingController");
const { Listing } = require("../models/model");

const router = require("express").Router();

//ADD Listing
router.post("/", listingController.createListing);

router.get("/", listingController.getAllListingData);

router.get("/:id", listingController.getListingDetail);

router.post("/detail", listingController.getListingDataBySig);

router.delete("/delete/:id", listingController.deleteListingData);

module.exports = router;