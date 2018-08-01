let db = require("./db-calls.js");

let parkAreaListing = {};

db.fetchAreas()
   .then((result) => {
   parkAreaListing = result;
});

module.exports = parkAreaListing;