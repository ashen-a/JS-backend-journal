// Making an API call using a fetch function

const API_URl = "https://api.github.com/users/ashen-a";

async function handlePromise() {

    // when you call this fetch() it gives you a promise
    const data = await fetch(API_URl);

    const jsonValue = await data.json()

    console.log(jsonValue)

}
handlePromise();