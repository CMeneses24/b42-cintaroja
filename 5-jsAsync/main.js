function getUser(callback,exito){
    //simular consultar API
    const usuarios =[
        {
            name: 'Mali'
        },
        {
            name: 'Ernesto'
        },
        {
            name: 'Eusebio'
        }
    ];
    setTimeout(()=> {
        //status code
        if (exito){
        callback(usuarios,'200 todo chido');
    }else{
        callback(usuarios,'400 nada chido');
    }

    },3000);
};

/*getUser((_,emocionanteMensaje) => {
    console.log(emocionanteMensaje);
});

getUser((user) =>{
    console.log(user);
},true);*/

const array1 = [1,4,9,16];

const map1= array1.map((elementoactual) => {
    console.log(elementoactual);
    return elementoactual*2;
});

