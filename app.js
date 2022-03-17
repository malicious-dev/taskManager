const express = require('express');

const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect')


//middleware
app.use(express.json())


//routes
app.get('/hello', (req, res) => {
  res.send("TESK MANAGER APP")
})

app.use('/api/v1/tasks', tasks)


const start = async() => {
  try{
await connectDB()
app.listen(3000, function (req, res) {
  console.log('listening on port 3000');
})
  }catch(error) {
console.log('error');
  }
}

start()

