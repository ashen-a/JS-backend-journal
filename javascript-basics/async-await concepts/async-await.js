// returns a promise
async function getData() {
    return "Namaste";
} 

const dataPromise = getData();
console.log(data)

dataPromise.then((result) => console.log(result));

// ! returning an actual promise this time, gotta create a promise first 

const promise = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value!!!")
})

async function getData() {
    return promise;
}

const dataPromise = getData();

dataPromise.then((res) => console.log(res));