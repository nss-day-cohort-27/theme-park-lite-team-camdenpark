"use strict";
//let createAttractions = require("./db-calls.js");
function createAttractions(name, description) {
    return `<h1>${name}</h1>
            <p>${description}</p>`;

}

module.exports = createAttractions