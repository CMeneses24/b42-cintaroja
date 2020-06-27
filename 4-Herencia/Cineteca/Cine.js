/*
Destructuring / destructuración
const objeto = {
    a:1,
    b:'hola',
    letra:'valor del letra',
    caballo:'Veloz'
}
const { letra, caballo } = objeto;
*/

class Cine {
    constructor(nombre) {
        this.nombre=nombre;
    }
    reproducir(){
        console.log(`Lo que estas viendo se llama ${this.titulo} en un horario ${this.horario} con una duracion de ${this.duracion}`)
    }
}

module.exports = { 
    Cine,
};