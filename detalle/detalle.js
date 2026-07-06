/*==================================================
            SHOWCASE MUEBLES
==================================================*/

const furnitureButtons = document.querySelectorAll(".selector-item");

const redImage = document.getElementById("showcase-red-image");
const blueImage = document.getElementById("showcase-blue-image");
const greenImage = document.getElementById("showcase-green-image");


/*==================================================
            BASE DE DATOS
==================================================*/

const furniture = {

    chair:{

        red:"../imagenes/showcase/silla_roja.png",
        blue:"../imagenes/showcase/silla_azul.png",
        green:"../imagenes/showcase/silla_verde.png"

    },

    lamp:{

        red:"../imagenes/showcase/lampara_roja.png",
        blue:"../imagenes/showcase/lampara_azul.png",
        green:"../imagenes/showcase/lampara_verde.png"

    },

    table:{

        red:"../imagenes/showcase/mesa_roja.png",
        blue:"../imagenes/showcase/mesa_azul.png",
        green:"../imagenes/showcase/mesa_verde.png"

    },

    shelf:{

        red:"../imagenes/showcase/estanteria_roja.png",
        blue:"../imagenes/showcase/estanteria_azul.png",
        green:"../imagenes/showcase/estanteria_verde.png"

    },

    bench:{

        red:"../imagenes/showcase/banco_rojo.png",
        blue:"../imagenes/showcase/banco_azul.png",
        green:"../imagenes/showcase/banco_verde.png"

    }

};



/*==================================================
            CAMBIO IMAGEN
==================================================*/

function switchImage(img,newSrc){

    img.classList.add("switching");

    setTimeout(()=>{

        img.src=newSrc;

        img.onload=()=>{

            img.classList.remove("switching");

        };

    },220);

}



/*==================================================
            CAMBIO MUEBLE
==================================================*/

function changeFurniture(name){

    switchImage(redImage,furniture[name].red);

    switchImage(blueImage,furniture[name].blue);

    switchImage(greenImage,furniture[name].green);

}



/*==================================================
            BOTONES
==================================================*/

furnitureButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        furnitureButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

        changeFurniture(button.dataset.furniture);

    });

});


/*==================================================
                COURSE TIMELINE
==================================================*/

const timelineStops = document.querySelectorAll(".timeline-stop");
const timelineCards = document.querySelectorAll(".timeline-card");
const timelineSegments = document.querySelectorAll(".timeline-segment");

function activateTimeline(step){

    /*==============================
            STOPS
    ==============================*/

    timelineStops.forEach((stop,index)=>{

        stop.classList.remove("active");
        stop.classList.remove("visited");

        if(index + 1 < step){

            stop.classList.add("visited");

        }

        if(index + 1 === step){

            stop.classList.add("active");

        }

    });


    /*==============================
            TARJETAS
    ==============================*/

    timelineCards.forEach((card,index)=>{

        card.classList.remove("active");

        if(index + 1 === step){

            card.classList.add("active");

        }

    });


    /*==============================
            SEGMENTOS
    ==============================*/

    timelineSegments.forEach((segment,index)=>{

        segment.classList.remove("active");

        if(index < step - 1){

            segment.classList.add("active");

        }

    });

}



/*==================================================
            CLICK EN STOPS
==================================================*/

timelineStops.forEach((stop,index)=>{

    stop.addEventListener("click",()=>{

        activateTimeline(index + 1);

    });

});



/*==================================================
            CLICK EN TARJETAS
==================================================*/

timelineCards.forEach((card,index)=>{

    card.addEventListener("click",()=>{

        activateTimeline(index + 1);

    });

});



/*==================================================
            ESTADO INICIAL
==================================================*/

if(timelineStops.length){

    activateTimeline(1);

}

/*==================================================
                PROGRAM GALLERY
==================================================*/

const programCards = document.querySelectorAll(".program-card");
const programItems = document.querySelectorAll(".program-item");
const programIcons = document.querySelectorAll(".program-icon");

let currentProgram = 0;



/*==================================================
                ACTUALIZAR
==================================================*/

function updateProgramGallery(){

    programCards.forEach(card=>{

        card.classList.remove(
            "active",
            "prev",
            "next",
            "hidden"
        );

    });



    programItems.forEach(item=>{

        item.classList.remove("active");

    });



    programIcons.forEach(icon=>{

        icon.textContent="−";

    });



    const prev =
        (currentProgram - 1 + programCards.length) %
        programCards.length;

    const next =
        (currentProgram + 1) %
        programCards.length;



    programCards[currentProgram].classList.add("active");

    programCards[prev].classList.add("prev");

    programCards[next].classList.add("next");



    programCards.forEach((card,index)=>{

        if(
            index!==currentProgram &&
            index!==prev &&
            index!==next
        ){

            card.classList.add("hidden");

        }

    });



    programItems[currentProgram].classList.add("active");

    programIcons[currentProgram].textContent="✓";

}



/*==================================================
            CLICK IMÁGENES
==================================================*/

programCards.forEach((card,index)=>{

    card.addEventListener("click",()=>{

        currentProgram=index;

        updateProgramGallery();

    });

});



/*==================================================
            CLICK LISTA
==================================================*/

programItems.forEach((item,index)=>{

    item.addEventListener("click",()=>{

        currentProgram=index;

        updateProgramGallery();

    });

});



/*==================================================
            ESTADO INICIAL
==================================================*/

if(programCards.length){

    updateProgramGallery();

}

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