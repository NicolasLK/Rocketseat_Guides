/*
* Promise
*
* A promesa de que  algo irá acontecer
* Poderá dar certo ou errado,
* mas irá acontecer
*
*/

let accept = true

console.log("Pedindo Uber")

const promessa = new Promise ((resolve, reject) => {
    if (accept) {
        return resolve ("Pedido aceito!")
    }
    return reject("Pedido negado!")
})

promessa
.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(() => console.log("Corrida finalizada!"))

console.log("Aguardando")

