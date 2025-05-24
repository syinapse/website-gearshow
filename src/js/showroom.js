const banners = [
    '../assets/img/banners/car-show.jpg',
    '../assets/img/banners/ferrari-show.jpg',
    '../assets/img/banners/ferrari-show2.jpg',
    '../assets/img/banners/mclaren-show.jpg',
    '../assets/img/banners/porsche-show.jpg'
];

let i = 0;
const time = 3500;
const hero = document.querySelector('.showroom');

banners.forEach(src => {
    const img = new Image();
    img.src = src;
});

function slideshow() {
    if (hero) {
        hero.style.backgroundImage = `var(--gradient), url(${banners[i]})`;
    }
    i = (i + 1) % banners.length;
    setTimeout(slideshow, time);
}
slideshow();