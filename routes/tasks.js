const express = require("express");
const router = express.Router();
const {
  getAlltask,
  getTask,
  updateTask,
  deleteTask,
  createTask,
} = require("../controllers/tasks");

router.get("/", getAlltask);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);
// router.get('/',)
// router.get('/',)

module.exports = router;
