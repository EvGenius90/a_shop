"use strict"
// const heart = document.querySelector('.fa-heart__span')

const basket = document.querySelector('.fa-cart-shopping__basket')
const favourites = document.querySelector('.fa-heart__span')
let value = document.querySelector('.value')

document.querySelector('.plus').addEventListener('click', function(){
    value.textContent++
    basket.textContent++
})

document.querySelector('.minus').addEventListener('click', function(){
    if(parseInt(value.textContent) > 0 & parseInt(basket.textContent) > 0){
        value.textContent--
        basket.textContent--
    }
})

// let count_favourites = 1

// // let count_products = 1



// const a = true

// const favoutires = document.querySelectorAll('.text__favoutires')

// const basket_number = document.querySelectorAll('.text__basket')

// const minus = document.querySelectorAll('.minus')

// const plus = document.querySelectorAll('.plus')



// for(let n of plus){
//     n.addEventListener('click', function(){
//         const volume = document.querySelector('.value').textContent++
//         const basket = document.querySelector('.fa-cart-shopping__basket').textContent++
//     })
// }



// for(let value of favoutires){
//     value.addEventListener('click', function(){
//         let heart = document.querySelector('.fa-heart__span')
//         for(count_favourites; count_favourites > 0; count_favourites++){
//             heart.textContent = count_favourites
//             console.log(typeof heart)
//             if(heart.textContent == 1){
//             }
//             break
//         }
//     })
// }



// for(let value1 of basket_number){
//     value1.addEventListener('click', function(){
//         const quantity = document.querySelector('.quantity').textContent--
//         const basket = document.querySelector('.fa-cart-shopping__basket').textContent++
//         for(quantity; quantity < 5;){
//             if(quantity == 1){
//                 alert('asda')
//             }
//             break
//         }
//     })
// }

