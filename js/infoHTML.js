"use strict";
function createInfo(title, location, description, opening, closing) {
    return `<h1>${title}</h1>
            <p>Where: ${location}</p>
            <p>${description}</p>
            <p>Open from: ${opening} to ${closing}</p>`;

}

module.exports = createInfo;