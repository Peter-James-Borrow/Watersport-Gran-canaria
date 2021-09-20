

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

const granCaneriaHeading = document.querySelector('.granCaneria-heading')
    let divOpen = false;
    granCaneriaHeading.addEventListener('click', () => {
        document.getElementById('subdrop-granCaneria').classList.toggle('sub-content')
        if(!divOpen) {
            granCaneriaHeading.classList.add('open')
            divOpen = true;
        } else {
            granCaneriaHeading.classList.remove('open');
            divOpen = false;
        }
    });


const tenerifeHeading = document.querySelector('.tenerife-heading')
    tenerifeHeading.addEventListener('click', () => {
        let divOpen = false;
        document.getElementById('subdrop-tenerife').classList.toggle('sub-content')
        if(!divOpen) {
            tenerifeHeading.classList.add('open')
            divOpen = true;
        } else {
            tenerifeHeading.classList.remove('open');
            divOpen = false;
        }
    });

const fuerteventuraHeading = document.querySelector('.fuerteventura-heading')

    fuerteventuraHeading.addEventListener('click', () => {
        let divOpen = false;
        document.getElementById('subdrop-fuerteventura').classList.toggle('sub-content')
        if(!divOpen) {
            fuerteventuraHeading.classList.add('open')
            divOpen = true;
        } else {
            fuerteventuraHeading.classList.remove('open');
            divOpen = false;
        }
    });

const lanzaroteHeading = document.querySelector('.lanzarote-heading')
    lanzaroteHeading.addEventListener('click', () => {
        let divOpen = false;
        document.getElementById('subdrop-lanzarote').classList.toggle('sub-content')
        if(!divOpen) {
            lanzaroteHeading.classList.add('open')
            divOpen = true;
        } else {
            lanzaroteHeading.classList.remove('open');
            divOpen = false;
        }
    });

    

