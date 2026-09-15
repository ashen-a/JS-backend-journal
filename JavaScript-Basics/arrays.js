let teaFlavours = ["green tea", "black tea", "oolong tea"]
// another way of declaring an array 
let teaFlavs = new Array("green tea", "black tea", "oolong tea")
const firstTea = teaFlavours[0]

const citiesVisited = ["Mumbai", "Sydney"]
/* common way of adding elements to an array
citiesVisited[citiesVisited.length] = "Berlin";
console.log(citiesVisited) */
citiesVisited.push("Berlin")
console.log(citiesVisited.pop())

let popularTeas = ["green tea", "oolong tea", "chai"]
let softCopyOfPopularTeas = popularTeas
popularTeas.pop()
// changes will be reflected in both the arrays
console.log(softCopyOfPopularTeas)
console.log(popularTeas)

let topCities = ["Berlin", "Singapore", "New York"]
let hardCopyOftopCities = [...topCities]
// let hardCopyOftopCities = topCities.slice()
topCities.pop()
console.log(hardCopyOftopCities)

let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokyo", "Bangkok"]
let worldCities = europeanCities.concat(asianCities)

let cityBucketList = ["Kyoto", "london", "Cape Town", "Vancouver"]
// case-sensetive
let isLondonInList = cityBucketList.includes("London")
console.log(isLondonInList)

// READ MORE ON ARRAYS FROM MDN DOCS
