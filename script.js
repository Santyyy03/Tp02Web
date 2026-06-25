// ======================================
// RAÍZ - SCRIPT.JS 2.0
// ======================================



// ======================================
// MENÚ HAMBURGUESA
// ======================================

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if(menuToggle){

    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

}



// cerrar menú al tocar un link

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});



// ======================================
// HEADER SCROLL
// ======================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});



// ======================================
// SCROLL REVEAL
// ======================================

const revealElements =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(element => {

    revealObserver.observe(element);

});



// ======================================
// FAQ
// ======================================

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question =
    item.querySelector(".faq-question");

    const answer =
    item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        const isOpen =
        item.classList.contains("active");

        faqItems.forEach(faq => {

            faq.classList.remove("active");

            faq.querySelector(".faq-answer")
            .style.maxHeight = null;

        });

        if(!isOpen){

            item.classList.add("active");

            answer.style.maxHeight =
            answer.scrollHeight + "px";

        }

    });

});



// ======================================
// DATOS OBRAS
// ======================================

const obras = [

    {
        titulo:"Silla Kyoto",
        descripcion:"Restauración integral con tapizado Asanoha.",
        original:"imagenes/muebles/viejos/silla_viejo.png",
        restaurada:"imagenes/muebles/nuevos/silla_nuevo.png"
    },

    {
        titulo:"Lámpara Akari",
        descripcion:"Recuperación y rediseño contemporáneo.",
        original:"imagenes/muebles/viejos/lampara_viejo.png",
        restaurada:"imagenes/muebles/nuevos/lampara_nuevo.png"
    },

    {
        titulo:"Mesa Nagoya",
        descripcion:"Madera recuperada y acabado premium.",
        original:"imagenes/muebles/viejos/mesa_alta_viejo.png",
        restaurada:"imagenes/muebles/nuevos/mesa_alta_nuevo.png"
    },

    {
        titulo:"Armario Fuji",
        descripcion:"Diagnóstico estructural completo.",
        original:"imagenes/muebles/viejos/armario_viejo.png",
        restaurada:"imagenes/muebles/nuevos/armario_nuevo.png"
    },

    {
        titulo:"Sillón Sakura",
        descripcion:"Tapizados japoneses personalizados.",
        original:"imagenes/muebles/viejos/silla_viejo.png",
        restaurada:"imagenes/muebles/nuevos/silla_nuevo.png"
    },

    {
        titulo:"Cómoda Hikari",
        descripcion:"Nueva identidad visual.",
        original:"imagenes/muebles/viejos/mesita_viejo.png",
        restaurada:"imagenes/muebles/nuevos/mesita_nuevo.png"
    },

    {
        titulo:"Mesa Zen",
        descripcion:"Proceso integral de restauración.",
        original:"imagenes/muebles/viejos/mesa_baja_viejo.png",
        restaurada:"imagenes/muebles/nuevos/mesa_baja_nuevo.png"
    }

];



// ======================================
// CARRUSEL OBRAS
// ======================================

const obrasTrack =
document.getElementById("obras-track");

let currentIndex = 2;



function renderObras(){

    if(!obrasTrack) return;

    obrasTrack.style.opacity = 0;

    setTimeout(() => {

        obrasTrack.innerHTML = "";

        const indicators =
        document.getElementById("obras-indicators");
        
        if(indicators){
            
        indicators.innerHTML = "";

    obras.forEach((_, index) => {

        const dot =
        document.createElement("div");

        dot.classList.add("obra-dot");

        if(index === currentIndex){

            dot.classList.add("active");
        }

        indicators.appendChild(dot);

    });

}

        const total = obras.length;

        const positions = [-2,-1,0,1,2];



        positions.forEach(position => {

            const index =
            (currentIndex + position + total)
            % total;

            const obra = obras[index];

            const card =
            document.createElement("div");



            if(position === 0){

                card.className =
                "obra-card center";

            }else if(Math.abs(position) === 1){

                card.className =
                "obra-card side";

            }else{

                card.className =
                "obra-card side-far";
            }



            const image =
            position === 0
            ? obra.restaurada
            : obra.original;



            card.innerHTML = `

                <img
                class="obra-image"
                src="${image}"
                alt="${obra.titulo}">

                <div class="obra-info">

                    <h3>${obra.titulo}</h3>

                    <p>${obra.descripcion}</p>

                </div>

            `;



            card.addEventListener("click", () => {

                currentIndex = index;

                renderObras();

            });

            obrasTrack.appendChild(card);

        });


        obrasTrack.style.opacity = 1;

    },200);

}

renderObras();



// ======================================
// SWIPE MÓVIL
// ======================================

let startX = 0;
let endX = 0;

if(obrasTrack){

    obrasTrack.addEventListener("touchstart", e => {

        startX =
        e.changedTouches[0].screenX;

    });

    obrasTrack.addEventListener("touchend", e => {

        endX =
        e.changedTouches[0].screenX;

        handleSwipe();

    });

}



function handleSwipe(){

    if(startX - endX > 50){

        currentIndex =
        (currentIndex + 1)
        % obras.length;

        renderObras();
    }

    if(endX - startX > 50){

        currentIndex =
        (currentIndex - 1 + obras.length)
        % obras.length;

        renderObras();
    }

}



// ======================================
// PERSONALIZACIÓN
// ======================================

const preview =
document.querySelector(".large-image");

const infoTitle =
document.querySelector(".personalizacion-info h4");

const infoText =
document.querySelector(".personalizacion-info p");



const configuraciones = {

    rojo:{

        titulo:"Vitalidad ancestral",

        texto:"Madera oscura y detalles rojos.",

        imagen:"imagenes/muebles/rojo/silla_roja_1.png"
    },

    azul:{

        titulo:"Horizonte sereno",

        texto:"Crema, azul y equilibrio.",

        imagen:"imagenes/muebles/azul/silla_azul_1.png"
        
    },

    dorado:{

        titulo:"Sobriedad imperial",

        texto:"Negro y dorado premium.",

        imagen:"imagenes/muebles/dorado/silla_dorado_1.png"
    }

};



document.querySelectorAll(".color-option")
.forEach(button => {

    button.addEventListener("click", () => {

        document
        .querySelectorAll(".color-option")
        .forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const key =
        button.dataset.color;

        const data =
        configuraciones[key];

        if(!data) return;

        infoTitle.textContent =
        data.titulo;

        infoText.textContent =
        data.texto;

        preview.style.opacity = 0;

        setTimeout(() => {

            preview.innerHTML = `
                <img src="${data.imagen}" alt="">
            `;

            preview.style.opacity = 1;

        },200);

    });

});



// ======================================
// HERO PARALLAX
// ======================================

const hero =
document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if(!hero) return;

    const scroll =
    window.pageYOffset;

    hero.style.backgroundPositionY =
    scroll * 0.35 + "px";

});



// ======================================
// SCROLL SUAVE LINKS
// ======================================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ======================================
// DRAG CON MOUSE
// ======================================

let mouseStartX = 0;
let mouseEndX = 0;

if(obrasTrack){

    obrasTrack.addEventListener("mousedown", e => {

        mouseStartX = e.clientX;

    });



    obrasTrack.addEventListener("mouseup", e => {

        mouseEndX = e.clientX;

        handleMouseDrag();

    });

}



function handleMouseDrag(){

    if(mouseStartX - mouseEndX > 50){

        currentIndex =
        (currentIndex + 1)
        % obras.length;

        renderObras();
    }

    if(mouseEndX - mouseStartX > 50){

        currentIndex =
        (currentIndex - 1 + obras.length)
        % obras.length;

        renderObras();
    }

}

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

// Mostrar una configuración por defecto al cargar la página

const inicial = configuraciones.rojo;

preview.innerHTML = `
<img src="${inicial.imagen}" alt="">
`;

infoTitle.textContent = inicial.titulo;
infoText.textContent = inicial.texto;