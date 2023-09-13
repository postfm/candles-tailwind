import { goods } from "../mocks/goods.js"

const menuBtn = document.querySelector('.menu__button')
const menuModal = document.querySelector('.header__menu-list')

const goodsList = document.querySelector('.goods__content')
const goodsItemTemplate = document.querySelector('#goods__item-template').content
const newGoodsItemTemplate = goodsItemTemplate.querySelector('.goods__item')
const goodsItemFragment = document.createDocumentFragment()

goods.forEach((good) => {
  const goodElement = newGoodsItemTemplate.cloneNode(true)
  const goodImg = goodElement.querySelector('.goods__item-img')
  const goodPrice = goodElement.querySelector('.goods__item-price')
  const goodTitle = goodElement.querySelector('.goods__item-title')
  const goodText = goodElement.querySelector('.goods__item-text')

  goodImg.setAttribute('src', `images/${good.image}`)
  goodPrice.textContent = good.price;
  goodTitle.textContent = good.title
  goodText.innerText = good.text[0] + '\n' + good.text[1]

  goodsItemFragment.append(goodElement)
})

goodsList.append(goodsItemFragment)


menuBtn.addEventListener('click', () => {
  menuModal.classList.toggle('menu--open')
  console.log('click');
})

const swiperOne = new Swiper('.feedback__slider', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
});

const swiperTwo = new Swiper('.certificates__slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
    360: {
      slidesPerView: 1,
    },
  },
});

const accordion = document.querySelector('.accordion');
const accordionTitles = accordion.querySelectorAll('.accordion__title')

accordionTitles.forEach.call(accordionTitles, function (accordionTitle) {
  accordionTitle.addEventListener('click', function () {

    const currentText = accordionTitle.parentElement.querySelector('.accordion__text')

    accordionTitle.classList.toggle('accordion__title--active')
    currentText.classList.toggle('accordion__text--visible')

    if (currentText.classList.contains('accordion__text--visible')) {
      currentText.style.maxHeight = currentText.scrollHeight + 'px'
    } else {
      currentText.style.maxHeight = null
    }

  })
})
