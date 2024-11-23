
const {Author, Book} = require('../models/model');


const authorController = {
  addAuthor: async (req, res) => {
    try {
      const newAuthor = new Author(req.body);
      const savedAuthor = await newAuthor.save();
      res.status(200).json(savedAuthor);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  },

  getAllAuthors: async (req, res) => {
    try {
      const authors = await Author.find();
      res.status(200).json(authors);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAnAuthor: async (req, res) => {
    try {
      const author = await Author.find({_id: req.params.id});
      
      res.status(200).json(author);
    } catch (err) {
      res.status(500).json(err);
    }
  },
}

module.exports = authorController;