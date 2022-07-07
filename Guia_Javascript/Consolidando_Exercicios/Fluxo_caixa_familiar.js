/*

  Vamos fortalecer e aplicar os conhecimentos, 
  além de aprender truques e dicas para resolver 
  os desafios e avançar para o próximo nível

*/

//Fluxo de caixa familiar

/*
    Crie um objeto que possuirá 2 propriedades, ambas do tipo
    array:
        * receitas: []
        * despesas: []

- Agora crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com saldo 
positivo ou negativo, seguido do valor do saldo
    
*/ 

let family = {
    receitas: [2700],
    despesas: [3250]
}

function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }

  return total
}

function balanceCalculate() {
  const calculateReceitas = sum(family.receitas)
  const calculateDespesas = sum(family.despesas)

  const total = calculateReceitas - calculateDespesas

  const itsOk = total >= 0 

  let msg

  if (itsOk) {
    msg = "Positivo"

  } else {
    msg = "Negativo"

  }

  console.log(`Saldo familiar, ${msg}: R$${total.toFixed(2)}`)

}

balanceCalculate()


