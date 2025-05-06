// Efecto 1: Fade-in al hacer scroll
// const elementosAnimados = document.querySelectorAll('.card, .about p, .benefits li');

// const mostrarElemento = (elemento) => {
//     const topElemento = elemento.getBoundingClientRect().top;
//     const altoPantalla = window.innerHeight;
//     if (topElemento < altoPantalla - 100) {
//         elemento.classList.add('visible');
//     }
// };

// window.addEventListener('scroll', () => {
//     elementosAnimados.forEach(mostrarElemento);
// });

const elementosAnimados = document.querySelectorAll('.card, .about p, .benefits li');

const mostrarElementoConDelay = () => {
    let delay = 50;
    elementosAnimados.forEach((elemento, index) => {
        const topElemento = elemento.getBoundingClientRect().top;
        const altoPantalla = window.innerHeight;

        if (topElemento < altoPantalla - 100 && !elemento.classList.contains('visible')) {
            setTimeout(() => {
                elemento.classList.add('visible');
            }, delay);
            delay += 150; // aumenta el delay para el siguiente elemento
        }
    });
};

window.addEventListener('scroll', mostrarElementoConDelay);



// Efecto 3: Fondo parallax suave
const fondo = document.querySelector('.main');
window.addEventListener('scroll', () => {
    const offset = window.scrollY;
    fondo.style.backgroundPositionY = offset * 0.5 + 'px';
});

// Efecto 4: Animación al pasar el mouse por las tarjetas
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 10px 25px rgba(255, 0, 255, 0.3)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});



// 2. Parpadeo suave en el subtítulo
const subtitulo = document.querySelector(".main-subtitle");
setInterval(() => {
    subtitulo.style.opacity = subtitulo.style.opacity === "1" ? "0.5" : "1";
}, 2000);

// 3. Botones que laten al hacer scroll
const botones = document.querySelectorAll(".main-button");

window.addEventListener("scroll", () => {
    botones.forEach(btn => {
        btn.classList.add("latido-scroll");
        setTimeout(() => btn.classList.remove("latido-scroll"), 1000);
    });
});


