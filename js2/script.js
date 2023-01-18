let btn = document.querySelector('#btn')
let main = document.querySelector('.main_block')
let priceBlock = document.querySelector('.price_block')

btn.addEventListener('click', filter)
main.classList.add('filter')
priceBlock.classList.add('filter')

function filter() {
    if (btn) {
        main.classList.remove('filter')
        priceBlock.classList.remove('filter')
    }
}



//price block hover
let price1 = document.querySelector('#price1')
let price2 = document.querySelector('#price2')
let price3 = document.querySelector('#price3')

price1.addEventListener('click', add1)
price2.addEventListener('click', add2)
price3.addEventListener('click', add3)

function add1() {
    price1.classList.add('cl1')
    price2.classList.remove('cl2')
    price3.classList.remove('cl3')

}
function add2() {
    price2.classList.add('cl2')
    price1.classList.remove('cl1')
    price3.classList.remove('cl3')
}
function add3() {
    price3.classList.add('cl3')
    price1.classList.remove('cl1')
    price2.classList.remove('cl2')
}