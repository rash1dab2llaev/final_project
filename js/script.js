
let typed = new Typed('.elem', {
    strings: ['Проверить по,^1000\n госномеру  ^2000\n VIN - коду или<br>  номеру кузова'],
    typeSpeed: 70,
    backSpeed: 20,
    loop: true
})
let img = {
    1: '/img/Меню.svg',
    2: '/img/Закрытие меню.svg'
}


let button = document.querySelector('#menu_burger_button')
let menu_block = document.querySelector('.menu_block')
let bodyEl = document.querySelector('.header')

button.addEventListener('click', backColor)

function backColor() {
    if (button.innerHTML = `<img src="${img[1]}" alt="">`) {
        button.innerHTML = `<img src="${img[2]}" alt="">`
        menu_block.classList.toggle('hide')
    } else {
        button.innerHTML = `<img src="${img[1]}" alt="">`
        menu_block.classList.toggle('hide')
    }

}