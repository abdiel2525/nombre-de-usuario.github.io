function mostrarMensaje() {
    alert('¡Hola! Bienvenidos a mi pagina web!');
}

function toggleInfo(id) {
    const paragraph = document.getElementById(id);
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
    } else {
        paragraph.style.display = 'none';
    }
}