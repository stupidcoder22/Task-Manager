const express = require("express");
const app = express();
const route = require("./routes/route");
const dbconnect = require("./db/connect");

dbconnect();
app.use(express.json());
app.use(express.static("./public"));
app.use("/api/v1/tasks", route);

app.listen(1000, () => {
  console.log("Server is litening on Port 1000");
});
