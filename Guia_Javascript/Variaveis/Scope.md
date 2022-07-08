# Scope

* Escopo determina a visibilidade de alguma variável no JS


# Block statement
```js
// Vamos inicar um bloco
{
    //aqui dentro é um bloco e posso colocar qualquer código

}// aqui fechamsos o bloco
````

o bloco, também criaráum novo escopo. Chamamos de 
`block-scoped`


# var
```js
// var é global e poderá funcionar fora de um escopo de bloco
// hoisting
console.log('> existe x antes do bloco ?', x)

{
    var x = 0
}

console.log('> existe x depois do bloco ?', x)
```

# let e const
```js
// const e let são locais e só funcionam no escopo onde foi criado
console.log('> existe y antes do bloco ?', y)

{
    let y = 0
}

console.log('> existe x depoisdo bloco ? ', y)
```