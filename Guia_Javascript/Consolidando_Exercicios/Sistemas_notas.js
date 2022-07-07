/*

  Vamos fortalecer e aplicar os conhecimentos, 
  além de aprender truques e dicas para resolver 
  os desafios e avançar para o próximo nível

*/

//Sistemas de notas escolares

/*
    Crie um algoritimo que transforme as notas do sistema numérico para 
    sistema de notas tipo A B C 

    * de 90 para cima - A > Nota A (90%+)
    * entre 80 - 89 - B > Nota B (80% - 89% )
    * entre 70 - 79 - C > Nota C (70% - 79%)
    * entre 60 - 69 - D > Nota D (60% - 69%)
    * menor que 60 - F > Nota F (<60%)
    
*/  


function f_ResultFinal(nota1, nota2, nota3) {
    media = (nota1 + nota2 + nota3)/3
    let aprovacao

    if (media >= 9) {
        aprovacao = "Nota A (90%+)"

    } else if (media >= 8 && media <= 8.9) {
        aprovacao = "Nota B (80% - 89% )"

    } else if (media >= 7 && media <= 7.9) {
        aprovacao = "Nota C (70% - 79%)"

    } else if (media >= 6 && media <= 6.9) {
        aprovacao  = "Nota D (60% - 69%)"

    } else if (media < 6 && media >= 0) {
        aprovacao = "Nota F (<60%)"

    } else {
        console.log("Nota invalida!")
    }

    return aprovacao
}


console.log(f_ResultFinal(7.2, -8, 6.4))


