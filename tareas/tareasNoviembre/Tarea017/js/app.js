import { Bola } from "./clases/clase_bola.js";
import { misFunciones } from "./libreria/misfunciones.js";
//constructor(radio, posX, posY, colorBola, linearGradient)
new Bola(85,1,1,'red', 'linear-gradient(to bottom, #2196f3, #009688)');
new Bola(55,200,600,'red', 'linear-gradient(to left, #7196f3, #ff9688)');
new Bola(60, 250,250,"green");
//console.log(Bola.arrayBolas);
//Bola.arrayBolas.forEach(bola=>bola.visualizar());

function nuevaBola(){
    const sound = new Audio('sound.mp3');
    sound.play();
    let radio=misFunciones.generarRandomInt(79)+5;
    let posX=misFunciones.generarRandomInt(window.innerWidth-2*radio);
    let posY=misFunciones.generarRandomInt(window.innerHeight-2*radio);
    console.log(posY);
    let lgAngulo=misFunciones.generarRandomInt(259);

    let lgInicialR=misFunciones.pasarAHexadecimal(misFunciones.generarRandomInt(255));
    let lgInicialG=misFunciones.pasarAHexadecimal(misFunciones.generarRandomInt(255));
    let lgInicialB=misFunciones.pasarAHexadecimal(misFunciones.generarRandomInt(255));
    let colorInicial=`#${lgInicialR}${lgInicialG.toString(16)}${lgInicialB.toString(16)}`;

    let lgFinalR=misFunciones.pasarAHexadecimal(misFunciones.generarRandomInt(255));
    let lgFinalG=misFunciones.pasarAHexadecimal(misFunciones.generarRandomInt(255));
    let lgFinalB=misFunciones.pasarAHexadecimal(misFunciones.generarRandomInt(255));
    let colorFinal=`#${lgFinalR.toString(16)}${lgFinalG.toString(16)}${lgFinalB.toString(16)}`;
    let linearGradient=`linear-gradient(${lgAngulo}deg,${colorInicial},${colorFinal})`;
    let nuevaBola=new Bola(radio, posX, posY,'cyan',linearGradient);
    nuevaBola.visualizar();
}
const boton= misFunciones.crearBotonCentrado();
boton.addEventListener('click', nuevaBola);