/*1.- Haz una clase llamada Persona que siga las siguientes condiciones:
	 Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
	 calcularIMC()
	 esMayorDeEdad()
	 El constructor pide nombre, edad,sexo,peso y altura
	 Generar el RFC a partir de el nombre, edad y sexo
this.edad.charat(posiciones a traer)*/
class persona {
    constructor(nombre,edad,rfc,sexo,peso,altura){
    this.nombre=nombre;
    this.edad=edad;
    this.rfc=rfc;
    this.sexo=sexo;
    this.peso=peso,
    this.altura=altura;};

    calcularIMC(){
        console.log(`Tu IMC es: ${this.peso/this.altura}`);
    };
    esMayorDeEdad(){
        if(this.edad> 18){
            console.log('Eres mayor de edad');
        }else{
            console.log('Eres menor de edad');
        }
    };
    sacarrfc(){
        console.log(``)
    };
};
const pers = new persona('Cesar Meneses Cruz',24,true,'masculino',65,1.60);
pers.calcularIMC();
pers.esMayorDeEdad();
pers.sacarrfc();

/*2.- Crear una clase Cuenta que tenga los siguientes atributos y métodos:
	 -Titular y cantidad, estado 
	 -ingresar(cantidad)
	 -retirar(cantidad)
	 Hacer las validaciones previas
     Como regla de negocio no debe de tener más de $900 y menos de $10*/
    class cuenta {
    constructor(titular,cantidad){
        this.titular=titular;
        this.cantidad=cantidad;
    };
    estado(){
        if(this.cantidad > 9 && this.cantidad < 901 ){
            console.log(`${this.titular} tu cuenta tiene ${this.cantidad}`)
        }else{
            console.log(`Error de cuenta`)
        }
    };
    ing(dep){
        if(this.cantidad + dep > 9 || this.cantidad + dep < 901 ){
               return this.cantidad + dep
        }else
        console.log(`Ingresaste una cantidad erronea`)
    }
};
    class ret {
        constructor(reti){
            this.reti=reti;
    };
    retirar(){
        if(this.cantidad > 9 || this.cantidad < 901 ){
        this.cantidad-this.reti
        }else{
            console.log(`Ingresaste una cantidad erronea`)
        }
    }
};
        
const cuen= new cuenta('Cesar Meneses Cruz',10);
cuen.estado();
cuen.ingresar(80);
const retir= new ret(80);
retir.retirar();