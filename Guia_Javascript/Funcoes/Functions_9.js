//Funções - functions 9

/* Function constructor

    * expressão new
    * cria um novo objeto
    * this keyword

*/

function Person(name) {
    this.name = name
    this.walk = function(){
        return this.name  + ' esta andando!'
    }
        
}

const nick = new Person("Nicolas")
const isa = new Person("Isadora")
console.log(nick.walk())
console.log(isa.walk())
