let createAttraction = require("./attractionshtml.js");
let dataBase = require("./db-calls.js")

//1. get contacts sfrom ls
//2. iterate over them
//3. render them to the DOM
function listAttractions() {
    dataBase.fetchAttractions().then(attractions =>{
        attractions.forEach(attraction => {
            let AttractionComponent = createAttraction(attraction.name, attraction.description);
            writeAttractionToDOM(AttractionComponent);
        });

    })
}
function writeAttractionToDOM(attraction) {
    document.querySelector("#attraction").innerHTML += attraction;
}

module.exports = listAttractions;