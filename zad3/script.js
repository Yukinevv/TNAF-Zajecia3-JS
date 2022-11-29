const range = (a, b) => {
    let arr = [];
    for (i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
};

document.querySelector('#wynik').innerHTML = range(1, 4) + "</br>";
document.querySelector('#wynik').innerHTML += range(1, 20) + "</br>";
document.querySelector('#wynik').innerHTML += range(5, 10);