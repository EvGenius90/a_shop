const heart = document.querySelector('.fa-heart__span')

const basket = document.querySelector('.fa-cart-shopping__basket')

// heart.textContent = 0
// console.dir(heart)

const favoutires = document.querySelectorAll('.text__favoutires')

const basket_number = document.querySelectorAll('.text__basket')

for(let value of favoutires){
    value.addEventListener('click', function(){
        for(let i = 0; i <= 1; i++){
            heart.innerHTML = i
        }
    })
}

for(let value1 of basket_number){
    value1.addEventListener('click', function(){
        for(let i = 0; i <= 1; i++){
            basket.innerHTML = i
        }
    })
}

