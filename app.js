const express = require("express");
const bodyParser = require("body-parser");

const todoRouter = require("./src/routes/todo");

const app = express();
app.use(bodyParser.json());
const port = 5600;

app.use("/", todoRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
