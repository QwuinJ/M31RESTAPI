const { Router } = require("express");
const {
  addUser,
  listUser,
  updateUser,
  deleteUser,
} = require("./user.controllers");
const userRouter = Router();

userRouter.post("/user", addUser);
userRouter.get("/user/:username", listUser);
userRouter.put("/user", updateUser);
userRouter.delete("/user/:username", deleteUser);

module.exports = userRouter;
