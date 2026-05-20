// Script para navegação via teclas

const links = document.querySelectorAll('.lista-links-link');
let index = -1; // -1 = nenhum link focado ainda

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        index = (index + 1) % links.length;
        links[index].focus();
    }

    if (e.key === 'ArrowUp') {
        e.preventDefault();
        index = (index - 1 + links.length) % links.length;
        links[index].focus();
    }

    if (e.key === 'Enter' && index >= 0) {
        links[index].click();
    }
});