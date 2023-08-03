import { getMainTitlt } from "../components/mainTitle.js"
import { getDesc } from "../components/desc.js"

// Страница каталога
export function getCatalogctPage() {
  const page = document.createElement("div")
  page.classList.add("page", "catalog-page", "container")

  const mainTitle = getMainTitlt("Каталог")
  const desc = getDesc("Страница в разработке")
  page.append(mainTitle, desc)
  return page
}
