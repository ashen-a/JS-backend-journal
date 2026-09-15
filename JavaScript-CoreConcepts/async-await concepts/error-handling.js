// Making an API call using a fetch function

const API_URl = "https://api.github.com/users/ashen-a";

async function handlePromise() {
  try {
    const data = await fetch(API_URl);
    const jsonValue = await data.json();
  } 
  catch (err) {
    console.log(err);
  }
  
  console.log(jsonValue);

}
handlePromise();

// traditional way of catching errors
// handlePromise returns a Promise since it is an async function
handlePromise().catch((err) => console.log(err));