window.addEventListener('load', start);

let globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
let inputName = null;

function start() {

    inputName = document.querySelector('#inputName');

    preventFormSubmit();
    activateInput();
    render();
    
}

function preventFormSubmit() {

    let form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();
    }

}

function activateInput() {

    inputName.focus();
    inputName.addEventListener('keyup', handleTyping);

    function handleTyping(event) {
        // Só insere o valor se a tecla enter for digitada
        if(event.key === 'Enter') {
            insertName(event.target.value);
        }
    }

    function insertName(newName) {
        globalNames.push(newName);
        render();

        console.log(globalNames);
    }

}

function render() {

    function createDeleteButton(index) {

        function deleteName() {
            globalNames.splice(index, 1);
            render();
        }

        let button = document.createElement('button');
        button.classList.add('deleteButton');
        button.textContent = 'x';

        button.addEventListener('click', deleteName);

        return button;

    }

    let divNames = document.querySelector('#names');
    divNames.innerHTML = '';

    let ul = document.createElement('ul');

    for(let i = 0; i < globalNames.length; i++) {

        let currentName = globalNames[i];

        let li = document.createElement('li');
        let button = createDeleteButton();

        let span = document.createElement('span');
        span.textContent = currentName;

        li.appendChild(button);
        li.appendChild(span);
        ul.appendChild(li);

    }

    divNames.appendChild(ul);
    clearInput();

}

function clearInput() {

    inputName.value = '';
    inputName.focus();

}