"use strict";

// переменные
const basket = document.querySelector(".fa-cart-shopping__basket");
const favourites = document.querySelector(".fa-heart__span");
let search = document.querySelector(".section_2__button");
let find = document.querySelector(".section_2__find");
let logo_support = document.querySelector(".icon-support");
let support = document.querySelector(".support");
let products = document.querySelector(".set-of-products");
let text_basket = document.querySelector(".text-basket");
let like = document.querySelectorAll(".text__favoutires");
let faHeart = document.querySelector(".fa-heart");
let emptyBasket = document.querySelector('.empty-basket')

// счетчик любимых товаров
for (let x of like) {
  x.addEventListener("click", function () {
    let colorLike = x.classList.toggle("color-scheme");
    // если товар понравился, прибавлять счетчик на один
    if (colorLike) {
      favourites.textContent++;
      faHeart.classList.add("color-scheme");
      console.log(colorLike);
      // если товар уже не понравился, отнимать счетчик на единицу
    } else {
      favourites.textContent--;
      // если счетчик лайков равен нулю, то оставить кастомный цвет "избранное"
      if (favourites.textContent == 0) {
        faHeart.classList.remove("color-scheme");
      }
    }
  });
}

// скрвает/показывает окно корзины
text_basket.addEventListener("click", function () {
  products.classList.toggle("hidden");
});

// окно поддержки
logo_support.addEventListener("click", function () {
  support.classList.toggle("is-active");
  logo_support.classList.toggle("height-bottom");
});

// если в поисковике имеется слово, то меняется слово на кнопке на слово "искать"
find.addEventListener("input", function () {
  if (find.value != "") {
    search.textContent = "Искать";
  } else {
    search.textContent = "Найти";
  }
});

// функция объекта window
window.addEventListener("click", function (n) {
  let counter;

  // проверяем клик по кнопкам плюс или минус
  if (n.target.dataset.action == "plus" || n.target.dataset.action == "minus") {
    // находим обертку счетчика
    const add_product = n.target.closest(".add-product");
    // находим div с числом счетчика
    counter = add_product.querySelector("[data-counter]");
  }
  // если нажать на кнопку "плюс"
  if (n.target.dataset.action == "plus") {
    counter.textContent++;
  }
  // если нажать на кнопку "минус"
  if (n.target.dataset.action == "minus") {
    if (parseInt(counter.textContent) > 0) {
      counter.textContent--;
    }

    // если находится в корзине и ровно нулю
    if (
      n.target.closest(".set-of-products") &&
      parseInt(counter.innerText) == 0
    ) {
      n.target.closest(".section_2__product").remove();
      statusbasket()
    }
  }
});

window.addEventListener("click", function (event) {
  let product;
  if (event.target.hasAttribute("data-bask")) {
    // карточка товара
    product = event.target.closest(".section_2__product");
    // шаблон корзины
    let product_info = {
      id: product.dataset.id,
      imgSrc: product.querySelector(".product-img").getAttribute("src"),
      title: product.querySelector(".product-title").innerText,
      itemsInBox: product.querySelector("[data-counter]").innerText,
      price: product.querySelector(".price").innerText,
      oldPrice: product.querySelector('.old-price').innerText,
    };

    let itemInCart = products.querySelector(`[data-id="${product_info.id}"]`);
    // если есть товар в корзине
    if (itemInCart) {
      let volueEl = itemInCart.querySelector(".value");
      volueEl.innerText =
        parseInt(volueEl.innerText) + parseInt(product_info.itemsInBox);
      // volueEl.innerText = parseInt(product_info.itemsInBox);
      // если нет товара в корзине
    } else {
      const productItem = `
      <div class="section_2__product" data-id="${product_info.id}">
                    <a href="#"><img class="product-img" src="${product_info.imgSrc}" alt=""></a>
                    <div class="section_2__text">
                        <h3 class="product-title">${product_info.title}</h3>
                        <p>Цена: <span class="price">${product_info.price}</span> <s>${product_info.oldPrice}</s></p>
                        <div class="section_2__add-product">
                            <div class="add-product">
                                <button class="minus" data-action="minus">-</button>
                                <p class="value product-text" data-counter="">${product_info.itemsInBox}</p>
                                <button class="plus" data-action="plus">+</button>
                            </div>
                        </div>
                    </div>
        </div>
        
      `;
      products.insertAdjacentHTML("beforeend", productItem);
    }

    // сброс счетчика до нуля
    product.querySelector(".value").innerText = 0;

    statusbasket()
  }
});


function statusbasket(){
  if(products.children.length > 1){
    emptyBasket.classList.add('disp-none')
  }else(
    emptyBasket.classList.remove('disp-none')
  )
}