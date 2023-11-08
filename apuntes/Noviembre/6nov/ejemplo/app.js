// const nuevoLi = document.createElement('li');
// const nuevoTexto = document.createTextNode("tercero");
// nuevoLi.appendChild(nuevoTexto);
// document.getElementsByTagName('ul')[0].appendChild(nuevoLi);
// document.querySelector('ul').firstChild.before(nuevoLi);


const primerH1=document.getElementsByTagName('H1')[0];
console.log(primerH1);
primerH1.classList.add('rojo');
primerH1.classList.add('centrado');
console.log(primerH1.classList);
primerH1.classList.remove('rojo');

const segundo = document.getElementsByTagName('LI')[document.getElementsByTagName('LI').length-1];
console.log('segundo');
segundo.setAttribute('style', 'color: green');
console.log(segundo.attributes);

const primero = document.getElementsByTagName('LI')[0];
console.log(primero.attributes);
if (primero.hasAttribute('style')){
    
}