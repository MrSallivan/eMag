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
  link1.classList.add("btn")
  link1.textContent = "Главная страница"
  let link2 = document.createElement("a")
  link2.href = ""
  link2.classList.add("btn")
  link2.textContent = "Каталог"
  let link3 = document.createElement("a")
  link3.href = ""
  link3.classList.add("btn")
  link3.textContent = "Корзина"

  nav.append(link1, link2, link3)
	container.append(nav)
  header.append(container)
  return header
}

const header = getHeader()

app.append(header)
