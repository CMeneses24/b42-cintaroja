// Agregar 1 método y dos cracterísticas extras diferentes de las de largometraje y documental
const{largometraje}= require(./Largometraje);

class Pelicula extends Largometraje{
    constructor(titulo,horario,duracion,precio){
        super(titulo,horario,duracion)
        this.precio=precio;
    }
}
module.exports = { 
    Pelicula,
};