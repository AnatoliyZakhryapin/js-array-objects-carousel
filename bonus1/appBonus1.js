
/*---------Creazione del contenuto tramite javascript--------*/

const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        background: ""
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
]

const carouselBoxDOMElement = document.querySelector(".carousel-box");
const carouselBoxMiniDOMElement = document.querySelector(".carousel-box-mini");

images.forEach((element, index) => {
    const html = `
    <div class="card">
        <img src="./${element.image}" class="card-img image-carousel">
        <div class="card-img-overlay-custom">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.text}</p>
        </div>
    </div>
    `;
    const htmlMini = `
    <img src="./${element.image}" class="card-img image-carousel-mini">
    `;
    carouselBoxDOMElement.innerHTML += html;
    carouselBoxMiniDOMElement.innerHTML += htmlMini;
})

/*---------Creazione evento click per cambiare img--------*/


// Assegnamo classe active alla prima imagina
const cardsDOMElement = document.querySelectorAll(".card");
const boxMiniImageDOMElement = document.querySelectorAll(".image-carousel-mini");
let currentIndex = 0;
const classActive = "active";
const currentSlide = cardsDOMElement[currentIndex];
const currentSlideBoxMini = boxMiniImageDOMElement[currentIndex];
currentSlide.classList.add(classActive);
currentSlideBoxMini.classList.add(classActive);

// - Aggiungiamo bg image alla prima imagine utilizzando indice della imagine corrente 
carouselBoxDOMElement.classList.add(`bg-img-${currentIndex}`)

// Creamo DOMElement
const arrowDownDOMElement = document.getElementById("arrow-down");
const arrowUpDOMElement = document.getElementById("arrow-up");

// Creamo eventi click 
arrowDownDOMElement.addEventListener("click", function () {
    console.log('click')
    // - Togliamo/Aggiungiamo i classi a img corrente
    const activeSlide = cardsDOMElement[currentIndex];
    const activeSlideBoxMini = boxMiniImageDOMElement[currentIndex];
    activeSlide.classList.remove(classActive);
    activeSlideBoxMini.classList.remove(classActive);
    carouselBoxDOMElement.classList.remove(`bg-img-${currentIndex}`)

    // - Assegnamo indexCurrent in base a posizione dello slide
    if (currentIndex === cardsDOMElement.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    // - Togliamo/Aggiungiamo i classi a img successiva  
    const nextSlideElement = cardsDOMElement[currentIndex];
    const nextSlideElementBoxMini = boxMiniImageDOMElement[currentIndex];
    nextSlideElement.classList.add(classActive);
    nextSlideElementBoxMini.classList.add(classActive);
    carouselBoxDOMElement.classList.add(`bg-img-${currentIndex}`)
})

arrowUpDOMElement.addEventListener("click", function () {
    // - Togliamo/Aggiungiamo i classi a img corrente
    const activeSlide = cardsDOMElement[currentIndex];
    const activeSlideBoxMini = boxMiniImageDOMElement[currentIndex];
    activeSlide.classList.remove(classActive);
    activeSlideBoxMini.classList.remove(classActive);
    carouselBoxDOMElement.classList.remove(`bg-img-${currentIndex}`)

    // - Assegnamo indexCurrent in base a posizione dello slide
    if (currentIndex === 0) {
        currentIndex = cardsDOMElement.length - 1
    } else {
        currentIndex--
    }
    // - Togliamo/Aggiungiamo i classi a img successiva  
    const nextSlideElement = cardsDOMElement[currentIndex];
    const nextSlideElementBoxMini = boxMiniImageDOMElement[currentIndex];
    nextSlideElement.classList.add(classActive);
    nextSlideElementBoxMini.classList.add(classActive);
    carouselBoxDOMElement.classList.add(`bg-img-${currentIndex}`)
})

// - Ciclo for con evento click per cambiare image nel box-mini in base a immagine cliccata

// - Ciclo FOR
for (let s = 0; s < boxMiniImageDOMElement.length; s++) {
    boxMiniImageDOMElement[s].addEventListener("click", function () {
        // - Index della immagine cliccata precedentemente
        let indexBeforeImage = currentIndex;

        // - Dichiariamo la variabile per recuperare l'indice della img cliccata
        let indexClickImage = s;

        // - Togliamo i classi a img precedente    
        cardsDOMElement[indexBeforeImage].classList.remove("active")   
        boxMiniImageDOMElement[indexBeforeImage].classList.remove("active")
        carouselBoxDOMElement.classList.remove(`bg-img-${indexBeforeImage}`)

        // - Aggiungiamo i classi a img cliccata
        cardsDOMElement[indexClickImage].classList.add("active")
        boxMiniImageDOMElement[indexClickImage].classList.add("active")
        carouselBoxDOMElement.classList.add(`bg-img-${indexClickImage}`)

        // - Assegnamo il nuovo valore di current image
        currentIndex = indexClickImage;
    })
}

/*--------------------FUNZIONI----------------------*/
