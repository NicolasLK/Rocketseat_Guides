// getElementyById()

//const element = document.getElementById("blog-title")
//console.log(element)

//=======================================================

// getElementsByClassName()

//const element = document.getElementsByClassName("row")
//console.log(element)

//=======================================================

// getElementsByTagName()

//const element = document.getElementsByTagName("li")
//console.log(element)

//=======================================================

//querySelector()

//const element = document.querySelector(".row")
//console.log(element)

//=======================================================

//querySelectorAll()

//const elements = document.querySelectorAll(".row")

//elements.forEach(el => console.log(el))

//=======================================================

// Qual usar ?

// getElementById() - Element
// getElementByClassName() - HTML Collection
// getElementByTagName() - HTML Collection
// querySelector() - Element
// querySelectorAll() - Nodelist    

//=======================================================
//=======================================================

// Manipulado Conteúdo
//textContent

//const element = document.querySelector("h1")

//element.textContent = "Olá Dev!"

//console.log(element.textContent)

//=======================================================

// innerText

//const element = document.querySelector("h1")

//element.innerText = "Teste!"

//=======================================================

// innerHTML

//const element = document.querySelector("h1")

//element.innerHTML = "Barganhar! <small> !!! </small>"

//=======================================================

// value

//const element = document.querySelector("input")

//console.log(element.value)
//element.value = "Qualquer valor ai meu"

//=======================================================

// Atributos

//const header = document.querySelector("header")
//header.setAttribute("id", "header")
//header.setAttribute("class", "bg-header")

//console.log(header.getAttribute("id"))
//console.log(header.getAttribute("class"))

//header.removeAttribute("id")
//header.removeAttribute("class")

//=======================================================

// Alterando estilos

//const element = document.querySelector("body")

//element.style.backgroundColor = "#e04fa2"
//console.log(element.style.backgroundColor)

//=======================================================

// classList

//const element = document.querySelector("body")

//element.classList.add("active", "noactive")
//console.log(element.classList)
//element.classList.remove("active")
//element.classList.toggle("active")

//=======================================================

// Navegando pelos Elementos
// parentNode parentElement

//const element =document.querySelector("h1")

//console.log(element.parentElement)

//=======================================================

// childNodes Children

//const element =document.querySelector("header")

//console.log(element.childNodes)
//console.log(element.children)
//console.log(element.firstChild)
//console.log(element.firstElementChild)
//console.log(element.lastChild)
//console.log(element.lastElementChild)

//=======================================================

// nextSibling nextElementSibling
// previousSibling previousElementSibling

//const element = document.querySelector("input")

//console.log(element.nextSibling)
//console.log(element.nextElementSibling)
//console.log(element.previousSibling)
//console.log(element.previousElementSibling)

//=======================================================

// Criando e adicionando elementos
// createElement
// appendElement

//const element = document.createElement("div")

//element.innerText = "Adicionando elementos"

//const point = document.querySelector("body")

//point.append(element)

//point.prepend(element)

//=======================================================

// Adicionando elementos
// insertBefore

//const div = document.createElement("div")
//div.innerText = "Teste com texto"

//const body = document.querySelector("body")
//const header = body.querySelector("header")

//point.insertBefore(div, header) // Inserir antes de algum elemento
//body.insertBefore(div, header.nextElementSibling) // Inserir depois de algum elemento

//=======================================================

// Eventos

/*
function print() {
    console.log("print")
}
*/

/*
const input = document.querySelector("input")

input.onkeydown = function() {
    console.log("Clicou")
}
*/

/*
const h1 =document.querySelector("h1")

h1.addEventListener("mouseover", print)

function print() {
    console.log("Eeeeii")
}
*/

/*
Executando duas funções juntas
const h1 =document.querySelector("h1")

h1.addEventListener("click", print)

function print() {
    console.log("Eeeeii")
}

h1.addEventListener("click", function() {
    console.log("Aaaaii")
})
*/

// argumento event

/*
const input = document.querySelector("input")

input.onkeydown = function(event) {
    console.log(event.target)
}
*/

//=======================================================

