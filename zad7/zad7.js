const numSquareSum = n => {
    return n.toString().split("").reduce((acc, currVal) => acc += Math.pow(currVal, 2), 0);
};

const isHappyNumber = x => {
    let num1, num2;
    num1 = num2 = x;
    do {
        num1 = numSquareSum(num1);
        num2 = numSquareSum(numSquareSum(num2));
    }
    while (num1 != num2);

    return (num1 == 1);
};

console.log(isHappyNumber(19));
console.log(isHappyNumber(21));
console.log(isHappyNumber(13));
console.log(isHappyNumber(23));
console.log(isHappyNumber(50));
console.log(isHappyNumber(22));


