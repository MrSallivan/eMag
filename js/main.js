const app = document.getElementById("app")

function getHeader(params) {
  const header = document.createElement("header")
  header.classList.add("header")

  const container = document.createElement("div")
  container.classList.add("container", "header__container")
  const nav = document.createElement("nav")
  nav.classList.add("navigation")

  let link1 = document.createElement("a")
  link1.href = ""
  link1.classList.add("btn", "navigation__mainpage")
  link1.textContent = "Главная страница"

  let link2 = document.createElement("a")
  link2.href = ""
  link2.classList.add("btn", "navigation__catalog")
  link2.textContent = "Каталог"

  let link3 = document.createElement("a")
  link3.href = ""
  link3.classList.add("btn", "navigation__basket")
  link3.textContent = "Корзина"

  nav.append(link1, link2, link3)
  nav.addEventListener("click", (event) => {
    event.preventDefault()
    if (event.target.classList.contains("navigation__mainpage")) {
      navigation('main')
    }
    if (event.target.classList.contains("navigation__catalog")) {
      navigation("catalog")
    }
    if (event.target.classList.contains("navigation__basket")) {
      navigation("basket")
    }
  })

  container.append(nav)
  header.append(container)
  return header
}

function getPageContainer() {
  const main = document.createElement("main")
  main.classList.add("page-container")
  return main
}
function getProductCard(title, price) {
  const item = document.createElement("li")
  item.classList.add("product-list__item")
  const productTitle = document.createElement("h2")
  productTitle.classList.add("product-list__title")
  productTitle.textContent = title
  const productPrice = document.createElement("strong")
  productPrice.classList.add("product-list__price")
  productPrice.textContent = `${price} рублей`
  const addBasket = document.createElement("button")
  addBasket.classList.add("product-list__btn", "btn")
  addBasket.textContent = `В корзину`
  item.append(productTitle, productPrice, addBasket)
  return item
}
// Главный заголовок
function getMainTitlt(text) {
  const title = document.createElement("h1")
  title.classList.add("main-title")
  title.textContent = text
  return title
}
// Создает описание
function getDesc(text) {
  const desc = document.createElement("p")
  desc.classList.add("desc")
  desc.textContent = text
  return desc
}
// Главная страница
function getMainPage() {
  const page = document.createElement("div")
  page.classList.add("page", "main-page", "container")

  const mainTitle = getMainTitlt("Главная страница")
  const list = document.createElement("ul")
  list.classList.add("product-list", "list-reset")
  list.append(
    getProductCard("Товар_1", 400),
    getProductCard("Товар_2", 800),
    getProductCard("Товар_3", 1200)
  )
  page.append(mainTitle, list)
  return page
}
// Страница товара
function getProductPage() {
  const page = document.createElement("div")
  page.classList.add("page", "product-page", "container")

  const mainTitle = getMainTitlt("Продукт")
  const desc = getDesc("Страница в разработке")
  page.append(mainTitle, desc)
  return page
}
// Страница каталога
function getCatalogctPage() {
  const page = document.createElement("div")
  page.classList.add("page", "catalog-page", "container")

  const mainTitle = getMainTitlt("Каталог")
  const desc = getDesc("Страница в разработке")
  page.append(mainTitle, desc)
  return page
}
// Страница корзины
function getBasketPage() {
  const page = document.createElement("div")
  page.classList.add("page", "basket-page", "container")

  const mainTitle = getMainTitlt("Корзина")
  const desc = getDesc("Страница в разработке")
  page.append(mainTitle, desc)
  return page
}

const header = getHeader()
const pageContainer = getPageContainer()

function navigation(page) {
	console.log(page);
}

// const mainPage = getMainPage()
// pageContainer.append(mainPage)

// const productPage = getProductPage()
// pageContainer.append(productPage)

// const catalogPage = getCatalogctPage()
// pageContainer.append(catalogPage)

const basketgPage = getBasketPage()
pageContainer.append(basketgPage)

app.append(header, pageContainer)
