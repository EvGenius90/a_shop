"use strict";

const basket = document.querySelector(".fa-cart-shopping__basket");
const favourites = document.querySelector(".fa-heart__span");
let value = document.querySelector(".value");
let search = document.querySelector(".section_2__button");
let find = document.querySelector(".section_2__find");
let logo_support = document.querySelector(".icon-support");
let support = document.querySelector(".support");

logo_support.addEventListener('click', function(){
  support.classList.toggle('is-active')
  logo_support.classList.toggle('height-bottom')
})

find.addEventListener("input", function () {
  if (find.value != "") {
    search.textContent = "Искать";
  } else {
    search.textContent = "Найти";
  }
});

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
