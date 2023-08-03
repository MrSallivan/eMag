import { getHeader } from "./components/header.js"
import { getPageContainer } from "./components/pageContainer.js"
import Navigo from "navigo"

const app = document.getElementById("app")
const header = getHeader()
const pageContainer = getPageContainer()

export const router = new Navigo("/")

router.on("/", async () => {
  pageContainer.innerHTML = ""
  const pageModuleMain = await import("./pages/main.js")
  const mainPage = pageModuleMain.getMainPage()
  pageContainer.append(mainPage)
})
router.on("/catalog", async () => {
  pageContainer.innerHTML = ""
  const pageModuleCatalog = await import("./pages/catalog.js")
  const catalogPage = pageModuleCatalog.getCatalogctPage()
  pageContainer.append(catalogPage)
})
router.on("/basket", async () => {
  pageContainer.innerHTML = ""
  const pageModuleBasket = await import("./pages/basket.js")
  const basketgPage = pageModuleBasket.getBasketPage()
  pageContainer.append(basketgPage)
})
router.on("/product/:title", async ({ data }) => {
  pageContainer.innerHTML = ""
  const pageModuleProduct = await import("./pages/product.js")
  const productPage = pageModuleProduct.getProductPage(data.title)
  pageContainer.append(productPage)
})
router.resolve()
app.append(header, pageContainer)
