const counter = document.querySelector('#counter');

let count = 0;

const incrementButton = document.querySelector('button.increment');

incrementButton.addEventListener('click', e => {
    e.preventDefault();

    count++;
    counter.innerHTML = count;
});

const colorRedButton = document.querySelector('button.change-to-color-red');

colorRedButton.addEventListener('click', e => {
    e.preventDefault();

    /*if (counter.style.color !== "red")
        counter.style.color = "red";
    else
        counter.style.color = "black";*/

    /*if (!counter.classList.contains('color-red'))
        counter.classList.add('color-red');
    else
        counter.classList.remove('color-red');*/

    counter.classList.toggle('color-red');
});