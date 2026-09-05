// * It is an API given by browsers to us, we will use this fetch function to make an api call to the Github Servers and we will get an User info in return

const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const user = fetch(GITHUB_API); // fetch returns a promise object

// * The promise object contains:
// * Prototype: Promise PromiseState : "pending" PromiseResult : undefined
// * Promise objects are immutable

console.log(user)

user.then(function(data) {
    console.log(data);
})
