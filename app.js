const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
app.use(express.json());
app.use("/api/v1/tasks", tasks);
app.get("/", (req, res) => {
  res.send("it is working");
});

app.listen(1000);
