// Função impura

// Ex 1: Está dependendo de dado externo
// que não foi passado como pârametro
function calculateCircumference(radius) {
    return Math.PI * (radius + radius)
}

// Ex 2: Está alterando um dado externo
let person = {
    name: "Rafael Camarda",
    age: "Jovem"
}

function changeName(name) {
    person.name = name
}

// Pura

// Ex 1:
const calculateCircumference = function (pi, radius) {
    return pi * (radius + radius)
}

// com arrow function
const calculateCircumference = (pi, radius) =>
    pi * (radius + radius)

// Ex 2:
const changePersonName = (person, name) => 
    ({...person, name})