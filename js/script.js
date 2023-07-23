"use strict";

const basket = document.querySelector(".fa-cart-shopping__basket");
const favourites = document.querySelector(".fa-heart__span");
// let value = document.querySelector(".value");
let search = document.querySelector(".section_2__button");
let find = document.querySelector(".section_2__find");
let logo_support = document.querySelector(".icon-support");
let support = document.querySelector(".support");

let products = document.querySelector('.set-of-products')

logo_support.addEventListener("click", function () {
  support.classList.toggle("is-active");
  logo_support.classList.toggle("height-bottom");
});

find.addEventListener("input", function () {
  if (find.value != "") {
    search.textContent = "Искать";
  } else {
    search.textContent = "Найти";
  }
});

window.addEventListener("click", function (n) {
  let counter;
  let product;
  // проверяем клик по кнопкам плюс или минус
  if (n.target.dataset.action == "plus" || n.target.dataset.action == "minus") {
    // находим обертку счетчика
    const add_product = n.target.closest(".add-product");
    // карточка товара
    product = n.target.closest('.section_2__product')
    // находим div с числом счетчика
    counter = add_product.querySelector("[data-counter]");
  }
  if (n.target.dataset.action == "plus") {
    counter.textContent++;
    basket.textContent++;
    console.log(product)
    const product_info = {
      imgSrc: product.querySelector('.product-img').getAttribute('src'),
      title: product.querySelector('.product-title').innerText,
      itemsInBox: product.querySelector('.value').innerText
    }
    
    const productItem = `
    <h3>${product_info.title}</h3>
    <img src="${product_info.imgSrc}" alt="">
    <p>${'кол-во: ' + product_info.itemsInBox}</p>
    `

    products.insertAdjacentHTML('beforeend', productItem)

  }
  if (n.target.dataset.action == "minus") {
    if (
      (parseInt(counter.textContent) > 0) &
      (parseInt(basket.textContent) > 0)
    ) {
      counter.textContent--;
      basket.textContent--;
    }
  }
});

// document.querySelector(".plus").addEventListener("click", function () {
//   value.textContent++;
//   basket.textContent++;
//   console.log(value.innerHTML)
// });

// document.querySelector(".minus").addEventListener("click", function () {
//   if ((parseInt(value.textContent) > 0) & (parseInt(basket.textContent) > 0)) {
//     value.textContent--;
//     basket.textContent--;
//     console.log(value)
//   }
// });
