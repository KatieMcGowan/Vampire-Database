// 1. Require Mongoose
const mongoose = require("mongoose");

// 2. Require your Model
const Vampire = require("./models/vampire.js");

// 3. Require your extra data source
const vampireData = require("./populateVampires");

// 4. Connect your database
const connectionString = "mongodb://localhost:27017/test";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on("error", (err) => {
  console.log(`Mongoose connected error ${err}`);
});

mongoose.connection.on("disconnected", () =>{
  console.log("Mongoose disconnected");
});

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.collection.insertMany(vampireData, (err, data) => {
//   console.log(vampireData);
//   console.log("added provided vampire data");
//   mongoose.connection.close();
// });

// // ### Add some new vampire data
// Vampire.create({
//   name: "Vampy",
//   hair_color: "Red",
//   eye_color: "Grey",
//   dob: "1650-04-08",
//   loves: ["blood", "flesh"],
//   location: "Austin, Texas, USA",
//   gender: "f",
//   victims: 184,
// }, (err, createdVampire) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(createdVampire);
//   }
// });

// Vampire.create({
//   name: "Renee",
//   hair_color: "Black",
//   eye_color: "Black",
//   dob: "1846-03-10",
//   loves: ["jazz", "cajun food", "sunset cigarettes"],
//   location: "New Orleans, Louisana, USA",
//   gender: "f",
//   victims: 968,
// }, (err, createdVampire) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(createdVampire);
//   }
// });

// Vampire.create({
//   name: "Marquis",
//   hair_color: "Gold",
//   eye_color: "White",
//   dob: "1765-10-05",
//   loves: ["absinthe", "eclipses", "exotic animals"],
//   location: "Washington D.C., Maryland, USA",
//   gender: "m",
//   victims: 466,
// }, (err, createdVampire) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(createdVampire);
//   }
// });

// Vampire.create({
//   name: "Henry Holbeck",
//   hair_color: "Grey",
//   eye_color: "Brown",
//   dob: "1932-08-08",
//   loves: ["forests", "woodchopping", "birdwatching"],
//   location: "Washington D.C., Maryland, USA",
//   gender: "m",
//   victims: 466,
// }, (err, createdVampire) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(createdVampire);
//   }
// });

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

// Vampire.find(
//   {gender: "f"},
//   (err, vampires) => {
//     console.log("First query");
//     console.log(vampires)
//   }
// );

// Vampire.find(
//   {victims: {$gt: 500}},
//   (err, vampires) => {
//     console.log("Second query")
//     console.log(vampires)
//   }
// );

// Vampire.find(
//   {victims: {$lte: 150}},
//   (err, vampires) => {
//     console.log("Third query")
//     console.log(vampires)
//   }
// );

// Vampire.find(
//   {victims: {$ne: 210234}},
//   (err, vampires) => {
//     console.log("Fourth query")
//     console.log(vampires)
//   }
// );

// Vampire.find(
//   {victims: {$gt: 150, $lt: 500}},
//   (err, vampires) => {
//     console.log("Fifth query")
//     console.log(vampires)
//   }
// );

/////////////////////////////////////////////////
// ### Select by exists or does not exist

// Vampire.find({title: {$exists:true}},
//   (err, vampires) => {
//     console.log("First exists selection")
//     console.log(vampires)
//   }
// );

// Vampire.find(
//   {victims: {$exists:false}},
//   (err, vampires) => {
//     console.log("Second exists selection");
//     console.log(vampires)
//   }
// );

// Vampire.find(
//   {$and:
//     [
//       {title: {$exists: true}},
//       {victims: {$exists: false}}
//     ]
//   },
//   (err, vampires) => {
//     console.log("Third exists selection");
//     console.log(vampires);
//   }
// );

// Vampire.find(
//   {$and: 
//     [
//       {victims: {$exists: true}},
//       {victims: {$gt: 1000}}
//     ]
//   },
//   (err, vampires) => {
//     console.log("Fourth exists selection");
//     console.log(vampires);
//   }
// );

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
