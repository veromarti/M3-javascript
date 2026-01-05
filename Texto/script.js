const txt1 = 'Las llamas son bonitas porque no tienen orden';
const txt2 = 'Y el fuego es bonito porque todo lo rompe';
let stat = false;
let formStat = 'empty'

const container = document.getElementById('my-section');
const title = document.getElementById('my-title');
const albumList = document.getElementById('my-list');

const myForm = document.getElementById('my-form');
const inputName = document.getElementById('my-name');
const message = document.getElementById('msg');

function render() {
    if (stat) {
        container.classList.replace('container-init', 'container');
        title.textContent = 'LUX';
        updateList(['Berghain', 'Divinize', 'Porcelana']);
    } else {
        container.classList.replace('container', 'container-init');
        title.textContent = 'MOTOMAMI';
        updateList(['Saoko', 'Candy', 'Hentai']);
    }
}

function updateList(items) {
    albumList.innerHTML = ''; 

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        albumList.appendChild(li);
    });
}

function validateName(nameValue){
    if (nameValue.trim() === '') {
        return 'empty';
    }

    if (nameValue.length < 3) {
        return 'error';
    }

    return 'success';
}

function renderForm() {
    message.className = '';

    if (formStat === 'empty') {
        message.textContent = 'El campo está vacío';
        message.classList.add('msg-empty');
    }

    if (formStat === 'error') {
        message.textContent = 'El nombre debe tener al menos 3 caracteres';
        message.classList.add('msg-error');
    }

    if (formStat === 'success') {
        message.textContent = `Hola, ${inputName.value}`;
        message.classList.add('msg-success');
    }
}


window.onload = () =>{
    const btn = document.getElementById('change-text');
    const txt = document.getElementById('my-text');

    const btnCont = document.getElementById('change');


    btn.addEventListener('click', () => {

        if (txt.innerHTML === txt1) {
            txt.textContent = txt2;
        }

        else if (txt.innerHTML === txt2) {
            txt.textContent = txt1;
        }
            
    })
    
    btnCont.addEventListener('click', () => {
        stat = !stat; // cambio de estado
        render();       // reflejar estado en el DOM
    });


    myForm.addEventListener('submit', (event) => {
    event.preventDefault(); // evita recarga

    const value = inputName.value;
    formStat = validateName(value);
    renderForm();
    });

}