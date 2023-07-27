export function getProductCard(title, price) {
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
