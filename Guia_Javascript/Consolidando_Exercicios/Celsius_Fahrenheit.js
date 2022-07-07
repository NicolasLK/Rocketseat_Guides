/*

  Vamos fortalecer e aplicar os conhecimentos, 
  além de aprender truques e dicas para resolver 
  os desafios e avançar para o próximo nível

*/

//Celsius to Fahrenheit

/*

  Crie uma função que receba uma string em celsius ou fahrenheit e 
  faça a transformação de uma unidade para a outra.
  
  C = (F - 32) * 5/9

  F = C * 9/5 + 32
    
*/ 





function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C")
  const fahrenheitExists = degree.toUpperCase().includes("F")

  //Fluxo de erro
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error("Grau inexistente")
  }

  //Fahrenheit --> Celsius
  let updataDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = fahrenheit => (fahrenheit - 32) * 5/9
  degreeSign = "C"

  if(celsiusExists){
    //Celsius --> Fahrenheit
    updataDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = celsius => celsius * 9/5 + 32
    degreeSign = "F"

  }

 

  return formula(updataDegree) + degreeSign

}

try {
  console.log(transformDegree("10C"))
  console.log(transformDegree("50F"))
  transformDegree("83z")

} catch (error) {
  console.log(error.message)
}

