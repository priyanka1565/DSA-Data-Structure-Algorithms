
// add one more items to the end of an array we can use the push method
const cities = ["India", "China", "Japan"];
cities.push("USA");
//console.log(cities);

cities.push("Dubai", "Nepal");
//console.log(cities);

//add items to the start of the aaray we can use unshift
cities.unshift("Canada");
console.log(cities)

//removing items to the aaray
cities.pop();
console.log(cities);

//removing the fisrt item
cities.shift();
console.log(cities);

//removing the Index of an item

const smart_cities = ["Pune", "Mumbai", "Banglore", "Chenai", "Delhi"];
console.log(smart_cities);
const index = smart_cities.indexOf("Banglore");
smart_cities.splice(index,1)
console.log(smart_cities);
