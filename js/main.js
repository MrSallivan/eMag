import { getHeader } from "./components/header.js"
import { getPageContainer } from "./components/pageContainer.js"
import { getProductCard } from "./components/productCard.js"
import { getMainTitlt } from "./components/mainTitle.js"
import { getDesc } from "./components/desc.js"

import { getMainPage } from "./pages/main.js"

const app = document.getElementById("app")
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

export function navigation(page) {
  pageContainer.innerHTML = ""
  switch (page) {
    case "catalog":
      const catalogPage = getCatalogctPage()
      pageContainer.append(catalogPage)
      break
    case "basket":
      const basketgPage = getBasketPage()
      pageContainer.append(basketgPage)
      break
    default:
      const mainPage = getMainPage()
      pageContainer.append(mainPage)
      break
  }
}

navigation()
app.append(header, pageContainer)
