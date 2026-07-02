/*=========================================
            TARJETAS PRINCIPALES
=========================================*/

const cards = document.querySelectorAll(".course-card");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        if(card.classList.contains("active")) return;

        const active=document.querySelector(".course-card.active");

        active.classList.remove("active");

        card.classList.add("active");

        reorderCards(card);

    });

});



/*=========================================
        REORDENAR TARJETAS
=========================================*/

function reorderCards(activeCard){

    const container=document.querySelector(".customization-slider");

    const allCards=[...container.querySelectorAll(".course-card")];

    const activeIndex=allCards.indexOf(activeCard);

    if(activeIndex===1) return;

    if(activeIndex===0){

        container.appendChild(allCards[0]);

    }

    else if(activeIndex===2){

        container.insertBefore(allCards[2],allCards[1]);

    }

}





/*=========================================
        DATOS
=========================================*/

const cardData={

wood:[

{

title:"Nogal Oscuro",

subtitle:"Acabado profundo",

description:"Ideal para un estilo clásico con mucha presencia.",

image:"img/cursos/detalle/madera-oscura.webp"

},

{

title:"Roble Claro",

subtitle:"Aspecto natural",

description:"Aporta luminosidad y una estética contemporánea.",

image:"img/cursos/detalle/madera-clara.webp"

},

{

title:"Negro",

subtitle:"Terminación moderna",

description:"Perfecto para contrastes con textiles claros.",

image:"img/cursos/detalle/madera-negra.webp"

}

],



color:[

{

title:"Azul Índigo",

subtitle:"Inspiración japonesa",

description:"Transmite serenidad y equilibrio.",

image:"img/cursos/detalle/color-azul.webp"

},

{

title:"Rojo Carmesí",

subtitle:"Personalidad",

description:"Ideal para destacar una pieza protagonista.",

image:"img/cursos/detalle/color-rojo.webp"

},

{

title:"Dorado",

subtitle:"Elegancia",

description:"Genera un aspecto sofisticado.",

image:"img/cursos/detalle/color-dorado.webp"

}

],



pattern:[

{

title:"Kikko",

subtitle:"Fortaleza",

description:"Inspirado en el caparazón de la tortuga.",

image:"img/cursos/detalle/kikko.webp"

},

{

title:"Asanoha",

subtitle:"Crecimiento",

description:"Uno de los patrones japoneses más utilizados.",

image:"img/cursos/detalle/asanoha.webp"

},

{

title:"Seigaiha",

subtitle:"Mar",

description:"Representa las olas del océano.",

image:"img/cursos/detalle/seigaiha.webp"

}

]

};





/*=========================================
        SELECTORES
=========================================*/

const selectors=document.querySelectorAll(".selector");

selectors.forEach(button=>{

button.addEventListener("click",(e)=>{

e.stopPropagation();

const type=button.dataset.type;

const index=button.dataset.index;

const card=button.closest(".course-card");

updateCard(card,type,index);

});

});





/*=========================================
        CAMBIAR CONTENIDO
=========================================*/

function updateCard(card,type,index){

card.querySelectorAll(".selector").forEach(btn=>{

btn.classList.remove("active");

});

card.querySelector(`[data-index="${index}"]`).classList.add("active");

const data=cardData[type][index];

card.querySelector(".card-preview").src=data.image;

card.querySelector(".card-title").textContent=data.title;

card.querySelector(".card-subtitle").textContent=data.subtitle;

card.querySelector(".card-description").textContent=data.description;

}





/*=========================================
            TIMELINE
=========================================*/

const timeline=document.querySelectorAll(".timeline-card");

timeline.forEach(item=>{

item.addEventListener("click",()=>{

document.querySelectorAll(".timeline-card").forEach(card=>{

card.classList.remove("active");

});

item.classList.add("active");

});

});