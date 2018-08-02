"use strict";


// console.log("Hello world typesOfAttractions.js");


let db = require("./db-calls.js");

let typesOfAttractions = {};

let capitalizeFirstLetter = (taco) => {
    taco.forEach((item, index) => {
        let newResult = item.name.charAt(0).toUpperCase() + item.name.slice(1);
        taco[index].name = newResult;
        console.log ("newResult" , newResult);
      
    })
    return taco
};


db.fetchTypes()
   .then((result) => {
       
       let newResult = capitalizeFirstLetter(result)
       typesOfAttractions = newResult;

   console.log("newResult" , newResult);

   

//    build a function in here that capitalizes the first letter in each word
});

module.exports = typesOfAttractions;



// let outputEl = document.querySelector("#attractionType");


// function listTypes(typeData){
//     typeData.forEach(type => {
//         let typeComponent = createtypes(type.name.charAt(0).toUpperCase()+type.name.slice(1));
//         writeContactsToDOM(typeComponent);
//     });
// }

// //this is actually writing it to the DOM. and keeps adding a new component each time it goes through the for-loop up top.  
// function writeContactsToDOM(attractionType){
//     outputEl.innerHTML += attractionType;
// }


// module.exports = listTypes;

