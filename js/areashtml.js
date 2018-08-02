"use strict";
//let createAttractions = require("./db-calls.js");
function createAreas(name, description, id, colorTheme) {
    return `<div class=color${id} style=color:#${colorTheme};>
                <h3>${name}</h3>
                <p>${description}</p>

            </div>`;

}

module.exports = createAreas