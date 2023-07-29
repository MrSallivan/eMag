import { getHeader } from "./components/header.js"
import { getPageContainer } from "./components/pageContainer.js"
import { getProductCard } from "./components/productCard.js"
import { getMainTitlt } from "./components/mainTitle.js"
import { getDesc } from "./components/desc.js"


const app = document.getElementById("app")
const header = getHeader()
const pageContainer = getPageContainer()


export async function navigation(page) {
  pageContainer.innerHTML = ""
  switch (page) {
    case "catalog":
      const pageModuleCatalog = await import("./pages/catalog.js")
      const catalogPage = pageModuleCatalog.getCatalogctPage()
      pageContainer.append(catalogPage)
      break
    case "basket":
      const pageModuleBasket = await import("./pages/basket.js")
      const basketgPage = pageModuleBasket.getBasketPage()
      pageContainer.append(basketgPage)
      break
    default:
      const pageModuleMain = await import("./pages/main.js")
      const mainPage = pageModuleMain.getMainPage()
      pageContainer.append(mainPage)
      break
  }
}

navigation()

const router = new Navigo("/")
router.on("/", async () => {
  const pageModuleMain = await import("./pages/main.js")
  const mainPage = pageModuleMain.getMainPage()
  pageContainer.append(mainPage)
})
router.on("/catalog", async () => {
  const pageModuleCatalog = await import("./pages/catalog.js")
  const catalogPage = pageModuleCatalog.getCatalogctPage()
  pageContainer.append(catalogPage)
})
router.on("/basket", async () => {
  const pageModuleBasket = await import("./pages/basket.js")
  const basketgPage = pageModuleBasket.getBasketPage()
  pageContainer.append(basketgPage)
})


app.append(header, pageContainer)
