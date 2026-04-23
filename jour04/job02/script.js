// Return  the value matching a key in a JSON-format string 
function jsonValueKey(jsonFormattedString, key) { 

    // Convert the string into a JS object 
    const object = JSON.parse(jsonFormattedString); 

    value = object[key]; 

    return value; 

}

const myJsonString = '{"pouet" : "poot", "truc" : "machin"}';

console.log(jsonValueKey(myJsonString , "pouet")); 