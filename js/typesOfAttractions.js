"use strict";

console.log("Hello world typesOfAttractions.js");

let db = require("./db-calls.js");

let typesOfAttractions = {};

let capitalizeFirstLetter = (taco) => {
    taco.forEach((item, index) => {
        let newResult = item.name.charAt(0).toUpperCase() + item.name.slice(1);
        taco[index].name = newResult;
        console.log ("newResult" , newResult);
    })
    return taco
};

db.fetchTypes()
   .then((result) => {
       let newResult = capitalizeFirstLetter(result)
       typesOfAttractions = newResult;

   console.log("newResult" , newResult);

});

module.exports = typesOfAttractions;


