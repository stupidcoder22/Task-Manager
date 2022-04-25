const Task = require("../model/taskmodel");

const getAlltask = (req, res) => {
  res.send({ msg: "double success" });
};

const createTask = async (req, res) => {
  const task = await Task(req.body);
  const resp = await task.save();
  res.status(201).json({ msg: req.body });
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
