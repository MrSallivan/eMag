import {getMainTitlt} from "../components/mainTitle.js"
import { getProductCard } from "../components/productCard.js"

// Главная страница
export function getMainPage() {
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
