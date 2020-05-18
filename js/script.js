window.addEventListener('load', start);

let globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
let inputName = null;

function start() {
    inputName = document.querySelector('#inputName');

    preventFormSubmit();
    activateInput();
}

function preventFormSubmit() {

    function handleFormSubmit(event) {
        event.preventDefault();
    }

    let form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
    inputName.focus();
}