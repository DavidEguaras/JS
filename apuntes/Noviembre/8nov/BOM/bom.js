console.log("bom1");
let i = 0;
console.log("bom1");
function muestraMensaje(){
    console.log("hola despues de 2 segundos")
}

function muestraMensaje2(msg){
    console.log("hola despues de 2 segundos")
}

const idTimeout = setTimeout (muestraMensaje, 2000);
const idTimeout2 = setTimeout(muestraMensaje2, 2000, "Hola majos", "klhlkj")




// const idInterval=setInterval(() =>{
//     console.log("cada 2 segundos" + "llevo"+ ++i  +"veces");
//     if (i===5){
//         clearInterval(idInterval);
//         console.log("FIN");
//     }
// }
// )


