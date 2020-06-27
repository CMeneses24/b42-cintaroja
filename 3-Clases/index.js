const carro ={
    color:'rojo',
    velocidad:30,
    ruedas:4,
    motor: 'v6',
    arranca(){
        console.log('run run');
    },
    frena(){
        console.log('iiiii');
    },
    dobla(){
        console.log('el carro está doblando')
    }
}
//class es plantilla para hacr objetos 
// constructor inicializar y crear variables, se pasan dentro de los parametros (xxxx)
class Carro {
    constructor(duenio,color,velocidad,ruedas,motor,tipoderueda){
        this.duenio=duenio;
        this.color=color;
        this.velocidad=velocidad;
        this.ruedas=ruedas;
        this.motor=motor;
        this.vendido= false;
        this.tipoderueda=tipoderueda;
    };
arranca(){
    //evaluando this.vendido sea igual a true
    if(this.vendido){
    console.log(` el carro de ${this.duenio} hace run run`);
    }else{
        console.log(` el carro de ${this.duenio} no puede hacer run run porque no esta pagado`);
    }
};
frena(){
    console.log('iiiii');
};
dobla(){
    console.log('el carro está doblando')
};
}

//nueva clase para carro
class Rueda{
    constructor (rin,rodada){
    this.rin=rin;
    this.rodada=rodada;
    };
}
//nuevo carro se llama al costructor
const tipoderueda = new Rueda('aluminio',32);

const carro1= new Carro('César','blanco',50,4,'v6',new Rueda('aluminio',32));
const carro2= new Carro('daniel','rojo',50,4,'v6',tipoderueda);

//console.log(carro);
//console.log(carro1);
console.log(carro1.tipoderueda.rodada)
console.log(carro2.tipoderueda.rodada)
carro2.precio= 200000;
carro1.arranca();
carro2.vendido=true;
carro2.arranca();

//regresa 2 cosas console.log(carro2.arranca());

