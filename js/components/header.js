import {navigation} from "../main.js"

export function getHeader(params) {
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
      navigation()
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
