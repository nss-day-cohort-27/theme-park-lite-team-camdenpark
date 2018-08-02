"use strict";
//let createAttractions = require("./db-calls.js");
function createAttractions(name, description) {
    return `<h3>${name}</h3>
            <p>${description}</p>`;

}

module.exports = createAttractions