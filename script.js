document.addEventListener('DOMContentLoaded', function () {
    // 1. Crear el banner principal
    const banner = document.getElementById('banner');
    banner.style.backgroundImage = 'url("/banner/1.jpg")'; // Ruta de la imagen del banner

   
    const recomendados = [
        {
            imagen: '/viajes/viajes-1.jpg',
            titulo: 'viaje 1',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut fermentum justo.'
        },
        {
            imagen: '/viajes/viajes-2.jpg',
            titulo: 'viaje 2',
            descripcion: 'Mauris felis libero, suscipit sed pretium fermentum, aliquet a mauris.'
        },
        {
            imagen: '/viajes/viajes-3.jpg',
            titulo: 'viaje 3',
            descripcion: 'Phasellus dignissim turpis id hendrerit mollis. Nulla iaculis tempor vehicula.'
        }
    ];

    const contenedorRecomendados = document.getElementById('contenedor-recomendados');
    
    recomendados.forEach(recomendado => {
        // Crear la tarjeta
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        // Crear la imagen
        const img = document.createElement('img');
        img.setAttribute('src', recomendado.imagen);
        img.setAttribute('alt', recomendado.titulo);

        // Crear el título
        const titulo = document.createElement('h3');
        titulo.textContent = recomendado.titulo;

        // Crear la descripción
        const descripcion = document.createElement('p');
        descripcion.textContent = recomendado.descripcion;

        // Añadir imagen, título y descripción a la tarjeta
        tarjeta.appendChild(img);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(descripcion);

        // Añadir la tarjeta al contenedor
        contenedorRecomendados.appendChild(tarjeta);
    });
});
