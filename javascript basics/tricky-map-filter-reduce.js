const users = [
  { firstName: "Akshay", lastName: "Saini", age: 26 },
  { firstName: "Donald", lastName: "Trump", age: 75 },
  { firstName: "Elon", lastName: "Musk", age: 50 },
  { firstName: "Deepika", lastName: "Padukone", age: 26 },
];

// ! list of full names
// * ["Akshay Saini", "Donald Trump", "Elon Musk", "Deepika Padukone"]

const outputMap = users.map((x) => x.firstName + x.lastName);

console.log(outputMap);

// ! acc = { 26: 2, 75: 1, 50: 1 }
const outputReduce = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});
console.log(outputReduce);

// ! firstName of all the people whose age < 30
const outputFilter = users.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(outputFilter);

// ! DO the same thing using reduce function
const output = users.reduce((acc, curr) => {
 
    if (curr.age < 30) {
    acc.push(curr.firstName);
  }

  return acc;
}, []);
console.log(output);
