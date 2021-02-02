const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = 4000;
const bookRouter = require("./routes/book.route");
const userRouter = require("./routes/user.route");

app.use("/book", bookRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log("App is listening on port " + port);
});
