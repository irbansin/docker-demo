const router = require("express").Router();
const Task = require("../model/task");

router.post("/", async (req, res) => {
  try {
    let task = new Task({
      name: req.body.name,
    });
    await task.save();
    res.json(task);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    let task = await Task.find();
    res.json(task);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);

    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }

    await task.deleteOne();

    res.json(task);
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);

    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }

    const data = {
      name: req.body.name || task.name,
    };
    task = await Task.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(task);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);

    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }
    res.json(task);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
