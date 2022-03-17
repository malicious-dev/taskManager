const getAllTasks = (req, res) => {
  res.send("all items")
}

const createTask = (req, res) => {
  console.log(req.body)
  res.json(req.body)
}

const getTask = (req, res) => {
  res.json({id:req.params.id})
}

const updateTask = (req, res) => {
  res.send("update Task")
}

const deleteTask = (req, res) => {
  res.send("delete Task")
}

module.exports = {
  getAllTasks,createTask,getTask,updateTask, deleteTask
}