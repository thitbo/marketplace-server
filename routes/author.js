const authorController = require("../controllers/authorController");

const router = require("express").Router();

//ADD AUTHOR
router.post("/", authorController.addAuthor);

router.get("/", authorController.getAllAuthors);

router.get("/:id", authorController.getAnAuthor);

module.exports = router;