let db = require("./db-calls.js");
let parkArea = require("./areasDom.js")
//let parkAreaListing = {};

db.fetchAreas()
   .then((result) => {
   parkArea(result);

});

//module.exports = parkAreaListing;