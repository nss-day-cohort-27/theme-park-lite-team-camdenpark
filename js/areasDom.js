let createAreas = require("./areashtml.js");
let dataBase = require("./db-calls.js")

//1. get contacts sfrom ls
//2. iterate over them
//3. render them to the DOM
function listAreas(parkareainfo){

    parkareainfo.forEach(areas => {
        let AreaComponent = createAreas(areas.name, areas.description, areas.id, areas.colorTheme);
        writeAttractionToDOM(AreaComponent);
    });


}
function writeAttractionToDOM(areas) {
    document.querySelector("#areas").innerHTML += areas;
}

module.exports = listAreas;