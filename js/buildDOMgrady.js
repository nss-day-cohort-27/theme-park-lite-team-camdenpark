"use strict";

console.log("hello world buildDOMgrady.js")




let createAttraction = require("./gradyhtmltemplate.js");
let dataBase = require("./db-calls.js")

//1. get contacts sfrom ls
//2. iterate over them
//3. render them to the DOM
function listAttractions() {
    dataBase.fetchAttractions().then(attractions =>{
        attractions.forEach(attraction => {
            let AttractionComponent = createAttraction(attraction.name);
            writeAttractionToDOM(AttractionComponent);
        });

    })
}
function writeAttractionToDOM(attraction) {
    document.querySelector("#attractiontypes").innerHTML += attraction;
}

module.exports = listAttractions;

