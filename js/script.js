let headerTop = document.querySelector('.header_top')

headerTop.insertAdjacentHTML(
    'afterbegin',
    `<button id="menu_burger_button"><img src="/img/Меню.svg" alt=""></button>

                    <div class="menu_block">
                        <ul class="menu">
                            <li class="big_link">
                                <a href="#">ЛОГО</a>
                                <a class="hover_link" href="#">ЛОГО</a>
                            </li>
                            <li>
                                <a href="#FAQ">FAQ</a>
                                <a class="hover_link" href="#FAQ">FAQ</a>
                            </li>
                            <li>
                                <a href="#contact">КОНТАКТЫ</a>
                                <a class="hover_link" href="#contact">КОНТАКТЫ</a>
                            </li>

                        </ul>
                        <div class="menu_block_contact">
                            <p>(+992)-988-15-14-86</p>
                            <p>rash1d.ab2llaev@gmail.com</p>
                        </div>
                        <div class="button_block">
                            <img width="18px" src="/img/Вход.svg" alt="login icon">
                            <button class="login_btn">вход</button>
                        </div>
                    </div>`
)

let footer = document.querySelector('.footer')

footer.insertAdjacentHTML(
    'afterbegin',
    `<div class="center">
                <ul class="footer_menu">
                    <li><a href="#">Политика конфиденциальности</a></li>
                    <li><a href="#">Обработка персональных данных</a></li>
                    <li><a href="#">Оферта</a></li>
                    <li><a href="#">Тарифы</a></li>
                    <li><a href="#">Отменить подписку</a></li>
                </ul>
            </div>`
)




//menu burger
let button = document.querySelector('#menu_burger_button')
let menu_block = document.querySelector('.menu_block')
let bodyEl = document.querySelector('.header')

let img = {
    1: '/img/Меню.svg',
    2: '/img/Закрытие меню.svg'
}

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








//typed header
let typed = new Typed('.elem', {
    strings: ['Проверить по,^1000\n госномеру  ^2000\n VIN - коду или<br>  номеру кузова'],
    typeSpeed: 70,
    backSpeed: 20,
    loop: true
})



let faqBtn = document.querySelector('#faq_btn')
let faqItems = document.querySelector('.faq_block_items')


faqBtn.addEventListener('click', hide)

function hide() {

    faqItems.classList.toggle('height')
}


//2

let faqBtn2 = document.querySelector('#faq_btn2')
let faqItems2 = document.querySelector('.faq_block_items2')


faqBtn2.addEventListener('click', hide2)

function hide2() {
    faqItems2.classList.toggle('height2')
}

//3
let faqBtn3 = document.querySelector('#faq_btn3')
let faqItems3 = document.querySelector('.faq_block_items3')


faqBtn3.addEventListener('click', hide3)

function hide3() {
    faqItems3.classList.toggle('height3')
}

//4
let faqBtn4 = document.querySelector('#faq_btn4')
let faqItems4 = document.querySelector('.faq_block_items4')


faqBtn4.addEventListener('click', hide4)

function hide4() {
    faqItems4.classList.toggle('height4')
}

//5
let faqBtn5 = document.querySelector('#faq_btn5')
let faqItems5 = document.querySelector('.faq_block_items5')


faqBtn5.addEventListener('click', hide5)

function hide5() {
    faqItems5.classList.toggle('height5')

}