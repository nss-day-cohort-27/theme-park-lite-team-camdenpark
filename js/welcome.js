let info = require("./parkInfo.js")

let welcome = ()=>{
let fragment = document.createDocumentFragment();
    info;
   let parkInfoElement = document.getElementById("welcome");
   parkInfo.forEach((stuff)=>{
       console.log(stuff);
       let simpleDiv=document.createElement("div");
       simpleDiv.textContent=`${stuff.description} ${stuff.location} ${stuff.name} ${stuff.operating_hours[0].opening} ${stuff.operating_hours[0].opening}`;
       fragment.appendChild(simpleDiv);
       parkInfoElement.appendChild(fragment);
   })}

module.exports = welcome;