document.addEventListener('DOMContentLoaded', function() {
    const tapa = document.querySelector('.tapa');
    tapa.addEventListener('animationend', function() {
        const boton = document.getElementById('sorpresa-btn');
        boton.classList.remove('oculto');
        boton.style.display = 'block';
        boton.style.opacity = '1';
    });
}); 

