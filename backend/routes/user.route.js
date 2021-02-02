const userController = require("../controllers/UserController");
const userRouter = require("express").Router();

// eslint-disable-next-line
userRouter.put("/create", (req, res, next) => {
  let { id, username, password, name } = req.body;
  userController.create(id, username, password, name, (err, data) => {
    if (err) next();
    res.send({
      res: data,
    });
  });
});

// eslint-disable-next-line
userRouter.post("/login", (req, res, next) => {
  userController.login(req.body.username, req.body.password, (err, data) => {
    if (err) next();
    if (data.msg) {
      res.send({
        msg: data.msg,
      });
    } else
      res.send({
        data: data,
      });
  });
});

module.exports = userRouter;
