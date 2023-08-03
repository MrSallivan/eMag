import { router } from "../main.js"

export function getProductCard(title, price) {
  const item = document.createElement("li")
  item.classList.add("product-list__item")
  const productTitle = document.createElement("h2")
  productTitle.classList.add("product-list__title")

  let productLink = document.createElement("a")
  productLink.textContent = title
  productLink.style.cursor = "pointer"
  productLink.href = ""
  productLink.setAttribute("data-navigo", true)

  productLink.addEventListener("click", (event) => {
    event.preventDefault()
    router.navigate(`/product/${title}`)
  })

  productTitle.append(productLink)

  const productPrice = document.createElement("strong")
  productPrice.classList.add("product-list__price")
  productPrice.textContent = `${price} рублей`
  const addBasket = document.createElement("button")
  addBasket.classList.add("product-list__btn", "btn")
  addBasket.textContent = `В корзину`
  item.append(productTitle, productPrice, addBasket)
  return item
}
