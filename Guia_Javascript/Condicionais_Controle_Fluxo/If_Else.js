/* 
  If ... else 

  construir dentro do bloco --> {}

*/

let normalTemperature = 36.9
let hightTemperature =  normalTemperature >= 37.5
let mediumlTemperature = normalTemperature < 37.5 && normalTemperature >= 37

if (hightTemperature) {
    console.log("Febre alta")

} else if(mediumlTemperature) {
    console.log("Febre moderada")

} else {
    console.log("Saudável")
}

