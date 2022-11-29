const reverseString = str => {
    return str.split("").reverse().join("");
}

const palindrom = str => {
    const strReverse = reverseString(str);

    //console.log(strReverse);

    return (str === strReverse);
};

console.log(palindrom('kajak'));
console.log(palindrom('cos'));
console.log(palindrom('test'));
console.log(palindrom('ala'));