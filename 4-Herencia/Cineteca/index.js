const { Cine } = require('./Cine');
const { Documental } = require('./Documental');
const { Pelicula } = require('./Pelicula');

const cinemex = new Cine('CinemexReforma');
// reproducir el documental Cosmos
const documental = new Documental('pinguinos','11:30','2 horas','Naturaleza');
// reproducir un largometraje

cinemex.reproducir(documental);

//reproducir su pelicula Fvorita
const pelicula = new Pelicula('a','9:15','1 hora',50);

cinemex.reproducir(pelicula);

