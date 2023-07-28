import { getMainTitlt } from "../components/mainTitle.js"
import { getDesc } from "../components/desc.js"

// Страница товара
export function getProductPage() {
  const page = document.createElement("div")
  page.classList.add("page", "product-page", "container")

  const mainTitle = getMainTitlt("Продукт")
  const desc = getDesc("Страница в разработке")
  page.append(mainTitle, desc)
  return page
}
