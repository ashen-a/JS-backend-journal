function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for chai`
    }
    return confirmOrder();
}
let orderConfirmation = orderTea("chai")
console.log(orderConfirmation)

// Arrow functions
// function greet () {}
// const greet = () => {}
const calculateTotal = (price, quantity) => {
    return price * quantity
}
let totalCost = calculateTotal(499, 100)
console.log(totalCost)
// for one-line of code
const calculateNewTotal = (price, quantity) =>  price * quantity

function makeTea(typeOfTea) {
    return `maketea: ${typeOfTea}`
}
function processTeaOrder(makeTea) {
    return makeTea("earl grey")
}
const order = processTeaOrder(makeTea)
console.log(order)

function createTeaMaker() {
    return function (teaType) {
        return `Making ${teaType}`
    };
}
let teaMaker = createTeaMaker()
console.log(teaMaker("green tea"))

