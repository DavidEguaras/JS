
const body = document.getElementsByTagName('body')[0];
const listaH1 = document.getElementsByTagName('h1');
const listaH2 = document.getElementsByTagName('h2');
const divSuperior = document.createElement('div');
const divInferior = document.createElement('div');
//----------------------agregar div en la parte superior del body (primer elemento)----------------------
body.insertBefore(divSuperior, body.children[0]);


//----------------------Pasar todos los elementos del body al divInferior---------------------
//Guardamos los hijos del Body en una coleccion
const hijosBody = body.children;
const arrayHijosBody= Array.from(hijosBody);


//Hacemos que el divInferior contenga los elementos que antes tenia el body
for(let i = 0; i < arrayHijosBody.length; i++){
    divInferior.append(arrayHijosBody[i]);
}


//----------------------agregar div en la parte inferior del body (ultimo elemento) con su contenido----------------------
body.appendChild(divInferior);





