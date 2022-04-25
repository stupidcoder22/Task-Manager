const getAlltask = (req, res) => {
  res.send({ msg: "double success" });
};

const createTask = (req, res) => {
  res.json({ msg: req.body });
};

const getTask = (req, res) => {
  res.send({ msg: req.params.id });
};

const updateTask = (req, res) => {
  res.send({ msg: req.params.id });
};

const deleteTask = (req, res) => {
  res.send({ msg: "deleteTask" });
};

module.exports = { getAlltask, createTask, getTask, updateTask, deleteTask };
