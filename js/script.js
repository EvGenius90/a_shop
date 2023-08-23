"use strict";

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
let emptyBasket = document.querySelector(".empty-basket");
let section2 = document.querySelector(".section_2");
let productImg = document.querySelector(".product-img");
let contacts = document.querySelector('.sction-1__contacts')
let hamburger = document.querySelector('.hamburger')
let hrefImg = document.querySelectorAll('.href-img')
let zoomImg = document.querySelector('.zoomImg')
let inside = document.querySelector('.inside')

// вывод окна при нажатии на картинку
for(let i of hrefImg){
  i.addEventListener('click', function(){
    zoomImg.classList.remove('disp-none')
    inside.innerHTML = i.innerHTML
  })
}

// закрытие окна при нажатии на крестик
document.querySelector('.close').addEventListener('click', function(){
  zoomImg.classList.add('disp-none')
  overlay.classList.add('disp-none')
})


// меню гамбургер
document.querySelector('.hamburger').addEventListener('click', function(){
  contacts.classList.toggle('sction-1__contacts_active')
  hamburger.classList.toggle('hamburger_active')
})

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

// закрытие корзины при клике области сайта
document.addEventListener("click", function (event) {
  if (event.target != text_basket &&
    event.target.dataset.action != "plus" &&
    event.target.dataset.action != "minus" &&
    event.target.dataset.action != "to-basket") {
    products.classList.add("hidden");
  }
});

// если в поисковике имеется слово, то меняется слово на кнопке на слово "искать"
find.addEventListener("input", function () {
  if (find.value != "") {
    search.textContent = "Искать";
  } else {
    search.textContent = "Найти";
  }
});

// обработчик событий кол-ва товарав
document.addEventListener("click", function (n) {
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
      statusbasket();
    }
  }
});

// добавление товара в корзину
document.addEventListener("click", function (event) {
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
      oldPrice: product.querySelector(".old-price").innerText,
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

    statusbasket();
  }
});

// функция надписи "корзина пустая"
function statusbasket() {
  if (products.children.length > 1) {
    emptyBasket.classList.add("disp-none");
  } else emptyBasket.classList.remove("disp-none");
}

// функция для работы с посковиком
find.addEventListener("input", function () {
  let val = this.value;
  let elItems = document.querySelectorAll(".section_2__product");
  if (val != "") {
    for (let x of elItems) {
      if (x.innerText.search(val) == -1) {
        x.classList.add("disp-none");
      }
    }
  } else {
    for (let x of elItems) {
      x.classList.remove("disp-none");
    }
  }
});

