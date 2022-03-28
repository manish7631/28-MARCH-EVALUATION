const express = require("express");

const connect = require("./configs/db");

const userController = require("./controllers/user.controller");

const todoController = require("./controllers/todo.controller");
 
const { register, login } = require("./controllers/auth.controller");

const app = express();

app.use(express.json());


app.post("/register", register);
 
app.post("/login", login);

app.use("/users", userController);

app.use("", todoController);
 

app.listen(1000, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 1000");
});
