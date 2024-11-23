const mongoose = require("mongoose");


// Define the schema like create a struct type for Object
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  year: {
    type: Number,
    required:true
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: String,
  },
  genres: {
    type: [String],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
});


const listingSchema = new mongoose.Schema({
  signature: {
    type: String,
    required: true,
  },
  startTime: {
    type: Number,
    required: true,
  },
  endTime: {
    type: Number,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true
  },
  tokenListingAddress: {
    type: String,
    required: true
  },
  nft: {
    type: Object
  }
});

let Book = mongoose.model("Book", bookSchema);
let Author = mongoose.model("Author", authorSchema);
let Listing = mongoose.model("Listing", listingSchema);

module.exports = { Book, Author, Listing };