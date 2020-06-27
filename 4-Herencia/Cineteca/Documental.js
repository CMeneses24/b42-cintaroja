// Agregar 1 método y dos cracterísticas extras diferentes de las de largometraje y pelicula
class Documental extends Largometraje{
    constructor(titulo,horario,duracion,genero){
        super(titulo,horario,duracion)
        this.genero=genero;
    }
}
module.exports = { 
    Documental,
};