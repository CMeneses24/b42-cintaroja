/* ECMA Script 6 */

let nombreL= '';
nombreL='mali';
nombreL={};

const nombrec={
    nombre:'mali'};/* no podemos cambiar variables declaradas*/

    nombrec.nombre='Edwin';

    console.log(nombrec,nombreL);

    const mascotas=['rayas','mocka','cosa'];
    
    mascotas.push('paloma');
console.log(mascotas);

function nombreFuncion(){
    //funcition this
}
let variablelet = 'valor';

const nombreArrowFunction= () => {
// todo el archivo
    console.log(variablelet);
}

//ejecucion de la funcion
nombreArrowFunction();

/* Estructuras de control
for
fro each
else 
if else
while do
switch*/
const a= '3';
if (a==='1'){
} else if(a==='2'){
}else if (a==='3'){
}

switch(a){
    case '1':
        //cod switch 1
        break;    
    case '2':
        //cod switch 2
        break;
    case '3':
        //cod switch 3
        break;
    default:
        //casos que no se cumplio
        break;
}

const devolverValores=() => {
    let contador =0;
    while (true){
        // contador= contador+1;
        //contador++
        contador +=1;
        if (contador === 4) {
            break;
        }
    }
    contador=contador>4 ? contador + 3: contador--;
    return'la cantidad de veces que se contó es ${contador}';
}

devolverValores()

console.log(0/0);