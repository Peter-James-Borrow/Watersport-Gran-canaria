const menuBtn = document.querySelector('.menu-btn');
const dropdown = document.querySelector('#dropdown');
let menuOpen = false;
menuBtn.addEventListener('click', (event) => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
    
});

