// LOADER PAGE ACCUEIL / PHOTOGRAPHIE

let loader    = document.querySelector('.load');
let accueil   = document.querySelector('#accueil');

accueil.style.overflowY = 'hidden';

window.addEventListener('load', () => {

    loader.classList.add('fondu-out');
    accueil.style.overflowY = 'visible';

})