const circuloDiv = document.getElementById("circulo");
const alturaVentana = window.innerHeight;
const anchoVentana = window.innerWidth;
console.log(alturaVentana);


function centrarCirculo(circuloDiv){
    circuloDiv.style.width=`150px`;
    circuloDiv.style.height=`150px`;
    circuloDiv.style.borderRadius='50%';
    circuloDiv.style.position='absolute';
    circuloDiv.style.top=`${alturaVentana/2 - parseInt(circuloDiv.style.height)/2}px`;
    circuloDiv.style.left=`${anchoVentana/2 - parseInt(circuloDiv.style.width)/2}px`;
    circuloDiv.style.backgroundColor= `none`;
    circuloDiv.style.border = `2px solid #000`;
}

//no me ha dado tiempo a hacer bien el evento
centrarCirculo(circuloDiv);
circuloDiv.addEventListener(window.onresize);