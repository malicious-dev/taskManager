const mongoose = require('mongoose');

const connectionString = "mongodb+srv://malicious:aA2yfAMnlz7SrkU1@cluster0.flgch.mongodb.net/taskDatabase?retryWrites=true&w=majority";


const connectDB = (url) => {
  return mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to the DB..."), console.log("Connecting to the DB..."))
  .catch((err) => console.log(err));
}

module.exports = connectDB;

// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   console.log("Connecting to DB...")
//   await mongoose.connect('mongodb+srv://malicious:aA2yfAMnlz7SrkU1@cluster0.flgch.mongodb.net/taskDatabase?retryWrites=true&w=majority');
//   console.log("Connected to DB...")
// }

//mongodb+srv://malicious:aA2yfAMnlz7SrkU1@cluster0.flgch.mongodb.net/taskDatabase?retryWrites=true&w=majority 