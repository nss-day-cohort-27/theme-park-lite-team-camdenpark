"use strict";


console.log("Hello world typesOfAttractions.js");


let db = require("./db-calls.js");

let typesOfAttractions = {};

db.fetchtypesOfAttractions()
   .then((result) => {
   typesOfAttractions = result;
});

module.exports = typesOfAttractions;




