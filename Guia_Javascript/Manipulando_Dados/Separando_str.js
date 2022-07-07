/* 

    * Manipulando Strings e Números

    * Separe um texto que contém espaços, em um novo array onde 
    cada texto é uma posição do array. Depois disso, transforme
    o array em um texto e onde eram espaços, coloque _

*/

let phrase = 'Pescaria é um esporte muito divertido!'
let myArray = phrase.split(' ')
console.log(myArray)
let newPhrase = myArray.join('_')
console.log(newPhrase.toUpperCase())


