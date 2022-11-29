const licznik = document.querySelector('#licznik');

let counter = 0;

const incrementButton = document.querySelector('button.increment');

incrementButton.addEventListener('click', e => {
    e.preventDefault();

    counter++;
    licznik.innerHTML = counter;
});

const colorRedButton = document.querySelector('button.change-to-color-red');

colorRedButton.addEventListener('click', e => {
    e.preventDefault();

    /*if (licznik.style.color !== "red")
        licznik.style.color = "red";
    else
        licznik.style.color = "black";*/

    if (!licznik.classList.contains('color-red'))
        licznik.classList.add('color-red');
    else
        licznik.classList.remove('color-red');
});