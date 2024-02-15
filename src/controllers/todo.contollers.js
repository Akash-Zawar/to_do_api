const todos = [
  {
    id: 1,
    title: "my first todo",
    completed: false,
  },
];

const createTodo = (req, res) => {
  const todo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: req.body.completed || false,
  };
  todos.push(todo);
  res.status(201).json(todo);
};

const getTodo = (req, res) => {
  res.json(todos);
};

const updateTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: "todo not found" });
  }
  todo.title = req.body.title || todo.title;
  todo.completed = req.body.completed || todo.completed;
  res.json(todo);
};

const deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }
  todos.splice(index, 1);
  res.status(204).send({ message: `deleted todo with id ${id}` });
};

module.exports = {
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
};
