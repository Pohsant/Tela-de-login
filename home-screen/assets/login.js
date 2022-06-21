const darkModeClass ='dark-mode'
const lua = document.querySelector('#lua');
const sol= document.querySelector('#sol');
const hf1 = document.querySelector('#fh1');
const p1 = document.querySelector('#p1');
const a = document.querySelector('#a');
const btn = document.querySelector('#btn');
const principal = document.querySelector('.principal');


function changeMode(){
    changeClasses();
}

function changeClasses(){
    lua.classList.toggle(darkModeClass);
    sol.classList.toggle(darkModeClass);
    principal.classList.toggle(darkModeClass);
    hf1.classList.toggle(darkModeClass);
    p1.classList.toggle(darkModeClass);
    a.classList.toggle(darkModeClass);
    btn.classList.toggle(darkModeClass);

}

lua.addEventListener('click', changeMode);
sol.addEventListener('click', changeClasses);