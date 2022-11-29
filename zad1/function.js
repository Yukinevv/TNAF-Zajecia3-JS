function isOdd(x) {
    /*if (x % 2 != 0)
        return true;
    else
        return false;*/
    return (x % 2 != 0);
}

const isEven = x => {
    /*if (x % 2 == 0)
        return true;
    else
        return false;*/
    return (x % 2 == 0);
}

document.getElementById('sprawdzenie').innerHTML = `${isOdd(5)}`;
document.getElementById('sprawdzenie').innerHTML += ` ${isOdd(6)}`;
document.getElementById('sprawdzenie').innerHTML += ` ${isEven(2)}`;
