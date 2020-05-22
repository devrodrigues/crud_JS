let globalNames = ['Fulano', 'Cicrano'];
let inputName = null;
let currentIndex = null;
let isEditing = false;

window.addEventListener('load', () => {
    inputName = document.querySelector('#inputName');

    preventFormSubmit();
    activateInput();
    render();
});

const preventFormSubmit = () => {

    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    let form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);

}

const activateInput = () => {

    const insertName = (newName) => {
        
        //globalNames.push(newName);
        globalNames = [...globalNames, newName];

    }

    const updateName = (name) => {
        
        globalNames[currentIndex] = name;

    }

    const handleTyping = (event) => {

        let hasText = !!event.target.value && event.target.value.trim() !== '';

        if(!hasText) {
            clearInput();
            return;
        }

        if(event.key === 'Enter') {

            isEditing ? updateName(event.target.value) : insertName(event.target.value);

            render();
            // O padrão é o 'modo' de inserção, não de edição
            isEditing = false;
            clearInput();

        }
    }

    inputName.focus();
    inputName.addEventListener('keyup', handleTyping);

}

const render = () => {

    const createDeleteButton = (index) => {

        const deleteName = () =>{

            //globalNames.splice(index, 1);

            /*
            globalNames = globalNames.filter((name, i) => {
                //isso
                if(i === index) {
                    return false;
                }

                return true;

                //ou isso
                return i !== index;
            })
            */

            globalNames = globalNames.filter((_, i) => i !== index);
               
            render();
        }

        let button = document.createElement('button');
        button.classList.add('deleteButton');
        button.textContent = 'x';
        button.addEventListener('click', deleteName);
        return button;

    }

    const createSpan = (name, index) => {

        const editItem = () => {

            inputName.value = name;
            inputName.focus();
            isEditing = true;
            currentIndex = index;

        }

        let span = document.createElement('span');
        span.classList.add('clickable');
        span.textContent = name;
        span.addEventListener('click', editItem);
        return span;

    }

    let divNames = document.querySelector('#names');
    divNames.innerHTML = '';

    let ul = document.createElement('ul');

    for(let i = 0; i < globalNames.length; i++) {

        let currentName = globalNames[i];

        let li = document.createElement('li');
        let button = createDeleteButton(i);
        let span = createSpan(currentName, i);


        li.appendChild(button);
        li.appendChild(span);
        ul.appendChild(li);

    }

    divNames.appendChild(ul);

}

const clearInput = () => {

    inputName.value = '';
    inputName.focus();

}