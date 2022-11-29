const fibonacci = n => {
    let arr = [0, 1];

    for (i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
};

console.log(fibonacci(9));
console.log(fibonacci(5));