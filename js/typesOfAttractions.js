"use strict";


console.log("Hello world typesOfAttractions.js");


let db = require("./db-calls.js");

let typesOfAttractions = {};

db.fetchTypes()
   .then((result) => {
   typesOfAttractions = result;
});

module.exports = typesOfAttractions;




