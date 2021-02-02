const bookRouter = require("express").Router();
const bookController = require("../controllers/BookController");

// eslint-disable-next-line
bookRouter.get("/books", (req, res, next) => {
  bookController.getAllBooks((err, data) => {
    if (err) next();
    res.send({
      books: data,
    });
  });
});

// eslint-disable-next-line
bookRouter.put("/update", (req, res, next) => {
  bookController.updateBookByID(
    req.body.id,
    req.body.field,
    req.body.value,
    (err, data) => {
      if (err) next();
      res.send({
        res: data,
      });
    }
  );
});

// eslint-disable-next-line
bookRouter.get("/:id", (req, res, next) => {
  bookController.getBookByID(req.params.id, (err, data) => {
    if (err) next();
    res.send({
      book: data,
    });
  });
});

// eslint-disable-next-line
bookRouter.put("/add", (req, res, next) => {
  bookController.addBook(
    req.body.id,
    req.body.title,
    req.body.numofpages,
    req.body.author,
    // eslint-disable-next-line
    (err, data) => {
      if (err) next();
      res.send({
        res: "Insert book succesfully",
      });
    }
  );
});

module.exports = bookRouter;
