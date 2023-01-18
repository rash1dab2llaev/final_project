let main = document.querySelector('.third_main')

let firstFooterLink = document.querySelector('#first_footer_link')
let secondFooterLink = document.querySelector('#second_footer_link')
let thirdFooterLink = document.querySelector('#third_footer_link')
let forthFooterLink = document.querySelector('#forth_footer_link')
let fifthFooterLink = document.querySelector('#fifth_footer_link')

let centerBlock = document.createElement('div')
let firstThirdBlock = document.createElement('div')
let secondThirdBlock = document.createElement('div')
let thirdThirdBlock = document.createElement('div')
let forthThirdBlock = document.createElement('div')
let fifthThirdBlock = document.createElement('div')


firstThirdBlock.innerHTML = `
    <h2>Политика конфиденциальности</h2>
    <p>1. ЗАЩИТА ПЕРСОНАЛЬНЫХ ДАННЫХ<br>

1.1. Если в рамках настоящей Оферты Исполнитель получит от Заказчика Персональные данные физических лиц, то
Исполнитель обязуется обрабатывать Персональные данные строго в соответствии с принципами и правилами
обработки персональных данных, предусмотренными законодательством РФ. Заказчик передает Исполнителю
персональные данные с целью оказания Услуг, указанных в настоящей оферте и поручает Исполнителю их обработку,
совершаемую с использованием средств автоматизации или без использования таких средств, включая сбор, запись,
систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу
(предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных...</p>
`

secondThirdBlock.innerHTML = `
    <h2>Обработка персональных данных</h2>
    <p>1. ЗАЩИТА ПЕРСОНАЛЬНЫХ ДАННЫХ<br>

1.1. Если в рамках настоящей Оферты Исполнитель получит от Заказчика Персональные данные физических лиц, то
Исполнитель обязуется обрабатывать Персональные данные строго в соответствии с принципами и правилами
обработки персональных данных, предусмотренными законодательством РФ. Заказчик передает Исполнителю
персональные данные с целью оказания Услуг, указанных в настоящей оферте и поручает Исполнителю их обработку,
совершаемую с использованием средств автоматизации или без использования таких средств, включая сбор, запись,
систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу
(предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных...</p>
`

thirdThirdBlock.innerHTML = `
    <h2>Оферта</h2>
    <p>Договор оферты<br>

Настоящее Соглашение регламентирует условия использования онлайн сервиса, расположенного по адресу https://avtoproverka.net/
(далее Сервис), заключено между любым лицом (далее Пользователь), использующим Сервис, который предназначен для получения
информации об автомобилях, зарегистрированных на территории Российской Федерации (далее Автомобиль), а также устанавливает
условия использования сайта.

Настоящее Соглашение является публичной офертой в соответствии со ст. 435 Гражданского Кодекса РФ. Действия Пользователя по
отправке запроса на получение информации об Автомобиле с помощью специальной формы на Сервисе считаются акцептом оферты
согласно ст. 438 Гражданского Кодекса РФ и означают безоговорочное принятие Пользователем всех условий данного Соглашения без
каких либо изъятий или ограничений на условиях присоединения (акцептом оферты).</p>
`

forthThirdBlock.innerHTML = `
 <h2>Купить отчет</h2>
            <div class="price_list">
                <div class="price_list_item1 dark" id="price1">
                    <h4>Подписка «Профи»</h4>
                    <p>1₽<sub>/первый день</sub></p>
                    <p>Далее 690 ₽ / 7 дней за 15 отчетов</p>
                </div>
                <div class="price_list_item2 light" id="price2">
                    <h4>Один отчет</h4>
                    <p>99₽</p>
                    <p>Для проверки одного ТС</p>
                </div>
                <div class="price_list_item3 light" id="price3">
                    <h4>Пакет из 5 отчетов</h4>
                    <p>369₽</p>
                    <p>Один отчет за 74 ₽</p>
                </div>
            </div>
            <div class="price_form_block">
                <div class="price_form">
                    <input type="checkbox" name="" id="" style="width: 20px;">
                    <p>Соглашаюсь с Политикой конфиденциальности и обработкой персональных данных</p>
                </div>
                <div class="price_form">
                    <input type="checkbox" name="" id="" style="width: 30px">
                    <p>Соглашаюсь тарифами сервиса и условиями использования, ознакомлен с периодическими списаниями 690
                        рублей в неделю за 15
                        отчетов об автомобиле при оформлении подписки за 1 рубль на 1 день, далее 690 рублей в неделю
                    </p>
                </div>
                <a class="header_page_btn" href="/html2/index.html">Купить</a>
            </div>
`
fifthThirdBlock.innerHTML = `
    <h2>Отменить подписку</h2>
    <div class="fifth_third_block_item">
        <input type="email" name="email" id="email" placeholder="E-mail">
         <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
           ОТПИСАТЬСЯ
        </button>


        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Подписка отменена</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                    </div>
                    <div class="modal-footer">
                        
                        <button id="btn" type="button" class="btn btn-primary" data-bs-dismiss="modal"> ОК</button>
                    </div>
                </div>
            </div>
        </div>
       
    </div>            
`


firstFooterLink.addEventListener('click', add)
secondFooterLink.addEventListener('click', add2)
thirdFooterLink.addEventListener('click', add3)
forthFooterLink.addEventListener('click', add4)
fifthFooterLink.addEventListener('click', add5)

function add() {
    centerBlock.insertAdjacentElement('afterbegin', firstThirdBlock)
}
function add2() {
    centerBlock.insertAdjacentElement('afterbegin', secondThirdBlock)
}
function add3() {
    centerBlock.insertAdjacentElement('afterbegin', thirdThirdBlock)
}
function add4() {
    centerBlock.insertAdjacentElement('afterbegin', forthThirdBlock)
}
function add5() {
    centerBlock.insertAdjacentElement('afterbegin', fifthThirdBlock)
}

centerBlock.classList.add('center')
firstThirdBlock.classList.add('main_sub_items')
secondThirdBlock.classList.add('main_sub_items')
thirdThirdBlock.classList.add('main_sub_items')
forthThirdBlock.classList.add('main_sub_items')
fifthThirdBlock.classList.add('main_sub_items')

main.insertAdjacentElement('afterbegin', centerBlock)

