const express = require("express");
const router = express.Router();

const {
  getTodo,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("./../controllers/todo.contollers");

router.get("/", (req, res) => {
  res.send({ message: "testing routes" });
});

router.get("/todo", getTodo);

router.get("/todo/:id", getTodoById);

router.post("/todo", createTodo);

router.put("/todo/:id", updateTodo);

router.delete("/todo/:id", deleteTodo);

module.exports = router;
