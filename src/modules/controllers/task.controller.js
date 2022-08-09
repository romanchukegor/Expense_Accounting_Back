const Task = require("../../db/models/tasks/index");


const getAllCosts = async (req, res, next) => {
  try {
    const allCosts = await Cost.find();
    res.status(200).send({ allCosts });
  } catch (error) {
    res.satus(400).send("an error occurred while trying to get data");
  }
};

const createNewCost = async (req, res) => {
  try {
    const text = req.body.text;
    const cost = req.body.cost;
    const date = req.body.date
    const expense = new Cost({ text, cost, date });
    const result = await expense.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send("Task send error");
  }
};

const changeCostInfo = async (req, res, next) => {
  try {
    const _id = req.params._id;
    const text = req.body.text;
    const cost = req.body.cost;
    const date = req.body.date

    if (
      !req.params.hasOwnProperty("_id") ||
      _id === "" ||
      !req.body.hasOwnProperty("text") 
    ) {
      throw new Error();
    }
    const task = await Cost.findOneAndUpdate(
      { _id },
      { $set: { text, cost, date } },
      { new: true }
    );
    res.status(200).send(task);
  } catch (error) {
    console.log(error)
    res.status(400).send("Fail to change");
  }
};

const deleteCost = async (req, res, next) => {
  try {
    const _id = req.params._id;
    if (!req.params.hasOwnProperty("_id") || _id === "") {
      throw new Error();
    }

    const deleteTask = await Cost.deleteOne({ _id });
    res.status(200).send(deleteTask);
  } catch (error) {
    res.status(400).send("Failed delete task");
  }
};

module.exports = {
  createNewCost,
  getAllCosts,
  deleteCost,
  changeCostInfo,
};
