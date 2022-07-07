// [x] 1. Declare uma variável de nome weight
//let weight

// [x] 2. Que tipo de dado é a variável acima ?
//console.log(typeof weight)

/* 
    [x] 3. Declare uma variável e atribua valores para cada
    um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
        
*/

// let nome = 'Nick'
// let age = 21
// let stars = 19.3
// let isSubscribed = true


/* 
    [x] 4. A variável student abaixo é que tipo de 
    dado ?

    [x] 4.1. Atribua a ela as mesmas propriedades e valores 
    do exercício 3.

    [] 4.2. Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos 
        valores de cada propriedade do objeto

*/

 let student = {
    nome : 'Nicolas',
    age : 21,
    weight : 87.3,
    isSubscribed : true
}

// console.log(student)


// console.log(`${student.nome} de idade ${student.age} pesa ${student.weight} kg.`)

/* 

    [x] 5. Declare uma variável de tipo Array, de nome students e atribua a ela 
    nenhum valor, ou seja, somente o Array vazio ?

*/

let students = []

// console.log(students)

/* 

    [x] 6. Reatribua valor para a variável acima, colocando dentro dela 
    o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado 
    e inserir ele no Array)


*/

students = [
    student
]


// console.log(students)

/* 

    [x] 7. Coloque no console o valor da posição Zero do Array acima

*/

// console.log(students[0])


/* 

    [] 8. Crie um novo student e coloque na posição 1 do Array students

*/

let studentNew = {
    nome : 'Isadora',
    age : 20,
    weight : 73.8,
    isSubscribed : true
}

/* students = [
    student,
    studentNew
]
*/

students[1] = studentNew

console.log(students)

/* 

    [x] 9. Sem rodar o código responda qual é a resposta do 
    código abaixo e por que? Após sua resposta, rode o código e veja 
    se você acertou.

    console.log(a)
    var a = 1

*/

console.log(a)
var a = 1

