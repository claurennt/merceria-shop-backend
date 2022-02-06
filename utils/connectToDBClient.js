const mongoose = require("mongoose");

//create helper function to connect to the database, for multiple connections
const connectToDBClient = (URI, dbName) => {
  const db = mongoose.createConnection(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  db.on("error", () => {
    console.log("error");
  });
  db.once("open", () => {
    console.log(`Connection to ${dbName} DB successfull.✔✔✔`);
  });

  return db;
};

module.exports = { connectToDBClient };
