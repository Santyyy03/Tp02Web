/*==================================================
                    ELEMENTS
==================================================*/

const header = document.querySelector(".header");



/*==============================
        HERO
==============================*/

const hero = document.querySelector(".hero");



/*==============================
        WORKS
==============================*/

const workCards = document.querySelectorAll(".work-card");



/*==============================
    CUSTOMIZATION
==============================*/

const customizationImage = document.querySelector("#customization-image");

const customizationCircle = document.querySelector(".customization-circle");

const colorButtons = document.querySelectorAll(".color-button");

const customCards = document.querySelectorAll(".custom-card");



/*==============================
        FAQ
==============================*/

const faqItems = document.querySelectorAll(".faq-item");



/*==============================
        REVEAL
==============================*/

const revealElements = document.querySelectorAll(".reveal");



/*==============================
        PARALLAX
==============================*/

const parallaxBackgrounds = document.querySelectorAll(".parallax-background");

const parallaxContents = document.querySelectorAll(".parallax-content");

const parallaxForegrounds = document.querySelectorAll(".parallax-foreground");



/*==================================================
                CONFIGURATION
==================================================*/

const headerScroll = 80;

const revealOptions = {

    threshold: 0.15,

    rootMargin: "0px 0px -80px 0px"

};



/*==================================================
                HELPERS
==================================================*/

function removeClass(elements, className){

    elements.forEach(element => {

        element.classList.remove(className);

    });

}



function addClass(element, className){

    if(!element) return;

    element.classList.add(className);

}



function toggleClass(element, className){

    if(!element) return;

    element.classList.toggle(className);

}

/*==================================================
                    HEADER
==================================================*/

function updateHeader() {

    if (window.scrollY > headerScroll) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateHeader);



/*==================================================
                    REVEAL
==================================================*/

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");

        revealObserver.unobserve(entry.target);

    });

}, revealOptions);



revealElements.forEach(element => {

    revealObserver.observe(element);

});



/*==================================================
                    PARALLAX
==================================================*/

let lastScroll = 0;
let ticking = false;



function updateParallax(scrollY){

    parallaxBackgrounds.forEach(element => {

        element.style.transform =
            `translate3d(0, ${scrollY * 0.12}px, 0)`;

    });



    parallaxContents.forEach(element => {

        element.style.transform =
            `translate3d(0, ${scrollY * 0.06}px, 0)`;

    });



    parallaxForegrounds.forEach(element => {

        element.style.transform =
            `translate3d(0, ${scrollY * 0.02}px, 0)`;

    });

}



function handleScroll(){

    lastScroll = window.scrollY;

    updateHeader();

    if(!ticking){

        window.requestAnimationFrame(() => {

            updateParallax(lastScroll);

            ticking = false;

        });

        ticking = true;

    }

}

window.addEventListener("scroll", handleScroll);



/*==================================================
                INITIAL UPDATE
==================================================*/

updateHeader();

updateParallax(window.scrollY);

/*==================================================
                    WORKS
==================================================*/

let activeCard = null;

let flippedCard = null;



/*==============================
        ACTIVATE CARD
==============================*/

function activateCard(card){

    workCards.forEach(currentCard => {

        currentCard.classList.remove("active");

        const image = currentCard.querySelector(".card-image");

        if(
            image &&
            image.dataset.before &&
            currentCard !== flippedCard
        ){

            image.src = image.dataset.before;

        }

    });



    card.classList.add("active");



    const image = card.querySelector(".card-image");

    if(image && image.dataset.after){

        image.src = image.dataset.after;

    }



    activeCard = card;

}



/*==============================
        RESET CARD
==============================*/

function resetCard(card){

    if(card === flippedCard){

        return;

    }



    card.classList.remove("active");



    const image = card.querySelector(".card-image");

    if(image && image.dataset.before){

        image.src = image.dataset.before;

    }

}



/*==============================
        FLIP CARD
==============================*/

function flipCard(card){

    if(flippedCard && flippedCard !== card){

        flippedCard.classList.remove("is-flipped");



        const previousImage = flippedCard.querySelector(".card-image");

        if(previousImage && previousImage.dataset.before){

            previousImage.src = previousImage.dataset.before;

        }

    }



    if(card.classList.contains("is-flipped")){

        card.classList.remove("is-flipped");



        const image = card.querySelector(".card-image");

        if(image && image.dataset.before){

            image.src = image.dataset.before;

        }



        flippedCard = null;

        return;

    }



    card.classList.add("is-flipped");



    const image = card.querySelector(".card-image");

    if(image && image.dataset.after){

        image.src = image.dataset.after;

    }



    flippedCard = card;

}



/*==============================
        EVENTS
==============================*/

workCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        activateCard(card);

    });



    card.addEventListener("mouseleave", () => {

        resetCard(card);

    });



    card.addEventListener("click", () => {

        activateCard(card);

        flipCard(card);

    });

});

/*==================================================
                PERSONALIZACIÓN
==================================================*/


const customizationData = {

    blue: {

        image: "imagenes/muebles/azul/silla_azul_1.png",
        color: "#562F2F",

        cards: [

            {
                label: "ACABADO",
                title: "Madera Natural",
                text: "Terminación mate que conserva la textura y la esencia de la madera."
            },

            {
                label: "PALETA",
                title: "Azul Índigo",
                text: "Inspirado en los tonos tradicionales japoneses para transmitir calma y profundidad."
            },

            {
                label: "TAPIZADO",
                title: "Patrón Kikkō",
                text: "Inspirado en el caparazón de la tortuga japonesa, símbolo de longevidad y equilibrio."
            },

            {
                label: "PERSONALIDAD",
                title: "Serenidad",
                text: "Una pieza que transmite equilibrio, elegancia y permanencia."
            }

        ]

    },

    red: {

        image: "imagenes/muebles/rojo/silla_roja_1.png",
        color: "#2F4656",

        cards: [

            {
                label: "ACABADO",
                title: "Roble claro",
                text: "Acabado suave que resalta la luminosidad natural de la madera."
            },

            {
                label: "PALETA",
                title: "Rojo Carmesí",
                text: "Inspirado en los tradicionales torii japoneses."
            },

            {
                label: "TAPIZADO",
                title: "Patrón Asanoha",
                text: "Representa crecimiento, fuerza y prosperidad."
            },

            {
                label: "PERSONALIDAD",
                title: "Carácter",
                text: "Una combinación intensa que transmite energía y presencia."
            }

        ]

    },

    gold: {

        image: "imagenes/muebles/dorado/silla_dorado_1.png",
        color: "#35562F ",

        cards: [

            {
                label: "ACABADO",
                title: "Nogal Oscuro",
                text: "La veta natural adquiere mayor protagonismo gracias al acabado profundo."
            },

            {
                label: "PALETA",
                title: "Dorado Arena",
                text: "Una paleta cálida inspirada en la naturaleza japonesa."
            },

            {
                label: "TAPIZADO",
                title: "Patrón Seigaiha",
                text: "Las olas representan tranquilidad, continuidad y buena fortuna."
            },

            {
                label: "PERSONALIDAD",
                title: "Armonía",
                text: "Un diseño cálido que busca generar paz y equilibrio visual."
            }

        ]

    }

};



function updateCards(data){

    customCards.forEach((card,index)=>{

        const label = card.querySelector(".custom-card-label");
        const title = card.querySelector(".custom-card-title");
        const text = card.querySelector(".custom-card-text");

        card.style.opacity = "0";
        card.style.transform = "translateY(15px)";

        setTimeout(()=>{

            label.textContent = data.cards[index].label;
            title.textContent = data.cards[index].title;
            text.textContent = data.cards[index].text;

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        },180);

    });

}



function changeCustomization(color){

    const data = customizationData[color];

    if(!data) return;

    customizationImage.classList.add("change");

    setTimeout(()=>{

        customizationImage.src = data.image;
        customizationCircle.style.background = data.color;

        updateCards(data);

    },180);

    customizationImage.onload = ()=>{

        customizationImage.classList.remove("change");

    };

}



colorButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        colorButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

        changeCustomization(button.dataset.color);

    });

});



changeCustomization("blue");



/*==================================================
                        FAQ
==================================================*/

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");



    question.addEventListener("click", () => {

        faqItems.forEach(currentItem => {

            if(currentItem !== item){

                currentItem.classList.remove("active");

            }

        });



        item.classList.toggle("active");

    });

});

/*==================================================
                    CAPSULE
==================================================*/

const capsuleTrack = document.querySelector(".capsule-track");

const capsuleSlider = document.querySelector(".capsule-slider");



if(capsuleTrack && capsuleSlider){

    capsuleSlider.addEventListener("mouseenter", () => {

        capsuleTrack.style.animationPlayState = "paused";

    });



    capsuleSlider.addEventListener("mouseleave", () => {

        capsuleTrack.style.animationPlayState = "running";

    });

}



/*==================================================
                INITIALIZATION
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    updateHeader();



    revealElements.forEach(element => {

        revealObserver.observe(element);

    });



    updateParallax(window.scrollY);



    if(colorButtons.length){

        const activeButton = document.querySelector(".color-button.active");



        if(activeButton){

            changeCustomization(

                activeButton.dataset.color

            );

        }

    }



    if(workCards.length){

        workCards.forEach(card => {

            card.classList.remove("active");

            card.classList.remove("is-flipped");



            const image = card.querySelector(".card-image");



            if(image && image.dataset.before){

                image.src = image.dataset.before;

            }

        });

    }



    if(faqItems.length){

        faqItems.forEach((item,index)=>{

            if(index===0){

                item.classList.add("active");

            }else{

                item.classList.remove("active");

            }

        });

    }

});



/*==================================================
                    RESIZE
==================================================*/

window.addEventListener("resize", () => {

    updateParallax(window.scrollY);

});



/*==================================================
                    END
==================================================*/

/*==================================================
            DEPTH PARALLAX
==================================================*/

const depthHeaders = document.querySelectorAll(".depth-header");

const depthContents = document.querySelectorAll(".depth-content");

const depthJapanese = document.querySelectorAll(".depth-japanese");



let depthTicking = false;



function updateDepthParallax(){

    const scroll = window.scrollY;



    /*----------------------------------
            SECTION HEADER
    ----------------------------------*/

    depthHeaders.forEach(element=>{

        const rect = element.getBoundingClientRect();

        const offset = (rect.top - window.innerHeight * .5) * -0.010;

        element.style.transform = `translate3d(0, ${offset}px, 0)`;

    });



    /*----------------------------------
            SECTION CONTENT
    ----------------------------------*/

    depthContents.forEach(element=>{

        const rect = element.getBoundingClientRect();

        const offset = (rect.top - window.innerHeight * .5) * -0.008;

        element.style.transform = `translate3d(0, ${offset}px, 0)`;

    });



    /*----------------------------------
            JAPANESE WORDS
    ----------------------------------*/

    depthJapanese.forEach(element=>{

        const rect = element.getBoundingClientRect();

        const offset = (rect.top - window.innerHeight * .5) * -0.5;

        element.style.transform = `translate3d(0, ${offset}px, 0)`;

    });



    depthTicking = false;

}



window.addEventListener("scroll",()=>{

    if(depthTicking) return;



    depthTicking = true;



    requestAnimationFrame(updateDepthParallax);

});



window.addEventListener("load",updateDepthParallax);

window.addEventListener("resize",updateDepthParallax);

