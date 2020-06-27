/*1.- Muestra un mensaje mediante un callback.
La función de orden superior que escribas debe poder mostrar el mensaje como
console.warn, console.info, o cualquier método para pintar en consola del objeto console.
2.- Hacer un arreglo de 4 cantidades de tiempo (en minutos)
EJEMPLO [120, 80, 200, 100]
    y tomar solo las cantidades
mayores a dos horas (hacer la comparación en horas)
mediante un callback.*/

function mensaje (callback){
    let texto = 'wenas wenas';
    console.info(callback(texto));
   
    setTimeout(() => {
        console.error('ya quedo');
    }, 3000);
    texto2='awanta';
    console.warn(callback(texto2));
};
/*mensaje(habla => {
    return  habla;
});*/

//----------------------------------------------------------------------------------

const tiempo = [500,100,60,90];

var tie = tiempo.map((elemento) =>{
    if(elemento/60 > 2){
        console.log('Tus horas son ' + elemento/60);
    }else{
        console.log('Tiempo menor a dos horas')
    };
});