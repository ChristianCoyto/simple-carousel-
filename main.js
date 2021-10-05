let arrayPaisajes = ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg", "/img/5.jpg", "/img/6.jpg"]
let img = document.getElementById('img');

let i = 0;

function mostrarImagenes() {
    img.src = arrayPaisajes[i]
    i = (i < arrayPaisajes.length - 1) ? i + 1 : 0;
}

function intervalo() {
    setInterval(mostrarImagenes, 2000);
}


