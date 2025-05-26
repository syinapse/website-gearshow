const prev = document.getElementById('btnAnterior');
const next = document.getElementById('btnProx');


prev.addEventListener('click', () => plusCarsSlide(-1));
next.addEventListener('click', () => plusCarsSlide(1))

let idx = 1;
showCars(idx);

function plusCarsSlide(n) {
    showCars(idx += n);
}

function showCars(index) {
    const cars = document.querySelectorAll('.car-exibition');
    const select = document.querySelectorAll('.slideHero')
    
    if (index > cars.length)  {
        idx = 1;
    }
    if (index < 1) {
        idx = cars.length;
    }
    
    for (let i = 0; i < cars.length; i++){
        cars[i].style.display = 'none';
        select[i].style.backgroundColor = 'transparent';
    }
    cars[idx-1].style.display = 'flex'
    select[idx-1].style.backgroundColor = 'white';
}