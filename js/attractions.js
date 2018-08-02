"use strict"
//let name of file require then refer to location
let db = require("./db-calls.js");

//let attractions = {};

//function renderAttractionsToDOM (){
    db.fetchAttractions()
       .then((result) => {
     attractions = result
     //console.log (attractions);
    //display attractions to the DOM
    });



//module.exports = attractions;

