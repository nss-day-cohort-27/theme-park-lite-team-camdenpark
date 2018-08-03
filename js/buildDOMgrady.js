let createAttraction = require("./gradyhtmltemplate.js");
let dataBase = require("./db-calls.js")

//1. get contacts sfrom ls
//2. iterate over them
//3. render them to the DOM
function listAttractionsTypes() {
    dataBase.fetchTypes().then(types =>{
        let AttractionTypeComponent = createAttraction(types.name);
        writeAttractionTypeToDOM(AttractionTypeComponent);
    })
}
function writeAttractionTypeToDOM(attractiontype) {
    document.querySelector("#attractiontypes").innerHTML += attractiontype;
}

module.exports = listAttractionsTypes;
