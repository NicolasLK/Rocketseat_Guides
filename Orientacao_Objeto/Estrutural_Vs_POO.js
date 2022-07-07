// Orientado a Objetos

class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calcularArea()
    }

    #calcularArea() {
        return this.altura * this.largura
    }
}


// Criar o objeto
let pol =  new Poligono(50, 60)
console.log(pol.area)
