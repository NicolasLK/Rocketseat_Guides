// Manipulando Arrays

let techs = ['html', 'css', 'js']

/* 

- adicionar um item no fim (1)
- adicionar no começo (2)
- remover no fim (3)
- remover no começo (4)
- pegar somente alguns elementos do array (5)
- remover 1 ou mais items em qualquer posição do array (6)
- encontrar a posição de um elemento no array (7)

*/

techs.push('php') // (1)
techs.unshift('sql') // (2)
//techs.pop() // (3)
//techs.shift() // (4)
//console.log(techs.slice(1, 3))  // (5)
//techs.splice(0, 1) // (6)
let index = techs.indexOf('js') // (7)

// ------------------------------------------
console.log(techs)
console.log(`A posição do js no Array é o Nº ${index}`)

