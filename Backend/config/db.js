/**
 * Establishes a connection to a MongoDB database using Mongoose.
 * @param {string} process.env.DB_URI - The URI of the MongoDB database.
 * @returns None
 */

const mongoose = require("mongoose");
console.log("dburi",process.env.DB_URI);
mongoose.connect(process.env.DB_URI);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB connection Successful");
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

db.on("error", () => {
  console.log("MongoDB connection Failed");
});
