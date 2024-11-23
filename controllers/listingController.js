
const {Listing} = require('../models/model');


const listingController = {
  createListing: async (req, res) => {
    try {
      const newListing = new Listing(req.body);
      const savedListing = await newListing.save();
      res.status(200).json(savedListing);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  },

  getAllListingData: async (req, res) => {
    try {
      const data = await Listing.find();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getListingDetail: async (req, res) => {
    let data
    try {
      data = await Listing.findById(req.params.id);
    } catch (err) {
      res.status(500).json(err);
    }
    res.status(200).json(data);
  },

  getListingDataBySig: async (req, res) => {

    let data
    try {
      data = await Listing.find({signature: req.body.signature});
      if(data.length === 0) {
        res.status(500).json({message: 'Signature not found'});
      }
      res.status(200).json(data);
      if (!data) {
        res.status(500).json({message: 'Signature not found'});
      }
    } catch (err) {
      res.status(500).json({message: 'Signature not found'});
    }
  },

  deleteListingData: async (req, res) => {
    let data
    try {
      data = await Listing.findByIdAndDelete(req.params.id);
    } catch (err) {
      res.status(500).json(err);
    }
    res.status(200).json(data);
  }
}

module.exports = listingController;