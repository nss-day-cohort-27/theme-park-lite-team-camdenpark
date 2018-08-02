"use strict";
//let createAttractions = require("./db-calls.js");

// build a template with backticks and a fragment to write/append to the DOM
// require typesofAttractions.js; invoke it;

function createAttractionType(blob, blob2, blob3, blob4, blob5, blob6, blob7, name) {
    return `<li>${blob}</li>
            <li>${blob2}</li>
            <li>${blob3}</li>
            <li>${blob4}</li>
            <li>${blob5}</li>
            <li>${blob6}</li>
            <li>${blob7}</li>
            <li>${name}</li>`;
}

module.exports = createAttractionType;