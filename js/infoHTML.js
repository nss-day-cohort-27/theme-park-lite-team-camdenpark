"use strict";
function createInfo(title, location, description, opening, closing) {
    return `<h1>${title}</h1>
            <h3>Where: ${location}</h3>
            <p>${description}</p>
            <h3>Open from: ${opening} to ${closing}</h3>`;

}

module.exports = createInfo;