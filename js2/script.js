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

