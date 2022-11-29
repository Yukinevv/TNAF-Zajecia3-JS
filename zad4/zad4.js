const sum = arr => {

    let num = 0;
    /*arr.forEach(element => {
        num += element;
    });
    return num;*/

    return arr.reduce((acc, currVal) => acc += currVal, num);
};

document.querySelector('#wynik').innerHTML = sum([3, 5, 7]) + "<br/>";
document.querySelector('#wynik').innerHTML += sum([12, 5, 7]) + "<br/>";
document.querySelector('#wynik').innerHTML += sum([25, 5, 7]);