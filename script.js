/*==================================================
                RAÍZ
                script.js
==================================================*/

"use strict";

/*==================================================
                SELECTORES
==================================================*/

const header = document.querySelector(".header");

const scrollIndicator = document.querySelector(".scroll-indicator");

const hero = document.querySelector(".hero");

const layer1 = document.querySelector(".layer-1");

const layer2 = document.querySelector(".layer-2");

const layer3 = document.querySelector(".layer-3");



/*==================================================
            HEADER SCROLL
==================================================*/

function headerScroll(){

    if(window.scrollY > 40){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", headerScroll);

headerScroll();





/*==================================================
        BOTÓN SCROLL HERO
==================================================*/

if(scrollIndicator){

    scrollIndicator.addEventListener("click", () => {

        const nextSection = hero.nextElementSibling;

        if(nextSection){

            nextSection.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

}





/*==================================================
            PARALLAX HERO
==================================================*/

function heroParallax(){

    const scroll = window.scrollY;

    if(!hero) return;

    if(scroll > hero.offsetHeight){

        return;

    }

    layer1.style.transform =
        `translateY(${scroll * 0.18}px) translateX(${scroll * 0.05}px)`;

    layer2.style.transform =
        `translateY(${scroll * -0.12}px) translateX(${scroll * -0.08}px)`;

    layer3.style.transform =
        `translateY(${scroll * 0.28}px) translateX(${scroll * -0.04}px)`;

}

window.addEventListener("scroll", heroParallax);

heroParallax();

/*==================================================
            REVEAL ON SCROLL
==================================================*/

/*
    Todos los elementos que tengan la clase
    .reveal aparecerán al entrar en pantalla.

    Ejemplo:

    <div class="concept-card reveal"></div>

*/

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {

        threshold:0.15,

        rootMargin:"0px 0px -80px 0px"

    }

);

revealElements.forEach((element)=>{

    revealObserver.observe(element);

});





/*==================================================
        REVEAL ESCALONADO
==================================================*/

/*

Permite que las tarjetas aparezcan
una detrás de otra.

*/

const revealGroups = [

    ".concept-card",

    ".work-card",

    ".custom-card",

    ".gallery-item",

    ".course-card",

    ".faq-item"

];

revealGroups.forEach((selector)=>{

    const items = document.querySelectorAll(selector);

    items.forEach((item,index)=>{

        item.style.transitionDelay = `${index * 0.12}s`;

    });

});

/*==================================================
                    OBRAS
==================================================*/

const workCards = document.querySelectorAll(".work-card");



/*==================================================
                FLIP
==================================================*/

workCards.forEach(card => {

    card.addEventListener("click", e => {

        if(e.target.closest(".button")) return;

        workCards.forEach(otherCard => {

            if(otherCard !== card){

                otherCard.classList.remove("flipped");

            }

        });

        card.classList.toggle("flipped");

    });

});

/*==================================================
        CAMBIO DE IMAGEN EN HOVER
==================================================*/

workCards.forEach(card => {

    const oldImage = card.querySelector(".image-old");
    const newImage = card.querySelector(".image-new");

    card.addEventListener("mouseenter",()=>{

        oldImage.style.opacity="0";
        newImage.style.opacity="1";

    });

    card.addEventListener("mouseleave",()=>{

    if(card.classList.contains("flipped")) return;

    oldImage.style.opacity="1";

    newImage.style.opacity="0";

    });

});

/*==================================================
            RESET IMAGEN
==================================================*/

document.addEventListener("click",e=>{

    workCards.forEach(card=>{

        if(card.contains(e.target)) return;

        card.classList.remove("flipped");

        const oldImage=card.querySelector(".image-old");
        const newImage=card.querySelector(".image-new");

        oldImage.style.opacity="1";
        newImage.style.opacity="0";

    });

});

/*==================================================
            PERSONALIZACIÓN
==================================================*/

const productImage =
    document.querySelector(".product-image");

const colorButtons =
    document.querySelectorAll(".color-btn");

const customCards =
    document.querySelectorAll(".custom-card");





/*==================================================
                DATOS
==================================================*/

const customizationData = {

    blue:{

        image:"imagenes/muebles/azul/silla_azul_1.png",

        cards:[

            {

                title:"Madera Natural",

                text:"Terminación mate que conserva la textura y la esencia de la madera."

            },

            {

                title:"Azul Índigo",

                text:"Inspirado en los tonos tradicionales japoneses para transmitir calma y profundidad."

            },

            {

                title:"Patrón Kikkō",

                text:"Símbolo de longevidad y equilibrio dentro de la cultura japonesa."

            },

            {

                title:"Serenidad",

                text:"Una pieza pensada para transmitir equilibrio, calma y elegancia."

            }

        ]

    },





    red:{

        image:"imagenes/muebles/rojo/silla_roja_1.png",

        cards:[

            {

                title:"Roble claro",

                text:"Acabado suave que resalta la luminosidad natural de la madera."

            },

            {

                title:"Rojo Carmesí",

                text:"Inspirado en los tradicionales torii japoneses."

            },

            {

                title:"Patrón Asanoha",

                text:"Representa crecimiento, fuerza y prosperidad."

            },

            {

                title:"Carácter",

                text:"Una combinación intensa que transmite energía y presencia."

            }

        ]

    },





    gold:{

        image:"imagenes/muebles/dorado/silla_dorado_1.png",

        cards:[

            {

                title:"Nogal Oscuro",

                text:"La veta natural adquiere mayor protagonismo gracias al acabado profundo."

            },

            {

                title:"Dorado Arena",

                text:"Una paleta cálida inspirada en la naturaleza japonesa."

            },

            {

                title:"Patrón Seigaiha",

                text:"Las olas representan tranquilidad, continuidad y buena fortuna."

            },

            {

                title:"Armonía",

                text:"Un diseño cálido que busca generar paz y equilibrio visual."

            }

        ]

    }

};





/*==================================================
            ACTUALIZAR PRODUCTO
==================================================*/

function updateCustomization(color){

    const colors={

blue:"rgba(50,93,155,.12)",

red:"rgba(166,61,64,.12)",

gold:"rgba(176,138,74,.12)"

};

document.documentElement.style
.setProperty(

"--circle-color",

colors[color]

);

    const data = customizationData[color];

    if(!data) return;





    productImage.src = data.image;





    customCards.forEach((card,index)=>{

        const title =
            card.querySelector(".custom-card-title");

        const text =
            card.querySelector(".custom-card-text");

        title.textContent =
            data.cards[index].title;

        text.textContent =
            data.cards[index].text;

    });

}





/*==================================================
            BOTONES
==================================================*/

colorButtons.forEach((button)=>{

    button.addEventListener("click",()=>{

        colorButtons.forEach((btn)=>{

            btn.classList.remove("active");

        });





        button.classList.add("active");





        updateCustomization(

            button.dataset.color

        );

    });

});





/*==================================================
                INICIO
==================================================*/

updateCustomization("blue");

/*==================================================
                    FAQ
==================================================*/

const faqItems =
    document.querySelectorAll(".faq-item");





/*==================================================
            ACORDEÓN
==================================================*/

faqItems.forEach((item)=>{

    const button =
        item.querySelector(".faq-question");

    button.addEventListener("click",()=>{

        const isActive =
            item.classList.contains("active");





        /*------------------------------------------
            CERRAR TODOS
        ------------------------------------------*/

        faqItems.forEach((faq)=>{

            faq.classList.remove("active");

        });





        /*------------------------------------------
            ABRIR EL SELECCIONADO
        ------------------------------------------*/

        if(!isActive){

            item.classList.add("active");

        }

    });

});

/*==================================================
                INICIALIZACIÓN
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("RAÍZ iniciado correctamente.");

});





/*==================================================
                RESIZE
==================================================*/

window.addEventListener("resize", () => {

    heroParallax();

});





/*==================================================
            VISIBILIDAD DE PESTAÑA
==================================================*/

/*
    Cuando el usuario vuelve a la pestaña,
    actualizamos el estado visual por si el
    navegador pausó alguna animación.
*/

document.addEventListener("visibilitychange", () => {

    if(document.visibilityState === "visible"){

        headerScroll();

        heroParallax();

        updateWorks();

    }

});





/*==================================================
            COMPROBACIONES
==================================================*/

console.group("RAÍZ");

console.log("Header:", !!header);

console.log("Hero:", !!hero);

console.log("Carrusel:", workCards.length);

console.log("Colores:", colorButtons.length);

console.log("FAQ:", faqItems.length);

console.groupEnd();





/*==================================================
                FIN
==================================================*/

const japaneseWords =
document.querySelectorAll(".jp-floating");

window.addEventListener("scroll", () => {

    const scroll =
    window.pageYOffset;

    japaneseWords.forEach((word,index)=>{

        word.style.transform =
        `translateY(${scroll * (0.07 + index * 0.05)}px)`;

    });

});