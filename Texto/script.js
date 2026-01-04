const txt1 = 'Las llamas son bonitas porque no tienen orden';
const txt2 = 'Y el fuego es bonito porque todo lo rompe';
let stat = false;

const container = document.getElementById('my-section');
const title = document.getElementById('my-title');
const albumList = document.getElementById('my-list');

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
    

}