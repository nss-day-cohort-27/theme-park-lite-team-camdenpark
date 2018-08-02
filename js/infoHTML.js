"use strict";
function createInfo(title, location, description, opening, closing) {
    return `<h1 class="infotitle">${title}</h1>
            <h2 class="infolocation">Where: ${location}</h2>
            <p>${description}</p>
            <h2 class="infohours">Open from: ${opening} to ${closing}</h2>`;

}

module.exports = createInfo;