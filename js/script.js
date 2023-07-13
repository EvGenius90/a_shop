// const heart = document.querySelector('.fa-heart__span')

const basket = document.querySelector('.fa-cart-shopping__basket')

// let quantity = document.querySelector('.quantity')

let count_favourites = 1

let count_products = 1



const a = true

const favoutires = document.querySelectorAll('.text__favoutires')

const basket_number = document.querySelectorAll('.text__basket')



for(let value of favoutires){
    value.addEventListener('click', function(){
        let heart = document.querySelector('.fa-heart__span')
        // heart.innerHTML = count_favourites++
        
        for(count_favourites; count_favourites > 0; count_favourites++){
            heart.innerHTML = count_favourites
            if(heart.textContent == 1){
            }
            break
        }
    })
}

for(let value1 of basket_number){
    value1.addEventListener('click', function(){
        let quantity = document.querySelector('.quantity').textContent--
        basket.innerHTML = count_products++
        for(quantity; quantity < 5;){
            if(quantity == 1){
                alert('asda')
            }
            break
        }
        // quantity.innerHTML = quantity--
        // basket.innerHTML = basket++
    })
}

