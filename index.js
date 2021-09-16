

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    document.getElementById('dropdown').classList.toggle('show')
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
    
});

let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName('image-slides');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++
    if(slideIndex > slides.length){slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000);
    }

const granCaneriaHeading = document.querySelectorAll('.granCaneria-heading').forEach(item => {
    let divOpen = false;
    item.addEventListener('click', () => {
        document.getElementById('subdrop-granCaneria').classList.toggle('sub-content')
        if(!divOpen) {
            item.classList.add('open')
            divOpen = true;
        } else {
            item.classList.remove('open');
            divOpen = false;
        }
    });
});
const tenerifeHeading = document.querySelectorAll('.tenerife-heading').forEach(item => {
    let divOpen = false;
    item.addEventListener('click', () => {
        document.getElementById('subdrop-tenerife').classList.toggle('sub-content')
        if(!divOpen) {
            item.classList.add('open')
            divOpen = true;
        } else {
            item.classList.remove('open');
            divOpen = false;
        }
    });
});
const fuerteventuraHeading = document.querySelectorAll('.fuerteventura-heading').forEach(item => {
    let divOpen = false;
    item.addEventListener('click', () => {
        document.getElementById('subdrop-fuerteventura').classList.toggle('sub-content')
        if(!divOpen) {
            item.classList.add('open')
            divOpen = true;
        } else {
            item.classList.remove('open');
            divOpen = false;
        }
    });
});
const lanzaroteHeading = document.querySelectorAll('.lanzarote-heading').forEach(item => {
    let divOpen = false;
    item.addEventListener('click', () => {
        document.getElementById('subdrop-lanzarote').classList.toggle('sub-content')
        if(!divOpen) {
            item.classList.add('open')
            divOpen = true;
        } else {
            item.classList.remove('open');
            divOpen = false;
        }
    });
});
