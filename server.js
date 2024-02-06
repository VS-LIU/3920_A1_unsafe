// C:\Program Files\MongoDB\Server\6.0\bin
// const app = require('./app.js');
const app = require('./index.js');
const mongoose = require('mongoose');
require('dotenv').config();


async function main() {
  // make sure you add database name in the connection string
  // await mongoose.connect('mongodb://127.0.0.1:27017/comp2537w2');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  await mongoose.connect(`mongodb+srv://${process.env.ATLAS_DB_USERNAME}:${process.env.ATLAS_DB_PASSWORD}@cluster1.ncanyuw.mongodb.net/?retryWrites=true&w=majority`);
  
  console.log(`server.js: Successfully connected to MongoDB Database.`);
  app.listen(process.env.PORT || 9090, () => {
    console.log(`server.js: Server is running on port ${process.env.PORT} and listening for HTTP requests`);
  })
  // Check if the connection is successful by checking the value of mongoose.connection.readyState
  console.log("server.js: mongoose.connection.readyState (0 = disconnected; 1 = connected):", mongoose.connection.readyState);
}


main().catch(err => console.log(err));
