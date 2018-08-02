let createInfo = require("./infoHTML.js");
let dataBase = require("./db-calls.js")

function listInfo() {
    dataBase.fetchParkInfo().then(info =>{
        info.forEach(info => {
            let infoComponent = createInfo(info.name, info.location, info.description, info.operating_hours[0].opening, info.operating_hours[0].closing);
            writeInfoToDOM(infoComponent);
        });

    })
}
function writeInfoToDOM(info) {
    document.querySelector("#welcome").innerHTML += info;
}

module.exports = listInfo;