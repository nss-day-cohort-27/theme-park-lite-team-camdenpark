"use strict";
let db = require("./db-calls.js");

let parkInfo = {};

db.fetchParkInfo()
   .then((result) => {
   parkInfo = result;
   console.log(parkInfo);
});

module.exports = parkInfo;
