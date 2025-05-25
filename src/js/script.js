const headerMenu = document.querySelector('.header-menu');
const hamburguer = document.querySelector('.hamburguer');

function toggleMenu() {
    headerMenu.classList.toggle('active');
    hamburguer.classList.toggle('active');
}

hamburguer.addEventListener('click', toggleMenu);

headerMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('item-menu')) {
        toggleMenu();
    }
})