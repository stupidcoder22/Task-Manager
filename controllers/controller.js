const Task = require("../model/taskmodel");

const getAlltask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send({ tasks });
  } catch (error) {
    res.status(500).send(error);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task(req.body);
    const resp = await task.save();
    res.status(201).json({ msg: req.body });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getTask = async (req, res) => {
  try {
    const resp = await Task.findOne({ _id: req.params.id });
    if (!resp) {
      return res
        .status(404)
        .json({ msg: `no task with id : ${req.params.id}` });
    }
    res.status(200).json({ msg: resp });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const tasks = await Task.updateOne({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!tasks) {
      return res
        .status(404)
        .json({ msg: `no task with id : ${req.params.id}` });
    }
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const tasks = await Task.deleteOne({ _id: req.params.id });

    if (!tasks) {
      return res.status(404).json({ msg: "no id has been found" });
    }
    res
      .status(200)
      .json({ msg: `the task with id : ${req.params.id} has been deleted` });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = { getAlltask, createTask, getTask, updateTask, deleteTask };
