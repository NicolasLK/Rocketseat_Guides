/* 
  Switch

*/

let expression = "a"
/*
switch(expression) {
    case "a":
        //....
        console.log("a")
        break
    
    case "b":
        //......
        console.log("b")
        break
    
    default:
        console.log("default")
        break
}
*/

function calculator(num1 , operator, num2) {
    let result

    switch (operator) {
        case "+":
            result = num1 + num2
            break

        case "-":
            result = num1 - num2
            break

        case "*":
            result = num1 * num2
            break

        case "/":
            result = num1 / num2
            break

        default:
            console.log("Não implementado!")
            break
    }

    return result
}

// Adição
console.log(calculator(5, "+", 7))

// Subtração
console.log(calculator(5, "-", 7))

// Adição Multiplicação
console.log(calculator(5, "*", 7))

// Divisão
console.log(calculator(5, "/", 7))

// Não implementado
console.log(calculator(5, "%", 7))
