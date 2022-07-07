// const e let são locais e só funcionam no escopo onde foi criado
// const não pode ser alterada

let y = 1

{
    let y = 0
    console.log('> existe y antes do bloco ?', y)
}

console.log('> existe y depoisdo bloco ? ', y)