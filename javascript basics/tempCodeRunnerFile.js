const output = arr.reduce(function (acc, curr) {
    // here acc === sum && curr === arr[i]
    acc = acc + curr;
    return acc;
}, 0);

console.log(output);