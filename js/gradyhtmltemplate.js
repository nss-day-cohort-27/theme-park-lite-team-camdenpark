"use strict";
//let createAttractions = require("./db-calls.js");

// build a template with backticks and a fragment to write/append to the DOM
// require typesofAttractions.js; invoke it;

function createTypesOfAttractions(name) {
    return `<h1>Types of attractions:</h1>
            <p>${name}</p>`;

}

module.exports = createTypesOfAttractions