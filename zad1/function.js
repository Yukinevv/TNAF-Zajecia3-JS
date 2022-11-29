function isOdd(x) {
    if (x % 2 != 0)
        return true;
    else
        return false;
}

const isEven = x => {
    if (x % 2 == 0)
        return true;
    else
        return false;
}

document.getElementById('sprawdzenie').innerHTML = `${isOdd(5)}`;
document.getElementById('sprawdzenie').innerHTML += ` ${isOdd(6)}`;
document.getElementById('sprawdzenie').innerHTML += ` ${isEven(2)}`;
