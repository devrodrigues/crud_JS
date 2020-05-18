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

    let divNames = document.querySelector('#names');
    let ul = document.createElement('ul');

    //divNames.innerHTML = '<ul><li>Nome 1</li><li>Nome 2</li></ul>;'

    /*
    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');

    li1.textContent = 'Primeiro';
    li2.textContent = 'Segundo';
    ul.appendChild(li1);
    ul.appendChild(li2);
    */

    for(let i = 0; i < globalNames.length; i++) {

        let currentName = globalNames[i];
        let li = document.createElement('li');
        li.textContent = currentName;
        ul.appendChild(li);

    }

    divNames.appendChild(ul);

}