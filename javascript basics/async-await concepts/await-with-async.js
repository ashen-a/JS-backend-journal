const p = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value!!");
});

function getData() {
    p.then((res) => console.log(res));
}

getData();

// using async-await
const promise = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value!!");
});

async function handlePromise() {
    // handling promise from this function
    const valueOfResolvedPromise = await promise;
    console.log(valueOfResolvedPromise);
}

handlePromise();