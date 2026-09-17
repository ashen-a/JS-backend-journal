let computer = {cpu: 12}
let lenevo = {
    screen: "HD",
    __proto__: computer,
};
let tomHardware = {}

console.log(`computer `, computer.__proto__);
console.log(`lenevo `, lenevo.__proto__);
// for better visualization run the above code snippet on CHROME

let genericCar = {tyres: 4}
let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar);
console.log(`tesla`, tesla);
console.log(`tesla`, Object.getPrototypeOf(tesla));
