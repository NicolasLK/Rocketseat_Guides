//IMC

/*
  O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no 
peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o 
indivíduo dentro de certas faixas.

  - acima de 40: Obseidade mórbida
  - entre 30 e 40: Obesidade
  - entre 25 e 30: Sobrepeso
  - entre 18.5 e 25: Peso ideal
  - abaixo de 18.5: Abaixo do peso

Obs: O IMC é calculado pela expressão peso/altura² (peso dividido pelo quadrado 
da altura)
    
*/ 


let weightObesityPlus = " Obesidade mórbida"
let weightObesity = "Obesidade"
let overWeight = "Sobre peso"
let idealWeight = "Peso ideal"
let underWeight = "Abaixo do peso"

let weight = 84
let height = 1.70

let IMC = weight/(height**2)

let situation


if (IMC > 40) {
  situation = `Seu IMC é ${IMC.toFixed(2)}: ${weightObesityPlus}`

} else if (IMC >= 30 && IMC <= 40) {
  situation = `Seu IMC é ${IMC.toFixed(2)}: ${weightObesity}`

} else if (IMC >= 25 && IMC <= 30) {
  situation = `Seu IMC é ${IMC.toFixed(2)}: ${overWeight}`

} else if (IMC >= 18.5 && IMC <= 25) {
  situation = `Seu IMC é ${IMC.toFixed(2)}: ${idealWeight}`

} else if (IMC < 18.5 && IMC >= 12.5) {
  situation = `Seu IMC é ${IMC.toFixed(2)}: ${underWeight}`

} else {
  situation = `Massa invalida ${IMC.toFixed(2)}`
}

console.log(situation)
