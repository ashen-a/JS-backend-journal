let teas = ["green tea", "black tea", "chai", "oolong tea"]
let selectedTeas = []

for (let i = 0; i < teas.length; i++) {
     
    if (teas[i] === "chai"){
        break;
    }
    selectedTeas.push(teas[i])    
}
console.log(selectedTeas)
// there is also a similiar keyword 'continue'


//! For-of Loop
let nums = [1, 2, 3, 4, 5]
let smallNums = []
for (const element of nums) {
    if (element === 4) {
        break;
    }
    smallNums.push(element)
}
console.log(smallNums)
// 'continue' is also used 


//! For-in Loop
// IN OBJECTS ORDER IS NOT IMPORTANT 
// study - call, bind, apply
let citiesPopulation = {
    "London": 1000000,
    "New York": 1000000,
    "Paris": 1000000,
    "Berlin": 1000000
}
let updatedCityPopulation = {}
/* console.log(Object.keys(citiesPopulation))
console.log(Object.values(citiesPopulation)) */
for (const city in citiesPopulation) {
    
    // console.log(citiesPopulation.city) -> this will throw an error
    // console.log(citiesPopulation[city])

    if (city === "Berlin"){
        break;
    }
    updatedCityPopulation[city] = citiesPopulation[city];

}
console.log(updatedCityPopulation)

//! For-each loop
let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"] 
let availableTeas = []

teaCollection.forEach(element => {
    // break andd continue will give an error here because we are inside a function, they are only meant for loops
    if (element === "chai") {
        return;
    }    
    availableTeas.push(element)
});
console.log(availableTeas)

let myWorldlCities = ["Berlin", "Tokyo", "Sydney", "Paris"] 
let traveledCities = [] 
// a total of 4 functions are being fired here
myWorldlCities.forEach(city => {
    if (city === "Sydney"){
        return
    }
    traveledCities.push(city);
});
console.log(traveledCities)

//!
const arr = ['a', 'b', 'c'];

// for...of iterates over values
for (const value of arr) {
  console.log(value); // 'a', 'b', 'c'
}

// for...in iterates over indices (keys)
for (const index in arr) {
  console.log(index); // '0', '1', '2'
}   