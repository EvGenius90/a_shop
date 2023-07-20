"use strict";

// const heart = document.querySelector('.fa-heart__span')

const basket = document.querySelector(".fa-cart-shopping__basket");
const favourites = document.querySelector(".fa-heart__span");
let value = document.querySelector(".value");
let search = document.querySelector(".section_2__button");
let find = document.querySelector(".section_2__find");

document.querySelector(".plus").addEventListener("click", function () {
  value.textContent++;
  basket.textContent++;
});

document.querySelector(".minus").addEventListener("click", function () {
  if ((parseInt(value.textContent) > 0) & (parseInt(basket.textContent) > 0)) {
    value.textContent--;
    basket.textContent--;
  }
});

// for(let n of find){
//     if(n.value == 'a'){
//         search.textContent = 'Искать'
//     }
// }
